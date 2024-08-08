import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';




export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: `http://192.168.10.185:5001/api/v1`,
    prepareHeaders: (headers, {getState}) => {
      const state = getState();
      // console.log(state?.user?.token);
      
      headers.set('Authorization', `Bearer ${state?.user?.token}`);
      return headers;
    },
  }),
  endpoints: () => ({}),
  tagTypes: ['user', 'class', 'student', 'category', 'task'],
});


export const imageUrl = 'http://192.168.10.185:5001';