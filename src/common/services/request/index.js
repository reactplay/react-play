import { submit as gsubmit, submit_multi as gsubmit_multi } from 'json-graphql-parser/v2/index.js';
import axios from 'axios';

const BACKEND_URL = `${process.env.REACT_APP_NHOST_BACKEND_URL}/${process.env.REACT_APP_NHOST_VERSION}/${process.env.REACT_APP_NHOST_ENDPOINT}`;

/**
 * Run GraphQL queries using Axios using multiple  JSON object
 * @param {object[]} requests           Mandatory.
 * @param {string}           url Optional.
 * @param {object}           reqheder Optional.
 */
export const submit_multi = (requests, url = BACKEND_URL, reqheder) => {
  return gsubmit_multi(requests, url, reqheder);
};

/**
 * Run GraphQL queries using Axios using a simple JSON object
 * @param {object} request           Mandatory.
 * @param {string}           url Optional.
 * @param {object}           reqheder Optional.
 * @returns {Promise} single promise
 */
export const submit = (request, url = BACKEND_URL, reqheder) => {
  return gsubmit(request, url, reqheder);
};

export const submitMutation = (query, object) => {
  const mutationQuery = query;
  mutationQuery.object = object;

  return submit(mutationQuery);
};

export const submit_get = (url) => {
  return axios.get(url);
};
