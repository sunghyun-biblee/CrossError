import { configureStore } from "@reduxjs/toolkit";
import { userDB, user1 } from "./userData";
export const store = configureStore({
  reducer: {
    userDB: userDB.reducer,
    user1: user1.reducer,
  },
});
