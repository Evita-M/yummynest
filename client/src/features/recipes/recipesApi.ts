import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const recipesApi = createApi({
  reducerPath: 'recipesApi', // unique name for this slice
  baseQuery: fetchBaseQuery({ baseUrl: 'https://www.themealdb.com/api/json/v1/1' }), // TheMealDB base URL
  endpoints: (builder) => ({
    getRandomRecipe: builder.query({
      query: () => '/random.php',
    }),
  }),
});

export const { useGetRandomRecipeQuery } = recipesApi;
