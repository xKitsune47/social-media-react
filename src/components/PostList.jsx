import React from "react";
import { Post } from "./Post";
import { NoContent } from "./NoContent";

export const PostList = ({ posts }) => {
  return (
    <>
      {posts.length === 0 ? (
        <NoContent />
      ) : (
        posts.map((post) => (
          <Post
            key={post.id}
            text={post.text}
            username={post.username}
            date={post.date}
            id={post.id}
            image={post.image}
            creator={post.creator}
            to={true}
          />
        ))
      )}
    </>
  );
};
