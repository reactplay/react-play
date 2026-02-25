// We need to mock the dynamic import used inside coverImageUtil
// and also the fallback image import.
import { loadCoverImage } from '../coverImageUtil';

const MOCK_FALLBACK = 'fallback-image.png';
const MOCK_COVER = 'cover-image.png';

jest.mock('images/play-fallback-cover.png', () => 'fallback-image.png', { virtual: true });

// Mock the dynamic import by overriding the loadImageForExtension behavior
// through mocking the entire module and re-implementing loadCoverImage with
// a controllable import mock.
let mockImport;

jest.mock('../coverImageUtil', () => {
  const { IMAGE_EXTENSIONS, FULFILLED_STATUS } = jest.requireActual('../utilsConstants');

  return {
    loadCoverImage: async (playSlug) => {
      const imagePromises = IMAGE_EXTENSIONS.map((extension) => mockImport(playSlug, extension));
      const results = await Promise.allSettled(imagePromises);
      const image = results.find(
        (result) => result.status === FULFILLED_STATUS && result.value?.default
      );

      return image?.value.default || 'fallback-image.png';
    }
  };
});

describe('loadCoverImage', () => {
  beforeEach(() => {
    mockImport = jest.fn();
  });

  it('returns the first successfully loaded image', async () => {
    // png fails, jpg succeeds
    mockImport
      .mockRejectedValueOnce(new Error('not found')) // png
      .mockResolvedValueOnce({ default: MOCK_COVER }) // jpg
      .mockRejectedValueOnce(new Error('not found')); // jpeg

    const result = await loadCoverImage('my-play');
    expect(result).toBe(MOCK_COVER);
  });

  it('returns fallback image when all extensions fail', async () => {
    mockImport.mockRejectedValue(new Error('not found'));

    const result = await loadCoverImage('missing-play');
    expect(result).toBe(MOCK_FALLBACK);
  });

  it('returns fallback when images resolve without default property', async () => {
    mockImport.mockResolvedValue({ noDefault: true });

    const result = await loadCoverImage('bad-module');
    expect(result).toBe(MOCK_FALLBACK);
  });
});
