import { deleteATag, getPlaysByFilter } from '../plays';
import { submit } from '../request';

jest.mock('../request', () => ({
  submit: jest.fn(),
  submitMutation: jest.fn()
}));

jest.mock('../request/query', () => ({
  deleteATagQuery: jest.fn((params) => ({ type: 'DELETE_TAG', ...params }))
}));

jest.mock('../request/query/play', () => ({
  associatePlayWithTagQuery: 'ASSOCIATE_TAG_QUERY',
  createPlayQuery: 'CREATE_PLAY_QUERY'
}));

jest.mock('common/services/request/query/fetch-plays', () => ({
  FetchPlaysByFilter: jest.fn(() => 'FETCH_PLAYS_PAYLOAD')
}));

jest.mock('common/services/string', () => ({
  toTitleCaseTrimmed: jest.fn((str) => str.replace(/\s/g, '')),
  toKebabCase: jest.fn((str) => str.toLowerCase().replace(/\s+/g, '-')),
  toSlug: jest.fn((str) => str.toLowerCase().replace(/\s+/g, '-'))
}));

describe('deleteATag', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('returns an array of deletion promises for removed tags', () => {
    submit.mockReturnValue(Promise.resolve());

    const actualTags = [
      { id: 'tag-1', name: 'React' },
      { id: 'tag-2', name: 'JavaScript' },
      { id: 'tag-3', name: 'CSS' }
    ];
    const newTags = [{ id: 'tag-1', name: 'React' }]; // tag-2 and tag-3 removed

    const result = deleteATag('play-1', actualTags, newTags);

    expect(result).toHaveLength(2);
    expect(submit).toHaveBeenCalledTimes(2);
  });

  it('returns empty array when no tags are removed', () => {
    const actualTags = [{ id: 'tag-1', name: 'React' }];
    const newTags = [{ id: 'tag-1', name: 'React' }];

    const result = deleteATag('play-1', actualTags, newTags);

    expect(result).toHaveLength(0);
    expect(submit).not.toHaveBeenCalled();
  });

  it('returns empty array when there are no actual tags', () => {
    const result = deleteATag('play-1', [], [{ id: 'tag-1' }]);
    expect(result).toHaveLength(0);
  });
});

describe('getPlaysByFilter', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('returns plays with title_name appended', async () => {
    const mockPlays = [
      { name: 'todo app', play_tags: [] },
      { name: 'calculator', play_tags: [] }
    ];
    submit.mockResolvedValueOnce(mockPlays);

    const result = await getPlaysByFilter(null, 'newest');

    expect(result).toHaveLength(2);
    expect(result[0]).toHaveProperty('title_name');
    expect(result[1]).toHaveProperty('title_name');
  });

  it('filters by tags when tags filter is provided', async () => {
    const mockPlays = [
      { name: 'play1', play_tags: [{ tag_id: 'tag-1' }] },
      { name: 'play2', play_tags: [{ tag_id: 'tag-2' }] },
      { name: 'play3', play_tags: [{ tag_id: 'tag-3' }] }
    ];
    submit.mockResolvedValueOnce(mockPlays);

    const filter = { tags: ['tag-1', 'tag-3'] };
    const result = await getPlaysByFilter(filter, 'newest');

    // Only play1 and play3 match the tags
    expect(result).toHaveLength(2);
    expect(result.map((p) => p.name)).toEqual(['play1', 'play3']);
  });
});
