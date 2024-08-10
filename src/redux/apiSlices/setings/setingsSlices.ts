import {api} from '../../api/baseApi';
import {IAssignRewords, IAssignStudentTasks,  IEarnedStudentRewords} from '../../interface/interface';

const studentPartSlice = api.injectEndpoints({
  endpoints: builder => ({
    // getStudentAssignTask: builder.query<IAssignStudentTasks, unknown>({
    //   query: token => ({
    //     url: `/assign-task/student`,
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //     },
    //   }),
    //   providesTags: ['studentAssign'],
    // }),
   
      sendFeedBack: builder.mutation({
      query: ({token, data}) => ({
        url: `/feedback`,
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body : data
      }),
    //   invalidatesTags: ['studentAssign'],
    }),
  }),
});

export const {
useSendFeedBackMutation
} = studentPartSlice;
