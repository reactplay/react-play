import { renderHook } from '@testing-library/react';
import useLikePlays from '../useLikePlays';
import { submit } from 'common/services/request';

jest.mock('common/services/request', () => ({
  submit: jest.fn()
}));

jest.mock('common/services/request/query/like-play', () => ({
  likeIndividualPlay: jest.fn((obj) => ({ type: 'LIKE', ...obj })),
  unlikeIndividualPlay: jest.fn((obj) => ({ type: 'UNLIKE', ...obj }))
}));

describe('useLikePlays', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('likePlay calls submit and resolves on success', async () => {
    const mockResponse = { id: 1, liked: true };
    submit.mockResolvedValueOnce(mockResponse);

    const { result } = renderHook(() => useLikePlays());
    const response = await result.current.likePlay({ play_id: 'abc' });

    expect(response).toEqual(mockResponse);
    expect(submit).toHaveBeenCalledTimes(1);
  });

  it('likePlay rejects on submit failure', async () => {
    const mockError = new Error('Mutation failed');
    submit.mockRejectedValueOnce(mockError);

    const { result } = renderHook(() => useLikePlays());

    await expect(result.current.likePlay({ play_id: 'abc' })).rejects.toThrow('Mutation failed');
  });

  it('unLikePlay calls submit and resolves on success', async () => {
    const mockResponse = { id: 1, liked: false };
    submit.mockResolvedValueOnce(mockResponse);

    const { result } = renderHook(() => useLikePlays());
    const response = await result.current.unLikePlay({ play_id: 'abc' });

    expect(response).toEqual(mockResponse);
  });

  it('unLikePlay rejects on submit failure', async () => {
    submit.mockRejectedValueOnce(new Error('Delete failed'));

    const { result } = renderHook(() => useLikePlays());

    await expect(result.current.unLikePlay({ play_id: 'abc' })).rejects.toThrow('Delete failed');
  });
});
