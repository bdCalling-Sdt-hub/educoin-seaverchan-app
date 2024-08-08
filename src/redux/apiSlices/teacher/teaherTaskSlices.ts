import {api} from '../../api/baseApi';
import {IPendingTasks, ITasks} from '../../interface/interface';

const authSlice = api.injectEndpoints({
  endpoints: builder => ({
    getTask: builder.query<ITasks, unknown>({
      query: token => ({
        url: `/task`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ['task'],
    }),
    getPendingTask: builder.query<IPendingTasks, unknown>({
      query: token => ({
        url: `/assign-task/pending`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ['task'],
    }),

    createTask: builder.mutation({
      query: ({token, data}) => ({
        url: `/task/create-task`,
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: data,
      }),
      invalidatesTags: ['task'],
    }),
    updateTask: builder.mutation({
      query: ({token, id, data}) => ({
        url: `/task/${id}`,
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: data,
      }),
      invalidatesTags: ['task'],
    }),
    // deletedClass: builder.mutation({
    //   query: ({token, id}) => ({
    //     url: `/class/${id}`,
    //     method: 'DELETE',
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //     },
    //   }),
    //   invalidatesTags: ['class'],
    // }),
  }),
});

export const {
  useGetTaskQuery,
  useCreateTaskMutation,
  useUpdateTaskMutation,
  useGetPendingTaskQuery,
} = authSlice;
