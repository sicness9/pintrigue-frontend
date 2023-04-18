import { apiSlice } from "../app/api/apiSlice";

export const commentApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addComment: builder.mutation({
      query: ({ pinId, postedBy, comment }) => ({
        url: "/comments/",
        method: "POST",
        body: { pin_id: pinId, posted_by: postedBy, comment: comment },
      }),
    }),
    updateComment: builder.mutation({
      query: ({ commentId, comment, userId }) => ({
        url: `/comments/${commentId}`,
        method: "PUT",
        body: { comment: comment, user_id: userId },
      }),
    }),
    deleteComment: builder.mutation({
      query: ({ commentId, userId }) => ({
        url: `/comments/${commentId}`,
        method: "DELETE",
        body: { user_id: userId },
      }),
    }),
  }),
});

export const {
  useAddCommentMutation,
  useUpdateCommentMutation,
  useDeleteCommentMutation,
} = commentApiSlice;
