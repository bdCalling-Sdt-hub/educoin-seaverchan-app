import {api} from '../../api/baseApi';
import {IAssignRewords, IAssignStudentTasks,  IEarnedStudentRewords} from '../../interface/interface';

const studentPartSlice = api.injectEndpoints({
  endpoints: builder => ({
    getStudentAssignTask: builder.query<IAssignStudentTasks, unknown>({
      query: token => ({
        url: `/assign-task/student`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ['studentAssign'],
    }),
    getStudentAssignRewords: builder.query<IAssignRewords, unknown>({
      query: token => ({
        url: `/assign-reward/student`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ['studentAssign'],
    }),
    getEarnRewords: builder.query<IEarnedStudentRewords, unknown>({
      query: token => ({
        url: `/assign-reward/earn`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ['studentAssign'],
    }),
      studentAchieveAction: builder.mutation({
      query: ({token, id}) => ({
        url: `/assign-task/achieve/${id}`,
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ['studentAssign'],
    }),
      studentClaimAction: builder.mutation({
      query: ({token, id}) => ({
        url: `/assign-reward/claim/${id}`,
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ['studentAssign'],
    }),
  }),
});

export const {
 useGetEarnRewordsQuery,
 useGetStudentAssignRewordsQuery,
 useGetStudentAssignTaskQuery,
 useStudentAchieveActionMutation,
 useStudentClaimActionMutation
} = studentPartSlice;
