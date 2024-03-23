import { PRODUCTS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const productsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => PRODUCTS_URL,
            // providesTags: ['Product'],
        }),
        keepUnusedDataFor: 5
    }),
});

export const { useGetProductsQuery } = productsApiSlice;