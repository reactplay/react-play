import Giscus from '@giscus/react';

const Comment = () => {
  const projectRepoId = import.meta.env.VITE_GISCUS_PROJECT_REPO_ID;
  const discussionCategoryId = import.meta.env.VITE_GISCUS_DISCUSSION_CATEGORY_ID;
  const discussionCategoryName = import.meta.env.VITE_GISCUS_DISCUSSION_CATEGORY_NAME;

  return (
    <>
      <Giscus
        category={discussionCategoryName}
        categoryId={discussionCategoryId}
        emitMetadata="1"
        inputPosition="top"
        lang="en"
        loading="lazy"
        mapping="pathname"
        reactionsEnabled="0"
        repo="reactplay/react-play"
        repoId={projectRepoId}
        theme="light"
      />
    </>
  );
};

export default Comment;
