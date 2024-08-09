import {api} from '../../api/baseApi';
import { IAssignReword, IAssignRewords, IRewords} from '../../interface/interface';

const authSlice = api.injectEndpoints({
  endpoints: builder => ({
    getRewords: builder.query<IRewords, unknown>({
      query: token => ({
        url: `/reward`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ['rewords'],
    }),

    getAssignRewords: builder.query<IAssignRewords, unknown>({
      query: token => ({
        url: `/assign-reward`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ['rewords'],
    }),

    createRewords: builder.mutation({
      query: ({token, data}) => ({
        url: `/reward/create-reward`,
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: data,
      }),
      invalidatesTags: ['rewords'],
    }),
    createAssignRewords: builder.mutation({
      query: ({token, data}) => ({
        url: `/assign-reward`,
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: data,
      }),
      invalidatesTags: ['rewords'],
    }),
    updateRewords: builder.mutation({
      query: ({token, id, data}) => ({
        url: `/reward/${id}`,
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: data,
      }),
      invalidatesTags: ['rewords'],
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
  useGetRewordsQuery,
  useCreateRewordsMutation,
  useGetAssignRewordsQuery,
  useUpdateRewordsMutation
} = authSlice;
