import React from "react";

import { useOnCommentAddedSubscription, usePostsQuery } from "~/generated/graphql";

export const PostRoute = () => {
  const { data } = usePostsQuery();
  const { data: comment } = useOnCommentAddedSubscription();

  return (
    <>
      {data?.authorAll?.map((post) => (
        <React.Fragment key={post.id}>
          <div>{post.id}</div>
          <div>
            {post.firstName} {post.lastName}
          </div>
        </React.Fragment>
      ))}
      <div>---------- subscription ----------</div>
      <div>{comment?.commentAdded.comment}</div>
    </>
  );
};
