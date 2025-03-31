import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import { Button } from "../Button";
import { PostList } from "../PostList";
import { useParams } from "react-router-dom";

const base =
  "p-8 flex h-full grid grid-rows-[auto_auto_1fr] gap-4 lg:w-3xl m-auto w-full";

export const Profile = () => {
  const { id } = useParams();

  const user = useSelector(
    (state) => state.site.accounts.filter((acc) => acc.uid === id)[0]
  );

  useEffect(() => {
    console.log(id);
    console.log(user);
  }, [id, user]);
  // return <div>uwu</div>;
  const posts = useSelector((state) => state.site.posts).filter(
    (post) => post.creator === user?.uid
  );

  const [dataShown, setDataShown] = useState("posts");

  const handleDataShown = (e) => {
    setDataShown(e.target.getAttribute("name"));
  };

  const handleChangeProfilePicture = () => {
    alert("change profile pic clicked");
  };

  const handleChangeUsername = () => {
    alert("change username clicked");
  };

  const handleSendMessage = () => {
    alert("send message clicked");
  };

  useEffect(() => {
    document.title = `Profile | ${user.username}`;

    return () => {
      document.title = "SlyFox";
    };
  }, [user.username]);

  return (
    <div className={base}>
      <div className="grid grid-cols-[auto_1fr_auto] h-fit gap-4">
        <div className="relative z-0">
          <img
            src={user.image}
            alt={`${user.username} profile image`}
            className="rounded-full w-24 h-24"
          />
          <span
            onClick={handleChangeProfilePicture}
            className="absolute inset-0 flex justify-center items-center z-10 opacity-0 hover:opacity-100 transition-opacity duration-200 ease-in-out w-24 h-24 hover:bg-gray-800/50 rounded-full cursor-pointer">
            <EditRoundedIcon sx={{ fontSize: 32 }} />
          </span>
        </div>
        <div className="flex flex-col justify-center place-items-start gap-2">
          <p
            onClick={handleChangeUsername}
            className="text-2xl flex items-center gap-2 hover:cursor-pointer group">
            {user.username}{" "}
            <span className="flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out">
              <EditRoundedIcon sx={{ fontSize: 24 }} />
            </span>
          </p>
          <p className="text-xl">{user.email}</p>
        </div>
        <div
          onClick={handleSendMessage}
          className="flex justify-center items-center gap-2 cursor-pointer">
          <MailOutlineRoundedIcon />
        </div>
      </div>

      {/* posts */}
      <div className="w-full text-xl grid grid-cols-2 text-center h-fit">
        <Button
          comparator={dataShown !== "posts"}
          text="Posts"
          onClick={handleDataShown}
        />
        <Button
          comparator={dataShown !== "liked"}
          text="Liked"
          onClick={handleDataShown}
        />
      </div>
      <div className="flex flex-col gap-4 mt-4  items-center">
        {dataShown === "posts" ? (
          <PostList posts={posts} />
        ) : (
          <PostList posts={user.liked} />
        )}
      </div>
    </div>
  );
};
