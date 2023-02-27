const YOUTUBE_API_KEY = 'AIzaSyBVKkOtU0gPVR7sA-nf3vg91JQn2S4PTbs';

export const YOUTUBE_VIDEOLIST_API =
  'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=' +
  YOUTUBE_API_KEY;

export const YOUTUBE_VIDEO_DATA_API =
  'https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&key=' +
  YOUTUBE_API_KEY;

export const YOUTUBE_SEARCH_API =
  'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=' +
  YOUTUBE_API_KEY;

export const GOOGLE_AUTOCOMPLETE_API =
  'https://corsanywhere.herokuapp.com/http://suggestqueries.google.com/complete/search?client=chrome&q=';
