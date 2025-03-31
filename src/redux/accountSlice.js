import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  uid: "izb9dhtuc",
  username: "Kitsune",
  email: "kitsune@kitsune.com",
  password: "123456",
  image: "https://randomfox.ca/images/41.jpg",
  liked: [],
  following: [],
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    createUser: (state, action) => {
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
    loginUser: (state, action) => {
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
    changeUsername: (state, action) => {
      state.username = action.payload;
    },
    changeEmail: (state, action) => {
      state.email = action.payload;
    },
    changePassword: (state, action) => {
      state.password = action.payload;
    },
  },
});

export const {
  createUser,
  loginUser,
  changeUsername,
  changeEmail,
  changePassword,
} = accountSlice.actions;

export default accountSlice.reducer;
