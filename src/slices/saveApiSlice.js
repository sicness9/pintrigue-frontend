import { apiSlice } from "../app/api/apiSlice";

export const saveApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addSave: builder.mutation({
      query: ({ posted_by, user_id, pin_id }) => ({
        url: "/saves/",
        method: "POST",
        body: { posted_by, user_id, pin_id },
      }),
    }),
    removeSave: builder.mutation({
      query: ({ saveId }) => ({
        url: `/saves/${saveId}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const { useAddSaveMutation } = saveApiSlice;
