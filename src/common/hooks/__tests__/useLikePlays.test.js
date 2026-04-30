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

  it('likePlay calls likeIndividualPlay with correct argument', async () => {
    const { likeIndividualPlay } = jest.requireMock('common/services/request/query/like-play');
    submit.mockResolvedValueOnce({});

    const { result } = renderHook(() => useLikePlays());
    await result.current.likePlay({ play_id: 'abc' });

    expect(likeIndividualPlay).toHaveBeenCalledWith({ play_id: 'abc' });
  });

  it('unLikePlay calls unlikeIndividualPlay with correct argument', async () => {
    const { unlikeIndividualPlay } = jest.requireMock('common/services/request/query/like-play');
    submit.mockResolvedValueOnce({});

    const { result } = renderHook(() => useLikePlays());
    await result.current.unLikePlay({ play_id: 'xyz' });

    expect(unlikeIndividualPlay).toHaveBeenCalledWith({ play_id: 'xyz' });
  });

  it('hook returns likePlay and unLikePlay functions', () => {
    const { result } = renderHook(() => useLikePlays());

    expect(typeof result.current.likePlay).toBe('function');
    expect(typeof result.current.unLikePlay).toBe('function');
  });
});
