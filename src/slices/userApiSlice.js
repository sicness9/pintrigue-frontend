import { apiSlice } from "../app/api/apiSlice";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (data) => ({
        url: "/users/sign-up",
        method: "POST",
        body: data,
      }),
    }),
    getUserByUsername: builder.mutation({
      query: (username) => ({
        url: `/users/${username}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useSignupMutation, useGetUserByUsernameMutation } = userApiSlice;
