// services/api.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const formApi = createApi({
    reducerPath: 'formApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://reqres.in/api/' }),
    endpoints: (builder) => ({
        signup: builder.mutation({
            query: (body) => ({
                url: 'users',
                method: 'POST',
                body,
            }),
        }),
    }),
});

export const { useSignupMutation } = formApi;
