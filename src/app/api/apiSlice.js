import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setCredentials, logOut } from "../../slices/authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_URL,
  // credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = getState().token.value;
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  //   if (result?.error?.originalStatus === 401) {
  //     console.log("sending refresh token");
  //     // send refresh token to get new access token
  //     const refreshResult = await baseQuery("/refresh", api, extraOptions);
  //     console.log(refreshResult);
  //     if (refreshResult?.data) {
  //       const user = api.getState().auth.user;
  //       // store new token
  //       api.dispatch(setCredentials({ ...refreshResult.data, user }));
  //       // retry original query with new access token
  //       result = await baseQuery(args, api, extraOptions);
  //     } else {
  //       api.dispatch(logOut());
  //     }
  //   }

  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({}),
});
