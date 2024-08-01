// Need to use the React-specific entry point to import createApi
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {BASE_URL} from '../BASE_URL';
import { SToken } from '../../utils/Storage';
import { IUser } from '../interface';


// Define a service using a base URL and expected endpoints

console.log(process.env);

export const studentsApi = createApi({
  reducerPath: 'studentsApi',
  
  baseQuery: fetchBaseQuery({baseUrl: BASE_URL,headers : {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${SToken}`,
      
  }}),
  tagTypes: ['user'],
  endpoints: builder => ({
    getUser: builder.query<IUser , unknown>({
      query: () => `/teacher/profile/`,
    }),
    login: builder.mutation({
      query: pass_code => ({
        url: `/teacher/login`,
        method: 'POST',
        body: {
          password: pass_code,
        },
      }),
    }),
    updateUser: builder.mutation({
      query: pass_code => ({
        url: `/user`,
        method: 'PATCH',
        body: {
          password: pass_code,
        },
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {useLoginMutation,useGetUserQuery,useUpdateUserMutation} = studentsApi;
