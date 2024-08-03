import { api } from "../api/baseApi";
import { IUser } from "../interface/interface";

const authSlice = api.injectEndpoints({
    endpoints: (builder) => ({
        getUser: builder.query<IUser , unknown>({
            query: (token) => ({
                url : `/teacher/profile/`,
                headers: {
                  Authorization: `Bearer ${token}`,
                },
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
        
    })
});

export const {
   useGetUserQuery,useLoginMutation
} = authSlice;