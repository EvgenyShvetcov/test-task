import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { pokemonsApi } from "../api/pokemons";

export const store = configureStore({
  reducer: {
    [pokemonsApi.reducerPath]: pokemonsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonsApi.middleware),
  devTools: process.env.NODE_ENV !== "production",
  //preloadedState для начального значения
});

//используется для refetch
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
