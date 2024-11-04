"use strict";
// Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
// See LICENSE in the project root for license information.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.runEslintAsync = void 0;
const get_eslint_cli_1 = require("./utils/get-eslint-cli");
async function runEslintAsync(files, mode) {
    const cwd = process.cwd();
    const eslintPath = (0, get_eslint_cli_1.getEslintPath)(cwd);
    const { ESLint } = require(eslintPath);
    const eslint = new ESLint({
        useEslintrc: true,
        cwd
    });
    let results;
    try {
        results = await eslint.lintFiles(files);
    }
    catch (e) {
        throw new Error(`@rushstack/eslint-bulk execution error: ${e.message}`);
    }
    const { write, prune } = await Promise.resolve().then(() => __importStar(require('../bulk-suppressions-patch')));
    switch (mode) {
        case 'suppress': {
            await write();
            break;
        }
        case 'prune': {
            await prune();
            break;
        }
    }
    if (results.length > 0) {
        const stylishFormatter = await eslint.loadFormatter();
        const formattedResults = stylishFormatter.format(results);
        console.log(formattedResults);
    }
    console.log('@rushstack/eslint-bulk: Successfully pruned unused suppressions in all .eslint-bulk-suppressions.json ' +
        `files under directory ${cwd}`);
}
exports.runEslintAsync = runEslintAsync;
//# sourceMappingURL=runEslint.js.map