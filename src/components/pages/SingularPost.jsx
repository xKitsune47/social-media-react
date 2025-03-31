import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Post } from "../Post.jsx";
import { useSelector } from "react-redux";
import { NoContent } from "../NoContent.jsx";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export const SingularPost = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const post = useSelector((state) => state.site.posts).filter(
    (p) => p.id === id
  )[0];

  useEffect(() => {
    document.title = `Post of user ${post ? post.username : "SlyFox"}`;

    return () => {
      document.title = "SlyFox";
    };
  }, [post]);

  return (
    <div className="p-8 h-full grid grid-rows-[auto_auto_1fr] gap-4 lg:w-3xl m-auto w-full">
      {/* navigation */}
      <div className="flex justify-start items-center">
        <ArrowBackIcon
          onClick={() => navigate(-1)}
          className="hover:cursor-pointer m-4 hover:text-gray-400"
        />
        <h1 className="text-2xl font-bold text-gray-200">
          Post of user {post.username}
        </h1>
      </div>

      {/* post */}
      {!post ? (
        <NoContent text="Post doesn't exist or didn't load properly" />
      ) : (
        <div className="flex flex-col mt-4 items-center p-4">
          <Post
            to={false}
            text={post.text}
            username={post.username}
            date={post.date}
            id={post.id}
            image={post.image}
            creator={post.creator}
          />
        </div>
      )}

      {/* comments */}
      <div className="mt-4 p-4">
        {post.comments.length > 0 ? (
          <>
            <h2 className="text-xl font-bold text-gray-200">Comments</h2>
            <div>
              {post.comments.map((comment) => (
                <div key={comment.date} className="flex flex-col mt-4">
                  <Post
                    to={false}
                    text={comment.text}
                    username={comment.username}
                    date={comment.date}
                    id={comment.id}
                    image={comment.image}
                    creator={comment.creator}
                  />
                </div>
              ))}
            </div>
          </>
        ) : (
          <NoContent text="No comments yet" />
        )}
      </div>
    </div>
  );
};
