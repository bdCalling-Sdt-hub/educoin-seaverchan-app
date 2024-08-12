import { api } from "../api/baseApi";
import { IFetchStatus, IStudentUser, ITeacherUser } from "../interface/interface";

const authSlice = api.injectEndpoints({
    endpoints: (builder) => ({
        getUserTeacher: builder.query<ITeacherUser , unknown>({
            query: token => ({
                url : `/teacher/profile/`,
                headers: {
                  Authorization: `Bearer ${token}`,
                },
            }),
            providesTags : ["user"]
          }),
        getTeacherPasscode: builder.query<IFetchStatus , unknown>({
            query: token => ({
                url : `/teacher/pass-code`,
                headers: {
                  Authorization: `Bearer ${token}`,
                },
            }),
            providesTags : ["user"]
          }),
        getUserStudent: builder.query<IStudentUser , unknown>({
            query: token => ({
                url : `/student/profile`,
                headers: {
                  Authorization: `Bearer ${token}`,
                },
            }),
            providesTags : ["user","studentUser"]
          }),
          loginTeacher: builder.mutation({
            query: pass_code => ({
              url: `/teacher/login`,
              method: 'POST',
              body: {
                password: pass_code,
              },
              
            }),
            invalidatesTags : ["user"]
          }),
          loginStudent: builder.mutation({
            query: pass_code => ({
              url: `/student/login`,
              method: 'POST',
              body: {
                password: pass_code,
              },
              
            }),
            invalidatesTags : ["user"]
          }),

          updateStudent: builder.mutation({
            query: ({token, data}) => ({
              url: `/student`,
              method: 'PATCH',
              headers: {
                Authorization: `Bearer ${token}`,
              
              },
              body: data,
            }),
            invalidatesTags: ['user'],
          }),
        
    })
});

export const {
   useGetUserStudentQuery,
   useGetUserTeacherQuery,
   useLoginStudentMutation,
   useLoginTeacherMutation,
   useUpdateStudentMutation,
   useGetTeacherPasscodeQuery
} = authSlice;