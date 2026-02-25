import { renderHook, act } from '@testing-library/react';
import useLocalStorage from '../useLocalStorage';

// Mock localStorage
const localStorageMock = (() => {
  let store = {};

  return {
    getItem: jest.fn((key) => store[key] || null),
    setItem: jest.fn((key, value) => {
      store[key] = value;
    }),
    clear: () => {
      store = {};
    }
  };
})();

Object.defineProperty(window, 'localStorage', { value: localStorageMock });

describe('useLocalStorage', () => {
  beforeEach(() => {
    localStorageMock.clear();
    jest.clearAllMocks();
  });

  it('returns initial value when localStorage is empty', () => {
    const { result } = renderHook(() => useLocalStorage('testKey', 'default'));
    expect(result.current[0]).toBe('default');
  });

  it('reads existing value from localStorage', () => {
    localStorageMock.getItem.mockReturnValueOnce(JSON.stringify('stored-value'));
    const { result } = renderHook(() => useLocalStorage('testKey', 'default'));
    expect(result.current[0]).toBe('stored-value');
  });

  it('updates localStorage when setValue is called', () => {
    const { result } = renderHook(() => useLocalStorage('testKey', 'initial'));

    act(() => {
      result.current[1]('new-value');
    });

    expect(result.current[0]).toBe('new-value');
    expect(window.localStorage.setItem).toHaveBeenCalledWith(
      'testKey',
      JSON.stringify('new-value')
    );
  });

  it('supports function updater pattern', () => {
    const { result } = renderHook(() => useLocalStorage('counter', 0));

    act(() => {
      result.current[1]((prev) => prev + 1);
    });

    expect(result.current[0]).toBe(1);
  });

  it('handles JSON parse errors gracefully', () => {
    localStorageMock.getItem.mockReturnValueOnce('invalid-json{{{');
    const { result } = renderHook(() => useLocalStorage('badKey', 'fallback'));
    expect(result.current[0]).toBe('fallback');
  });

  it('stores objects correctly', () => {
    const { result } = renderHook(() => useLocalStorage('objKey', {}));

    act(() => {
      result.current[1]({ name: 'test', count: 5 });
    });

    expect(result.current[0]).toEqual({ name: 'test', count: 5 });
    expect(window.localStorage.setItem).toHaveBeenCalledWith(
      'objKey',
      JSON.stringify({ name: 'test', count: 5 })
    );
  });
});
