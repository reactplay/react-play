import { compareTextValue, getProdUrl, formatDate } from '../commonUtils';
import countByProp from '../commonUtils';

describe('compareTextValue', () => {
  it('returns true when string option contains search text (case-insensitive)', () => {
    expect(compareTextValue('Hello World', 'hello')).toBe(true);
    expect(compareTextValue('Hello World', 'WORLD')).toBe(true);
  });

  it('returns false when string option does not contain search text', () => {
    expect(compareTextValue('Hello World', 'xyz')).toBe(false);
  });

  it('handles React element with props.children array', () => {
    const element = { props: { children: ['icon', 'JavaScript'] } };
    expect(compareTextValue(element, 'java')).toBe(true);
    expect(compareTextValue(element, 'python')).toBe(false);
  });
});

describe('getProdUrl', () => {
  it('prepends the reactplay.io domain to a path', () => {
    expect(getProdUrl('/plays/my-play')).toBe('https://reactplay.io/plays/my-play');
  });

  it('handles root path', () => {
    expect(getProdUrl('/')).toBe('https://reactplay.io/');
  });

  it('handles empty string', () => {
    expect(getProdUrl('')).toBe('https://reactplay.io');
  });
});

describe('countByProp', () => {
  const items = [
    { type: 'play', name: 'A' },
    { type: 'idea', name: 'B' },
    { type: 'play', name: 'C' },
    { type: 'play', name: 'D' }
  ];

  it('counts items matching the given key-value pair', () => {
    expect(countByProp(items, 'type', 'play')).toBe(3);
    expect(countByProp(items, 'type', 'idea')).toBe(1);
  });

  it('returns 0 when no items match', () => {
    expect(countByProp(items, 'type', 'missing')).toBe(0);
  });

  it('returns 0 for an empty array', () => {
    expect(countByProp([], 'type', 'play')).toBe(0);
  });
});

describe('formatDate', () => {
  it('formats an ISO date string into "Joined DD Mon YYYY"', () => {
    const result = formatDate('2023-06-15T10:00:00Z');
    expect(result).toMatch(/^Joined 15 \w+ 2023$/);
  });

  it('returns empty string for falsy input', () => {
    expect(formatDate('')).toBe('');
    expect(formatDate(null)).toBe('');
    expect(formatDate(undefined)).toBe('');
  });
});
