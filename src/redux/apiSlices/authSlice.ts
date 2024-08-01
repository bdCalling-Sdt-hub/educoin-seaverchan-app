import { api } from "../api/baseApi";
import { IUser } from "../interface/interface";

const authSlice = api.injectEndpoints({
    endpoints: (builder) => ({
        getUser: builder.query<IUser , unknown>({
            query: (token) => ({
                url : `/teacher/profile/`,
            }),
            providesTags : ["user"]
          }),
          login: builder.mutation({
            query: pass_code => ({
              url: `/teacher/login`,
              method: 'POST',
              body: {
                password: pass_code,
              },
              
            }),
            invalidatesTags : ["user"]
          }),
          updateUser: builder.mutation({
            query: pass_code => ({
              url: `/user`,
              method: 'PATCH',
              body: {
                password: pass_code,
              },
            }),
            invalidatesTags : ["user"]
          }),
    })
});

export const {
   useGetUserQuery,useLoginMutation,useUpdateUserMutation
} = authSlice;