import {api} from '../../api/baseApi';
import {IStudent, IStudents} from '../../interface/interface';

const authSlice = api.injectEndpoints({
  endpoints: builder => ({
    getStudents: builder.query<IStudents, unknown>({
      query: token => ({
        url: `/student`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ['student'],
    }),
    getSingleStudent: builder.query<IStudent, unknown>({
      query: ({token, id}) => ({
        url: `/student/${id}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        providesTags: ['student'],
      }),
    }),
    getStudentThrowClass: builder.query<IStudents, unknown>({
      query: ({token, className}) => ({
        url: `/student/class/${className}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        providesTags: ['student'],
      }),
    }),
    createStudent: builder.mutation({
      query: ({token, data}) => ({
        url: `/student/create-student`,
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
        body: data,
      }),
      invalidatesTags: ['student'],
    }),
    // updateStudent: builder.mutation({
    //   query: ({token, id, data}) => ({
    //     url: `/class/${id}`,
    //     method: 'PATCH',
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //     },
    //     body: data,
    //   }),
    //   invalidatesTags: ['class'],
    // }),
  }),
});

export const {
  useGetStudentsQuery,
  useCreateStudentMutation,
  useGetSingleStudentQuery,
  useGetStudentThrowClassQuery,
} = authSlice;
