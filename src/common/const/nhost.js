const AUTH_URL = (redirectURL, provider = 'github') => {
  return `${
    process.env.REACT_APP_NHOST_BACKEND_URL
  }/v1/auth/signin/provider/${provider}?redirectTo=${encodeURI(redirectURL)}`;
};

export const NHOST = { AUTH_URL };
