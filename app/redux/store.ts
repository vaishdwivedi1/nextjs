

import blog from "@/app/redux/blogSlice";
import { configureStore } from "@reduxjs/toolkit";
const store = configureStore({
  reducer: {
    blog: blog,
  },
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
