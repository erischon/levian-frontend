"use client";

import { store } from "./store";
import { Provider } from "react-redux";

/**
 * @description Redux provider, used to wrap the app in the Redux store
 * @version 1.0.0
 * @returns {JSX.Element}
 */
export function ReduxProvider({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return <Provider store={store}>{children}</Provider>;
}
