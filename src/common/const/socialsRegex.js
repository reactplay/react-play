import { BsGithub, BsTwitter, BsLinkedin } from "react-icons/bs";

export const regex = {
  twitter: {
    regex: `http(s)?:\/\/([\w]+\.)?twitter.com\/[A-z0-9_-]+\/?`,
    icon: BsTwitter,
  },
  linkedin: {
    regex: `http(s)?:\/\/([\w]+\.)?linkedin\.com\/in\/[A-z0-9_-]+\/?`,
    icon: BsLinkedin,
  },
  github: {
    regex: `http(s)?:\/\/([\w]+\.)?github.com\/[A-z0-9_-]+\/?`,
    icon: BsGithub,
  },
};
