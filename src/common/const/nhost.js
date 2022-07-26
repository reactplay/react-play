const AUTH_URL = (redirectURL, provider = "github") => {
  return `https://rgkjmwftqtbpayoyolwh.nhost.run/v1/auth/signin/provider/${provider}?redirectTo=${encodeURI(
    redirectURL
  )}`;
};

export const NHOST = { AUTH_URL }
