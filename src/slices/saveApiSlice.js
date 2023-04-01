import { apiSlice } from "../app/api/apiSlice";

export const saveApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addSave: builder.mutation({
      query: (posted_by, user_id, pin_id) => ({
        url: "/saves/create_save",
        method: "POST",
        body: { posted_by: posted_by, user_id: user_id, pin_id: pin_id },
      }),
    }),
  }),
});

export const { useAddSaveMutation } = saveApiSlice;
