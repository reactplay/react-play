export const HEADERS: { 'X-RapidAPI-Key': string; 'X-RapidAPI-Host': string } = {
  'X-RapidAPI-Key': process.env.REACT_APP_SEARCH_APIKEY,
  'X-RapidAPI-Host': process.env.REACT_APP_SEARCH_APIHOST
};

export const PARAMS: { hl: string; gl: string } = {
  hl: 'en',
  gl: 'US'
};

export const VERIFIED_CHANNEL = 'VERIFIED_CHANNEL';
