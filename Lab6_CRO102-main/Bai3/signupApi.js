import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const signupApi = createApi({
    reducerPath: 'signupApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }), // hoặc URL server thật
    endpoints: (builder) => ({
        signup: builder.mutation({
            query: (userData) => ({
                url: 'users',
                method: 'POST',
                body: userData,
            }),
        }),
    }),
});

export const { useSignupMutation } = signupApi;
