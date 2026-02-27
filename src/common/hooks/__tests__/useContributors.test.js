import { renderHook, waitFor } from '@testing-library/react';
import useContributors from '../useContributors';

beforeEach(() => {
  global.fetch = jest.fn();
  process.env.REACT_APP_PLAY_API_URL = 'https://api.test.com';
});

afterEach(() => {
  jest.restoreAllMocks();
  delete process.env.REACT_APP_PLAY_API_URL;
});

const mockContributors = [
  { login: 'user1', type: 'User', contributions: 50 },
  { login: 'dependabot', type: 'Bot', contributions: 100 },
  { login: 'user2', type: 'User', contributions: 30 },
  { login: 'user3', type: 'User', contributions: 80 }
];

describe('useContributors', () => {
  it('fetches contributors and filters out bots', async () => {
    global.fetch.mockResolvedValueOnce({
      json: () => Promise.resolve(mockContributors)
    });

    const { result } = renderHook(() => useContributors(false));

    expect(result.current.isLoading).toBe(true);

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });

    expect(result.current.data).toHaveLength(3);
    expect(result.current.data.every((c) => c.type !== 'Bot')).toBe(true);
    expect(result.current.error).toBeUndefined();
  });

  it('sorts contributors by contributions when sorted=true', async () => {
    global.fetch.mockResolvedValueOnce({
      json: () => Promise.resolve(mockContributors)
    });

    const { result } = renderHook(() => useContributors(true));

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });

    const contributions = result.current.data.map((c) => c.contributions);
    expect(contributions).toEqual([80, 50, 30]); // descending order, bot excluded
  });

  it('sets error on fetch failure', async () => {
    const mockError = new Error('Network error');
    global.fetch.mockRejectedValueOnce(mockError);

    const { result } = renderHook(() => useContributors(false));

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });

    expect(result.current.error).toBe(mockError);
    expect(result.current.data).toBeUndefined();
  });

  it('fetches from the correct API URL', async () => {
    global.fetch.mockResolvedValueOnce({
      json: () => Promise.resolve([])
    });

    renderHook(() => useContributors(false));

    expect(global.fetch).toHaveBeenCalledWith('https://api.test.com/react-play/contributors');
  });
});
