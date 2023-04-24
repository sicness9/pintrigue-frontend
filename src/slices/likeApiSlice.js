import { apiSlice } from "../app/api/apiSlice";

export const likeApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllLikedPins: builder.mutation({
      query: ({ userId }) => ({
        url: `/likes/pin/${userId}`,
        method: "GET",
      }),
    }),
    verifyLikedPin: builder.mutation({
      query: ({ likeId, userId }) => ({
        url: `/likes/pin/${likeId}/${userId}`,
        method: "GET",
      }),
    }),
    likePin: builder.mutation({
      query: ({ pinId, userId }) => ({
        url: `/likes/pin/${pinId}`,
        method: "POST",
        body: { user_id: userId },
      }),
    }),
    unLikePin: builder.mutation({
      query: ({ likeId, userId }) => ({
        url: `/likes/pin/${likeId}`,
        method: "DELETE",
        body: { user_id: userId },
      }),
    }),
  }),
});

export const {
  useGetAllLikedPinsMutation,
  useVerifyLikedPinMutation,
  useLikePinMutation,
  useUnLikePinMutation,
} = likeApiSlice;
