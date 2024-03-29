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
      query: ({ save_id, user_id }) => ({
        url: `/saves/${save_id}`,
        method: "DELETE",
        body: { user_id },
      }),
    }),
    getAllSaves: builder.mutation({
      query: ({ user_id }) => ({
        url: "/saves/",
        method: "GET",
        params: { user_id },
      }),
    }),
  }),
});

export const {
  useAddSaveMutation,
  useRemoveSaveMutation,
  useGetAllSavesMutation,
} = saveApiSlice;
