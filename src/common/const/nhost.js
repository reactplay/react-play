const AUTH_URL = (redirectURL, provider = 'github') => {
  return `${
    process.env.REACT_APP_NHOST_AUTH_URL
  }/v1/signin/provider/${provider}?redirectTo=${encodeURI(redirectURL)}`;
};

export const NHOST = { AUTH_URL };
