import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice";

export const store = configureStore({
  reducer: {
    counterReducer,
    // [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({})
});

// setupListeners(store.dispatch);

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
