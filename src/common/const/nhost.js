const AUTH_URL = (redirectURL, provider = 'github') => {
  return `${
    process.env.REACT_APP_NHOST_BACKEND_URL
  }/${process.env.REACT_APP_NHOST_VERSION}/auth/signin/provider/${provider}?redirectTo=${encodeURI(redirectURL)}`;
};

export const NHOST = { AUTH_URL };
