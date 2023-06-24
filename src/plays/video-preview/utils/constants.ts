export const HEADERS: { 'X-RapidAPI-Key': string; 'X-RapidAPI-Host': string } = {
  'X-RapidAPI-Key': import.meta.env.VITE_SEARCH_APIKEY,
  'X-RapidAPI-Host': import.meta.env.VITE_SEARCH_APIHOST
};

export const PARAMS: { hl: string; gl: string } = {
  hl: 'en',
  gl: 'US'
};

export const VERIFIED_CHANNEL = 'VERIFIED_CHANNEL';
