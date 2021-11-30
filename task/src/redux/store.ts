import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { dataApi } from "../services/fetchService";
import reducers from "./reducers";

export const store = configureStore({
  reducer: { reducers, [dataApi.reducerPath]: dataApi.reducer },

  // Add the generated reducer as a specific top-level slice

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dataApi.middleware),
  devTools: process.env.NODE_ENV !== "production",
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof reducers>;
export type AppDispatch = typeof store.dispatch;
