import { GitAPI } from 'git-repo-api';
import { GIT } from '../const';

// get all tags
const getIssues = () => {
  const api = new GitAPI(undefined, GIT.GIT_REPO_USER, GIT.GIT_REPO_NAME);

  return api.get_all_issues().then((res) => {
    const issue_formatted = [];
    res.forEach((issue) => {
      issue_formatted.push({
        name: issue.title,
        value: issue.number
      });
    });

    return issue_formatted;
  });
};

export const Issues = {
  getIssues
};
