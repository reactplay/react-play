import { renderHook } from '@testing-library/react';
import useCacheResponse from '../useCacheResponse';

describe('useCacheResponse', () => {
  it('stores and retrieves cached data', () => {
    const { result } = renderHook(() => useCacheResponse());
    const [retrieveCache, createCache] = result.current;

    createCache('testKey', { data: 'hello' });
    expect(retrieveCache('testKey')).toEqual({ data: 'hello' });
  });

  it('returns null for a cache key that does not exist', () => {
    const { result } = renderHook(() => useCacheResponse());
    const [retrieveCache] = result.current;

    expect(retrieveCache('nonExistentKey')).toBeNull();
  });

  it('overwrites existing cache entries', () => {
    const { result } = renderHook(() => useCacheResponse());
    const [retrieveCache, createCache] = result.current;

    createCache('key', 'first');
    createCache('key', 'second');
    expect(retrieveCache('key')).toBe('second');
  });

  it('supports different data types', () => {
    const { result } = renderHook(() => useCacheResponse());
    const [retrieveCache, createCache] = result.current;

    createCache('number', 42);
    createCache('array', [1, 2, 3]);
    createCache('null', null);

    expect(retrieveCache('number')).toBe(42);
    expect(retrieveCache('array')).toEqual([1, 2, 3]);
    // null is falsy, so the hook returns null for it too
    expect(retrieveCache('null')).toBeNull();
  });
});
