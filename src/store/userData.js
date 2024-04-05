import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "1",
  email: "1",
  photoURL: "1",
  displayName: "1",
};
export const userDB = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.photoURL = action.payload.photoURL;
      state.displayName = action.payload.displayName;
    },
    removeUser: (state) => {
      state.id = "";
      state.email = "";
      state.photoURL = "";
      state.displayName = "";
    },
  },
});
export const user1 = createSlice({
  name: "user1",
  initialState: "user",
});
export const { setUser, removeUser } = userDB.actions;
export default { userDB, user1 }.reducers;
