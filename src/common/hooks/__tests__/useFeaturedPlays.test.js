import { renderHook, waitFor } from '@testing-library/react';
import useFeaturedPlays from '../useFeaturedPlays';
import { submit } from 'common/services/request';

// Mock the services/request module
jest.mock('common/services/request', () => ({
  submit: jest.fn()
}));

jest.mock('common/services/request/query/fetch-plays-filter', () => ({
  FetchPlaysFilter: {
    getAllFeaturedPlays: jest.fn(() => 'mock-query')
  }
}));

describe('useFeaturedPlays', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('returns featured plays data on success', async () => {
    const mockPlays = [
      { id: 1, name: 'Play 1' },
      { id: 2, name: 'Play 2' }
    ];
    submit.mockResolvedValueOnce(mockPlays);

    const { result } = renderHook(() => useFeaturedPlays());

    // [loading, error, data]
    expect(result.current[0]).toBe(true); // loading

    await waitFor(() => {
      expect(result.current[0]).toBe(false); // loading done
    });

    expect(result.current[1]).toBeNull(); // no error
    expect(result.current[2]).toEqual(mockPlays); // data
  });

  it('sets error on failure', async () => {
    const mockError = { message: 'GraphQL error' };
    submit.mockRejectedValueOnce([mockError]);

    const { result } = renderHook(() => useFeaturedPlays());

    await waitFor(() => {
      expect(result.current[0]).toBe(false);
    });

    expect(result.current[1]).toEqual(mockError); // error
  });
});
