import {api} from '../api/baseApi';
import {IClasses, IStudents} from '../interface/interface';

const authSlice = api.injectEndpoints({
  endpoints: builder => ({
    getStudents: builder.query<IStudents, unknown>({
      query: token => ({
        url: `/student`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    getClasses: builder.query<IClasses, unknown>({
      query: token => ({
        url: `/class`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    updateTeacher: builder.mutation({
      query: ({token, data}) => ({
        url: `/teacher`,
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
        body:data,
      }),
      invalidatesTags: ['user'],
    }),
  }),
});

export const {
  useGetStudentsQuery,
  useGetClassesQuery,
  useUpdateTeacherMutation,
} = authSlice;
