// In App.js in a new project

import * as React from 'react';

import notifee, { AuthorizationStatus } from '@notifee/react-native';
import { Provider } from 'react-redux';
import ContextApi, { useContextApi } from '../context/ContextApi';
import { useGetUserStudentQuery, useGetUserTeacherQuery } from '../redux/apiSlices/authSlice';
import { getSocket } from '../redux/services/socket';

import NetInfo from '@react-native-community/netinfo';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Socket } from 'socket.io-client';
import { onDisplayNotification } from '../..';
import { useGetNotificationsQuery } from '../redux/apiSlices/setings/notification';
import { useGetPendingTaskQuery } from '../redux/apiSlices/teacher/teaherTaskSlices';
import { INotification } from '../redux/interface/interface';
import store from '../redux/store';
import InternetStatusScreen from '../screens/internet/InternetStatusScreen';
import AdminLoginScreen from '../screens/login/AdminLoginScreen';
import ChildLoginScreen from '../screens/login/ChildLoginScreen';
import LoginAsScreen from '../screens/login/LoginAsScreen';
import SignUpScreen from '../screens/login/SignUpScreen';
import TeacherLoginScreen from '../screens/login/TeacherLoginScreen';
import TeacherLoginVariation from '../screens/login/TeacherLoginVariation';
import TeacherLoginWithEmail from '../screens/login/TeacherLoginWithEmail';
import AddPaymentCards from '../screens/payments/AddPaymentCards';
import PaymentScreen from '../screens/payments/PaymentScreen';
import GlobalSplash from '../screens/slpash/GlobalSplash';
import SplashScreen from '../screens/slpash/SplashScreen';
import AllStudentAvatar from '../screens/student/AllStudentAvatar';
import AllStudentsScreen from '../screens/student/AllStudentsScreen';
import StudentFeedbackScreen from '../screens/student/StudentFeedbackScreen';
import StudentNotification from '../screens/student/StudentNotificaiton';
import StudentPassCode from '../screens/student/StudentPassCode';
import StudentProfileEdit from '../screens/student/StudentProfileEdit';
import StudentProfileScreen from '../screens/student/StudentProfileScreen';
import StudentPublicProfileScreen from '../screens/student/StudentPublicProfileScreen';
import CategoryScreen from '../screens/teacher/CategoryScreen';
import EditCategory from '../screens/teacher/EditCategory';
import EditTeacherProfile from '../screens/teacher/EditTeacherProfileScreen';
import TeacherEditRewards from '../screens/teacher/EditTeacherRewords';
import EditTeacherTask from '../screens/teacher/EditTeacherTask';
import ParticularClassStudents from '../screens/teacher/ParticularClassStudents';
import PrivacyAndPolicyScreen from '../screens/teacher/PrivacyAndPolicyScreen';
import StudentAllAvatar from '../screens/teacher/StudentAllAvater';
import StudentPassCodeWithTeacher from '../screens/teacher/StudentPassCodeWithTeacher';
import StudentsProgressAndInfo from '../screens/teacher/StudentsProgressAndInfo';
import TaskDetailsScreen from '../screens/teacher/TaskDetailsScreen';
import TeacherAddCategory from '../screens/teacher/TeacherAddCategory';
import TeacherAddNewClass from '../screens/teacher/TeacherAddNewClass';
import TeacherAddNewStudent from '../screens/teacher/TeacherAddNewStudent';
import TeacherCreateRewards from '../screens/teacher/TeacherCreateRewords';
import TeacherCreateTask from '../screens/teacher/TeacherCreateTask';
import TeacherEditClass from '../screens/teacher/TeacherEditClass';
import TeacherFeedback from '../screens/teacher/TeacherFeedBack';
import TeacherNotification from '../screens/teacher/TeacherNotification';
import TeacherPassCode from '../screens/teacher/TeacherPassCode';
import TeacherProfile from '../screens/teacher/TeacherProfile';
import TeacherRewards from '../screens/teacher/TeacherRewords';
import TeacherRewardsAssign from '../screens/teacher/TeacherRewordsAssign';
import TeacherTaskAssign from '../screens/teacher/TeacherTaskAssign';
import TermsAndConditionScreen from '../screens/teacher/TermsAndConditionScreen';
import StudentDrawerRoutes from './StudentDrawerRoutes';
import TeacherDrawerRoutes from './TeacherDrawerRoutes';

let socket: Socket;

const Stack = createNativeStackNavigator();

export const NavigationRoutes = () => {
  requestUserPermission()
  // console.log( "token" + token);
  const {user} = useContextApi();
  const {data : teacherUser} = useGetUserTeacherQuery(user?.token || "")
  const {data : studentUser,refetch : studentUserRefetch} = useGetUserStudentQuery(user.token || "")
  const {refetch : notificationRefetch} = useGetNotificationsQuery(user.token || "")
  const {refetch : pendingTaskRefetch} = useGetPendingTaskQuery(user.token || "")
  React.useEffect(() => {
    // Ensure socket is initialized
  
    const socket = getSocket();

    if (!socket) return;

    const teacherId = teacherUser?.data?._id;
    const studentId = studentUser?.data?._id;

    const handleNotification = (data :INotification) => {
      // console.log(data);
      notificationRefetch()
      if(data.role === "STUDENT"){
        studentUserRefetch()
        // console.log("student");
        onDisplayNotification({
          title: data?.type?.toLocaleUpperCase(),
            body: data?.message,
        })
      }
      if(data.role === "TEACHER"){
        pendingTaskRefetch()
        onDisplayNotification({
          title: data?.type?.toLocaleUpperCase(),
            body: data?.message,
        })
      }
     
    };

    const handleError = (error) => {
      console.warn('Error receiving data:', error.message);
    };

    if (teacherId) {
  

      socket.on(`notification::${teacherId}`, handleNotification);
    }

    if (studentId) {
  
      socket.on(`notification::${studentId}`, handleNotification);
    }

    // Clean up on component unmount
    return () => {
      if (teacherId) {
        socket.off(`notification::${teacherId}`, handleNotification);
      }
      if (studentId) {
        socket.off(`notification::${studentId}`, handleNotification);
      }
      socket.off('error', handleError);
    };
  }, [user?.token, teacherUser?.data?._id, studentUser?.data?._id]);

  return (
    <NavigationContainer>
      <Stack.Navigator
        //  initialRouteName={user?.token ? user?.role === "teacher" ? "TeacherDrawerRoutes" : "StudentDrawerRoutes" : "Splash"}
        initialRouteName={'Splash'}
        screenOptions={{
          headerShown: false,
          // statusBarColor: 'transparent',
          // statusBarStyle: 'auto',
          // statusBarTranslucent: true,
          animation: 'slide_from_right',
        }}>
        {/* <Stack.Screen name="Testing" component={TastingComponents} /> */}
        <Stack.Screen name="AddPayment" component={AddPaymentCards} />
        <Stack.Screen name="Payment" component={PaymentScreen} />
        <Stack.Screen name="InternetStatus" component={InternetStatusScreen} />
        <Stack.Screen name="Splash" component={SplashScreen} options={{
          
        }} />

        {!user?.token && (
          <>
            <Stack.Screen name="LoginAs" component={LoginAsScreen} />
            <Stack.Screen name="TeacherLogin" component={TeacherLoginScreen} />
            <Stack.Screen name="TeacherLoginVariation" component={TeacherLoginVariation} />
            <Stack.Screen name="AdminLogin" component={AdminLoginScreen} />
            <Stack.Screen name="ChildLogin" component={ChildLoginScreen} />
            <Stack.Screen name="TeacherLoginWithEmail" component={TeacherLoginWithEmail} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
          </>
        )}

        {/* Admins All Screens  */}
        {/* <Stack.Screen name="AdminRoutes" component={AdminRoutes} />
      <Stack.Screen name="CreateRewards" component={CreateRewards} />
      <Stack.Screen name="EditRewards" component={EditRewardsScreen} />
      <Stack.Screen name="CreateTask" component={CreateTaskScreen} />
      <Stack.Screen name="CustomTask" component={CustomTaskScreen} />
      <Stack.Screen name="EditCustomTask" component={EditCustomTaskScreen} />
      <Stack.Screen name="FeedBack" component={FeedBackScreen} />
      <Stack.Screen name="AdminProfile" component={AdminProfileScreen} />
      <Stack.Screen name="AssignTask" component={AssignTaskScreen} />
      <Stack.Screen name="AllTeacher" component={AllTeacherScreen} />
      <Stack.Screen name="AdminNotification" component={AdminNotification} /> */}
        {/*--------------------- student routes----------------  */}
        {user?.role === 'student' && (
          <>
            <Stack.Screen
              name="StudentDrawerRoutes"
              component={StudentDrawerRoutes}
           
            />
            <Stack.Screen
              name="StudentPublicProfile"
              component={StudentPublicProfileScreen}
            />
            <Stack.Screen
              name="StudentFeedBack"
              component={StudentFeedbackScreen}
            />
            <Stack.Screen
              name="StudentProfile"
              component={StudentProfileScreen}
            />
            <Stack.Screen
              name="StudentNotification"
              component={StudentNotification}
            />
            <Stack.Screen name="AllStudents" component={AllStudentsScreen} />
            <Stack.Screen name="StudentPassCode" component={StudentPassCode} />
            <Stack.Screen
              name="StudentProfileEdit"
              component={StudentProfileEdit}
            />
            <Stack.Screen
              name="AllStudentAvatar"
              component={AllStudentAvatar}
            />
          </>
        )}

        {/*-------------------- Teachers All Screens ----------- */}
        {user?.role === 'teacher' && (
          <>
            <Stack.Screen
              name="TeacherDrawerRoutes"
              component={TeacherDrawerRoutes}
            />
            <Stack.Screen
              name="PrivacyAndPolicy"
              component={PrivacyAndPolicyScreen}
            />
            <Stack.Screen
              name="TermsAndCondition"
              component={TermsAndConditionScreen}
            />
            <Stack.Screen
              name="StudentsProgressAndInfo"
              component={StudentsProgressAndInfo}
            />
            <Stack.Screen
              name="TeacherNotification"
              component={TeacherNotification}
            />
            <Stack.Screen name="Category" component={CategoryScreen} />
            <Stack.Screen
              name="TeacherCreateTask"
              component={TeacherCreateTask}
            />
            <Stack.Screen name="EditTeacherTask" component={EditTeacherTask} />
            <Stack.Screen
              name="TeacherTaskAssign"
              component={TeacherTaskAssign}
            />
            <Stack.Screen
              name="TeacherRewardsAssign"
              component={TeacherRewardsAssign}
            />
            <Stack.Screen name="TeacherRewards" component={TeacherRewards} />
            <Stack.Screen
              name="TeacherCreateRewards"
              component={TeacherCreateRewards}
            />
            <Stack.Screen
              name="TeacherEditRewards"
              component={TeacherEditRewards}
            />
            <Stack.Screen
              name="TeacherAddCategory"
              component={TeacherAddCategory}
            />
            <Stack.Screen
              name="TeacherAddNewClass"
              component={TeacherAddNewClass}
            />
            <Stack.Screen
              name="TeacherEditClass"
              component={TeacherEditClass}
            />
            <Stack.Screen
              name="TeacherAddNewStudent"
              component={TeacherAddNewStudent}
            />
            <Stack.Screen name="TeacherFeedBack" component={TeacherFeedback} />
            <Stack.Screen name="TeacherProfile" component={TeacherProfile} />
            <Stack.Screen
              name="StudentAllAvatar"
              component={StudentAllAvatar}
            />
            <Stack.Screen name="TaskDetails" component={TaskDetailsScreen} />
            <Stack.Screen
              name="ParticularClassStudent"
              component={ParticularClassStudents}
            />
            <Stack.Screen
              name="EditTeacherProfile"
              component={EditTeacherProfile}
            />
            <Stack.Screen name="TeacherPassCode" component={TeacherPassCode} />
            <Stack.Screen name="EditCategory" component={EditCategory} />
            <Stack.Screen
              name="StudentPassCodeWithTeacher"
              component={StudentPassCodeWithTeacher}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};































//  google clude message 
// import messaging from '@react-native-firebase/messaging';
// On foreground notification
// async function requestUserPermission() {
//   const authStatus = await messaging().requestPermission();
//   const enabled =
//     authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
//     authStatus === messaging.AuthorizationStatus.PROVISIONAL;

//   if (enabled) {
//     console.log('Authorization status:', authStatus);
//   }
// }

// messaging()
//   .getToken()
//   .then(token => {
//     console.log('FCM Token:', token);
//   })
//   .catch(error => {
//     console.log('Error getting FCM Token:', error);
//   });

// notifee 
async function requestUserPermission() {
  const settings = await notifee.requestPermission();

  if (settings.authorizationStatus >= AuthorizationStatus.AUTHORIZED) {
    // console.log('Permission settings:', settings);
  } else {
    console.log('User declined permissions');
  }
}



export const Routes = () => {

  const [isConnected, setIsConnected] = React.useState<boolean | null>(null);


   React.useEffect(() => {
   
    // Subscribe to network status updates
    const unsubscribe = NetInfo.addEventListener(state => {
      // const hasDataConnection = state.isConnected && state.isInternetReachable;
      const hasDataConnection = state.isConnected ;
      setIsConnected(hasDataConnection);
    });

    // Cleanup on component unmount
    return () => unsubscribe();
  }, []);

 
  const [isLoading, setIsLoading] = React.useState(true); // New loading state


  // React.useEffect(() => {
  //   const unsubscribe = messaging().onMessage(async remoteMessage => {
  //     // Display the notification
  //     await notifee.displayNotification({
  //       title: remoteMessage.notification?.title,
  //       body: remoteMessage.notification?.body,
  //       android: {
  //         channelId: 'default',
  //         sound : "default"
  //       },
  //     });
  //   });

  //   return unsubscribe;
  // }, []);

 
  return (
    <GestureHandlerRootView>
      <Provider store={store}>
        <ContextApi>
          { isLoading ?   <GlobalSplash  setAppLoad={setIsLoading}  />: !isConnected ? <InternetStatusScreen />  :  <NavigationRoutes />  }
        </ContextApi>
      </Provider>
      {/* <Toast config={ToasTConfig} /> */}
    </GestureHandlerRootView>
  );
};

// function AppRoutes() {
//   const [appLoad, setAppLoad] = React.useState(true);
//   return <>{appLoad ? <SplashScreen setLoad={setAppLoad} /> : <Routes />}</>;
// }

export default Routes;
