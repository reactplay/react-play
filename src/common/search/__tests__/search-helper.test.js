import { ParseQuery, QueryExtractValue, QueryDBTranslator } from '../search-helper';

describe('ParseQuery', () => {
  it('parses a query string into an object', () => {
    expect(ParseQuery('?levels=1&tags=react')).toEqual({
      levels: '1',
      tags: 'react'
    });
  });

  it('handles query strings without leading ?', () => {
    expect(ParseQuery('levels=1&tags=react')).toEqual({
      levels: '1',
      tags: 'react'
    });
  });

  it('decodes URI-encoded values', () => {
    expect(ParseQuery('text=hello%20world')).toEqual({
      text: 'hello world'
    });
  });

  it('handles empty value for a key', () => {
    expect(ParseQuery('key=')).toEqual({ key: '' });
  });

  it('returns undefined for falsy input', () => {
    expect(ParseQuery('')).toBeUndefined();
    expect(ParseQuery(null)).toBeUndefined();
    expect(ParseQuery(undefined)).toBeUndefined();
  });
});

describe('QueryExtractValue', () => {
  it('splits comma-separated values into arrays', () => {
    const query = { levels: '1,2,3', tags: 'react,javascript' };
    expect(QueryExtractValue(query)).toEqual({
      levels: ['1', '2', '3'],
      tags: ['react', 'javascript']
    });
  });

  it('wraps single values in an array', () => {
    expect(QueryExtractValue({ levels: '1' })).toEqual({
      levels: ['1']
    });
  });
});

describe('QueryDBTranslator', () => {
  it('translates datafield keys to dbfield keys', () => {
    const query = { levels: '1,2' };
    const result = QueryDBTranslator(query);
    // levels maps to level_id per FIELD_TEMPLATE
    expect(result).toHaveProperty('level_id', ['1', '2']);
  });

  it('keeps datafield key when no dbfield mapping exists', () => {
    const query = { tags: 'react-tag-id' };
    const result = QueryDBTranslator(query);
    // tags has no dbfield in FIELD_TEMPLATE
    expect(result).toHaveProperty('tags', ['react-tag-id']);
  });

  it('handles text field specially as a single string', () => {
    const query = { text: 'my search' };
    const result = QueryDBTranslator(query);
    expect(result.text).toBe('my search');
  });

  it('ignores query keys not in FIELD_TEMPLATE', () => {
    const query = { unknownField: 'value' };
    const result = QueryDBTranslator(query);
    expect(Object.keys(result)).toHaveLength(0);
  });

  it('handles combined query with multiple fields', () => {
    const query = {
      levels: '1,2',
      creators: 'user-id-1',
      languages: 'js',
      text: 'todo app'
    };
    const result = QueryDBTranslator(query);
    expect(result).toEqual({
      level_id: ['1', '2'],
      owner_user_id: ['user-id-1'],
      language: ['js'],
      text: 'todo app'
    });
  });
});
