import {api} from '../../api/baseApi';
import { IAssignReword, IAssignRewards, IRewards} from '../../interface/interface';

const authSlice = api.injectEndpoints({
  endpoints: builder => ({
    getRewards: builder.query<IRewards, unknown>({
      query: token => ({
        url: `/reward`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ['Rewards'],
    }),

    getAssignRewards: builder.query<IAssignRewards, unknown>({
      query: token => ({
        url: `/assign-reward`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ['Rewards'],
    }),

    createRewards: builder.mutation({
      query: ({token, data}) => ({
        url: `/reward/create-reward`,
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: data,
      }),
      invalidatesTags: ['Rewards'],
    }),
    createAssignRewards: builder.mutation({
      query: ({token, data}) => ({
        url: `/assign-reward`,
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: data,
      }),
      invalidatesTags: ['Rewards'],
    }),
    updateRewards: builder.mutation({
      query: ({token, id, data}) => ({
        url: `/reward/${id}`,
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: data,
      }),
      invalidatesTags: ['Rewards'],
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
  useGetRewardsQuery,
  useCreateRewardsMutation,
  useGetAssignRewardsQuery,
  useUpdateRewardsMutation,
  useCreateAssignRewardsMutation
} = authSlice;
