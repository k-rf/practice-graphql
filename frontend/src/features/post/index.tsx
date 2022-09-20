import React from "react";

import { usePostsQuery } from "~/generated/graphql";

export const PostRoute = () => {
  const { data } = usePostsQuery();

  return (
    <>
      {data?.posts?.map((post) => (
        <React.Fragment key={post.id}>
          <div>{post.id}</div>
          <div>{post.title}</div>
        </React.Fragment>
      ))}
    </>
  );
};
