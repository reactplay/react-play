import { GIT } from "common/const";

const popularContent = async () => {
  try {
    const res = await fetch(`${GIT.BASE_URL_FOR_GIT_TRAFFIC}/${GIT.GIT_REPO_OWNER}/${GIT.GIT_REPO_NAME}/traffic/popular/paths`, {
      method: 'GET',
      headers: new Headers({
        'Authorization': `Bearer ${process.env.REACT_APP_BARER_TOKEN}`
      }),
    });
    return await res.json();
  } catch (e) {
    return [];
  }
}

const refralSites = async () => {
  try {
    const res = await fetch(`${GIT.BASE_URL_FOR_GIT_TRAFFIC}/${GIT.GIT_REPO_OWNER}/${GIT.GIT_REPO_NAME}/traffic/popular/referrers`, {
      method: 'GET',
      headers: new Headers({
        'Authorization': `Bearer ${process.env.REACT_APP_BARER_TOKEN}`
      }),
    });
    return await res.json();
  } catch (e) {
    return [];
  }
}



const getIssues = async (pageNum, perPageCount) => {
  try {
    const res = await fetch(`${GIT.BASE_URL_FOR_GIT_TRAFFIC}/${GIT.GIT_REPO_OWNER}/${GIT.GIT_REPO_NAME}/issues?page=${pageNum}&per_page=${perPageCount}`, {
      method: 'GET',
      headers: new Headers({
        'Authorization': `Bearer ${process.env.REACT_APP_BARER_TOKEN}`
      }),
    });
    return await res.json();
  } catch (e) {
    return [];
  }
}

const getCloneFigures = async () => {
  try {
    const res = await fetch(`${GIT.BASE_URL_FOR_GIT_TRAFFIC}/${GIT.GIT_REPO_OWNER}/${GIT.GIT_REPO_NAME}/traffic/clones`, {
      method: 'GET',
      headers: new Headers({
        'Authorization': `Bearer ${process.env.REACT_APP_BARER_TOKEN}`
      }),
    });
    return await res.json();
  } catch (e) {
    return [];
  }
}

const getViews = async () => {
  try {
    const res = await fetch(`${GIT.BASE_URL_FOR_GIT_TRAFFIC}/${GIT.GIT_REPO_OWNER}/${GIT.GIT_REPO_NAME}/traffic/views`, {
      method: 'GET',
      headers: new Headers({
        'Authorization': `Bearer ${process.env.REACT_APP_BARER_TOKEN}`
      }),
    });
    return await res.json();
  } catch (e) {
    return [];
  }
}

const getContributors = async () => {

  try {
    const res = await fetch(`${GIT.BASE_URL_FOR_GIT_TRAFFIC}/repos/${GIT.GIT_REPO_OWNER}/${GIT.GIT_REPO_NAME}/contributors?per_page=10`, {
      method: 'GET',
      headers: new Headers({
        'Authorization': `Bearer ${process.env.REACT_APP_BARER_TOKEN}`
      }),
    });
    return await res.json();
  } catch (e) {
    return [];
  }
}

export {
  getCloneFigures,
  popularContent,
  refralSites,
  getIssues,
  getViews,
  getContributors
}