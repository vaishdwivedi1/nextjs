"use client";

import { Provider } from "react-redux";
import store from "@/app/redux/store";
function Providers({ children }) {
  return <Provider store={store}>{children}</Provider>;
}

export default Providers;
