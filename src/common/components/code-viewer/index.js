import * as React from "react";
import { useState, useEffect } from "react";
import { GitAPI } from "git-repo-api";
import { GIT } from "../../const";
const CodeViewer = ({ slug }) => {
  const api = new GitAPI(undefined, GIT.GIT_REPO_USER, GIT.GIT_REPO_NAME);
  const [fileStructure, setFileStructure] = useState({});
  useEffect(() => {
    getFIleStrincture(slug);
  }, [slug]);
  const getFIleStrincture = (play_slug) => {
    api.get_files(`src/plays/${play_slug}`, "main").then((res) => {
      setFileStructure(res);
      console.log(`File list: ${JSON.stringify(res, null, 2)}`);
    });
  };
  return <></>;
};
export default CodeViewer;
