import {api} from '../../api/baseApi';
import {IClasses, IStudents} from '../../interface/interface';

const authSlice = api.injectEndpoints({
  endpoints: builder => ({
    updateTeacher: builder.mutation({
      query: ({token, data}) => ({
        url: `/teacher`,
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
        body: data,
      }),
      invalidatesTags: ['user'],
    }),
  }),
});

export const {useUpdateTeacherMutation} = authSlice;
