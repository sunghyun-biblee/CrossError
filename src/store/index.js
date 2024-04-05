import { configureStore } from "@reduxjs/toolkit";
import { user1, userDB } from "./userData";

export default configureStore({
  reducer: {
    userDB: userDB,
    user1: user1,
  },
});
