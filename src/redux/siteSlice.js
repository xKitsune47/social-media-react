import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  current: "/",
  loading: false,
  error: null,
  accounts: [
    {
      uid: "958674gtrbu",
      username: "test1",
      email: "test1@test.com",
      image: "https://i.pravatar.cc/320?u=a042581f4e29026704e",
      liked: [],
      following: [],
    },
    {
      uid: "958674gtrbd",
      username: "test2",
      email: "test2@test.com",
      image: "https://i.pravatar.cc/320?u=a042581f4e29026704f",
      liked: [],
      following: [],
    },
    {
      uid: "izb9dhtuc",
      username: "Kitsune",
      email: "kitsune@kitsune.com",
      image: "https://randomfox.ca/images/41.jpg",
      liked: [],
      following: [],
    },
  ],
  posts: [
    {
      id: Math.random().toString(36).substr(2, 9),
      date: new Date().getTime(),
      username: "test1",
      creator: "958674gtrbu",
      text: "Hello World",
      image: null,
      likes: 0,
      comments: [
        {
          date: new Date().getTime(),
          creator: "958674gtrbd",
          username: "test2",
          text: "Hello World",
        },
      ],
    },
    {
      id: Math.random().toString(36).substr(2, 9),
      date: new Date().getTime(),
      username: "test2",
      creator: "958674gtrbd",
      text: "Hello World",
      image: null,
      likes: 0,
      comments: [
        {
          date: new Date().getTime(),
          creator: "958674gtrbd",
          username: "test1",
          text: "Hello World",
        },
      ],
    },
    {
      id: "2au5orvr0",
      date: new Date().getTime(),
      username: "Kitsune",
      creator: "izb9dhtuc",
      text: "Hello World",
      image: null,
      likes: 0,
      comments: [
        {
          date: new Date().getTime(),
          creator: "958674gtrbd",
          username: "test2",
          text: "Hello World",
        },
      ],
    },
    {
      id: "3as5brtr0",
      date: new Date().getTime(),
      username: "Kitsune",
      creator: "izb9dhtuc",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non bibendum tellus. Praesent blandit eros tellus, sed ultricies dolor pretium fringilla. Praesent pulvinar augue at eleifend fermentum. Sed vitae nibh est.",
      image: "https://randomfox.ca/images/2.jpg",
      likes: 0,
      comments: [
        {
          date: new Date().getTime(),
          creator: "958674gtrbd",
          username: "test1",
          text: "Hello World",
        },
      ],
    },
  ],
};

const siteSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setPath: (state, action) => {
      state.current = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setLoading, setPath } = siteSlice.actions;
export default siteSlice.reducer;
