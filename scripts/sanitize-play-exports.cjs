#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');

const indexPath = path.join(process.cwd(), 'src', 'plays', 'index.js');

if (!fs.existsSync(indexPath)) {
  console.warn(`[sanitize-play-exports] Skipped: file not found at ${indexPath}`);
  process.exit(0);
}

const source = fs.readFileSync(indexPath, 'utf8');
const newline = source.includes('\r\n') ? '\r\n' : '\n';
const hasTrailingNewline = source.endsWith('\n');
const lines = source.split(/\r?\n/);

const exportLinePattern = /^(\s*export\s*\{\s*default\s+as\s+)([^}]+?)(\s*\}\s*from\s*['"][^'"]+['"]\s*;?\s*)$/;
const isValidIdentifier = (value) => /^[$A-Z_a-z][$0-9A-Z_a-z]*$/.test(value);

const toPascalCase = (value) => {
  const chunks = value
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .split(/[^0-9A-Z_a-z$]+/)
    .filter(Boolean);

  let identifier = chunks
    .map((chunk) => chunk.charAt(0).toUpperCase() + chunk.slice(1))
    .join('');

  if (identifier.length === 0) {
    identifier = 'Play';
  }

  if (!/^[$A-Z_a-z]/.test(identifier)) {
    identifier = `Play${identifier}`;
  }

  return identifier;
};

const usedAliases = new Set();
let updateCount = 0;

const nextLines = lines.map((line) => {
  const match = line.match(exportLinePattern);
  if (match == null) {
    return line;
  }

  const [, prefix, rawAlias, suffix] = match;
  const currentAlias = rawAlias.trim();
  let nextAlias = currentAlias;

  if (!isValidIdentifier(currentAlias)) {
    nextAlias = toPascalCase(currentAlias);
  }

  const aliasBase = nextAlias;
  let duplicateIndex = 2;
  while (usedAliases.has(nextAlias)) {
    nextAlias = `${aliasBase}${duplicateIndex}`;
    duplicateIndex += 1;
  }
  usedAliases.add(nextAlias);

  if (nextAlias !== currentAlias) {
    updateCount += 1;
    return `${prefix}${nextAlias}${suffix}`;
  }

  return line;
});

let nextSource = nextLines.join(newline);
if (hasTrailingNewline) {
  nextSource += newline;
}

if (nextSource !== source) {
  fs.writeFileSync(indexPath, nextSource, 'utf8');
  console.log(`[sanitize-play-exports] Updated ${updateCount} export alias(es).`);
} else {
  console.log('[sanitize-play-exports] No invalid aliases found.');
}
