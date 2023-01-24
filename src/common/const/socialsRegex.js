/* eslint-disable no-useless-escape */
import { BsGithub, BsTwitter, BsLinkedin } from 'react-icons/bs';

export const socilsRegex = {
  twitter: {
    regex: `http(s)?:\/\/([\w]+\.)?twitter.com\/[A-z0-9_-]+\/?`,
    Icon: BsTwitter
  },
  linkedin: {
    regex: `http(s)?:\/\/([\w]+\.)?linkedin\.com\/in\/[A-z0-9_-]+\/?`,
    Icon: BsLinkedin
  },
  github: {
    regex: `http(s)?:\/\/([\w]+\.)?github.com\/[A-z0-9_-]+\/?`,
    Icon: BsGithub
  }
};
