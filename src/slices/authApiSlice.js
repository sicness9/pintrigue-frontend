import { apiSlice } from "../app/api/apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (formData) => ({
        url: "/auth/login/access-token",
        method: "POST",
        body: formData,
      }),
    }),
    verify: builder.mutation({
      query: (token) => ({
        url: "/auth/me",
        method: "GET",
        Headers: {
          "Context-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      }),
    }),
  }),
});

export const { useLoginMutation, useVerifyMutation } = authApiSlice;
