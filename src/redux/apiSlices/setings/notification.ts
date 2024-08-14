import {api} from '../../api/baseApi';
import {
  IAssignRewords,
  IAssignStudentTasks,
  IEarnedStudentRewords,
  IFetchStatus,
  INotifications,
} from '../../interface/interface';

const studentPartSlice = api.injectEndpoints({
  endpoints: builder => ({
    getNotifications: builder.query<
     INotifications,
      unknown
    >({
      query: token => ({
        url: `/notifications`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ['notification'],
    }),
 

    readNotification: builder.mutation({
      query: ({token, id}) => ({
        url: `/notifications/${id}`,
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      
      }),
        invalidatesTags: ['notification'],
    }),
  }),
});

export const {useGetNotificationsQuery,useReadNotificationMutation} = studentPartSlice;
