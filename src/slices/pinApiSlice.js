import { apiSlice } from "../app/api/apiSlice";

export const pinApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addPin: builder.mutation({
      query: (formData) => ({
        url: "/pins/",
        method: "POST",
        body: formData,
      }),
    }),
    getAllPins: builder.mutation({
      query: () => ({
        url: "/pins/all-pins",
        method: "GET",
      }),
    }),
    searchPin: builder.mutation({
      query: ({ category, posted_by, page }) => ({
        url: `/pins/search`,
        method: "GET",
        params: { category, posted_by, page },
      }),
    }),
    getPopularPinCategories: builder.mutation({
      query: () => ({
        url: "/pins/popular-pins",
        method: "GET",
      }),
    }),
    getPinById: builder.mutation({
      query: ({ pinId }) => ({
        url: `/pins/${pinId}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useAddPinMutation,
  useGetAllPinsMutation,
  useSearchPinMutation,
  useGetPopularPinCategoriesMutation,
  useGetPinByIdMutation,
} = pinApiSlice;
