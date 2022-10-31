import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";

// slices
import loadingReducer from "../slices/loadingSlice";
import tokenReducer from "../slices/tokenSlice";
import userReducer from "../slices/userSlice";
import authedReducer from "../slices/authedSlice";
import pinFeedReducer from "../slices/pinFeedSlice";
import { apiSlice } from "../app/api/apiSlice";
import authReducer from "../slices/authSlice";

const reducers = combineReducers({
  loading: loadingReducer,
  token: tokenReducer,
  user: userReducer,
  authed: authedReducer,
  pinFeed: pinFeedReducer,
  auth: authReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});
