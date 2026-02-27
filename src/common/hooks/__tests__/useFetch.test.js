import { renderHook, waitFor } from '@testing-library/react';
import useFetch from '../useFetch';

// Mock global fetch
beforeEach(() => {
  global.fetch = jest.fn();
});

afterEach(() => {
  jest.restoreAllMocks();
});

describe('useFetch', () => {
  it('returns data on successful fetch', async () => {
    const mockData = [{ id: 1, name: 'Play 1' }];
    global.fetch.mockResolvedValueOnce({
      json: () => Promise.resolve(mockData)
    });

    const { result } = renderHook(() => useFetch('https://api.example.com/data'));

    // Initially loading
    expect(result.current.loading).toBe(true);
    expect(result.current.data).toEqual([]);

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.data).toEqual(mockData);
    expect(result.current.error).toBeNull();
  });

  it('sets error on fetch failure', async () => {
    const mockError = new Error('Network error');
    global.fetch.mockRejectedValueOnce(mockError);

    const { result } = renderHook(() => useFetch('https://api.example.com/fail'));

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.error).toBe(mockError);
    expect(result.current.data).toEqual([]);
  });

  it('passes options to fetch', async () => {
    global.fetch.mockResolvedValueOnce({
      json: () => Promise.resolve({})
    });

    const options = { method: 'POST', body: JSON.stringify({ test: true }) };
    renderHook(() => useFetch('https://api.example.com/data', options));

    expect(global.fetch).toHaveBeenCalledWith('https://api.example.com/data', options);
  });
});
