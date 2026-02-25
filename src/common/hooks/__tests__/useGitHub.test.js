import { renderHook, waitFor } from '@testing-library/react';
import useGitHub from '../useGitHub';

beforeEach(() => {
  global.fetch = jest.fn();
});

afterEach(() => {
  jest.restoreAllMocks();
});

describe('useGitHub', () => {
  it('fetches GitHub user data successfully', async () => {
    const mockUser = {
      login: 'octocat',
      name: 'The Octocat',
      public_repos: 8
    };
    global.fetch.mockResolvedValueOnce({
      json: () => Promise.resolve(mockUser)
    });

    const { result } = renderHook(() => useGitHub('octocat'));

    expect(result.current.isLoading).toBe(true);

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });

    expect(result.current.data).toEqual(mockUser);
    expect(result.current.error).toBeUndefined();
    expect(global.fetch).toHaveBeenCalledWith('https://api.github.com/users/octocat');
  });

  it('handles fetch errors', async () => {
    const mockError = new Error('Rate limited');
    global.fetch.mockRejectedValueOnce(mockError);

    const { result } = renderHook(() => useGitHub('unknown-user'));

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });

    expect(result.current.error).toBe(mockError);
    expect(result.current.data).toBeUndefined();
  });
});
