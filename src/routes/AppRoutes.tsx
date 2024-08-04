// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginAsScreen from '../screens/login/LoginAsScreen';
import TeacherLoginScreen from '../screens/login/TeacherLoginScreen';
import AdminLoginScreen from '../screens/login/AdminLoginScreen';
import ChildLoginScreen from '../screens/login/ChildLoginScreen';
import SignUpScreen from '../screens/signup/SignUpScreen';
import SplashScreen from '../screens/slpash/SplashScreen';
import AdminRoutes from './AdminRoutes';
import CreateRewords from '../screens/admin/CreateRewords';
import EditRewordsScreen from '../screens/admin/EditRewordsScreen';
import CreateTaskScreen from '../screens/admin/CreateTaskScreen';
import CustomTaskScreen from '../screens/admin/CustomTaskScreen';
import EditCustomTaskScreen from '../screens/admin/EditCustomTaskScreen';
import FeedBackScreen from '../screens/admin/FeedBackScreen';
import AdminProfileScreen from '../screens/admin/AdminProfileScreen';
import AssignTaskScreen from '../screens/admin/AssignTaskScreen';
import AllTeacherScreen from '../screens/admin/AllTeacherScreen';
import AdminNotification from '../screens/admin/AdminNotification';
import StudentRoutes from './StudentRoutes';
import StudentPublicProfileScreen from '../screens/student/StudentPublicProfileScreen';
import StudentFeedbackScreen from '../screens/student/StudentFeedbackScreen';
import StudentProfileScreen from '../screens/student/StudentProfileScreen';
import StudentNotification from '../screens/student/StudentNotificaiton';
import AllStudentsScreen from '../screens/student/AllStudentsScreen';
import PrivacyAndPolicyScreen from '../screens/teacher/PrivacyAndPolicyScreen';
import TermsAndConditionScreen from '../screens/teacher/TermsAndConditionScreen';
import TeacherDrawerRoutes from './TeacherDrawerRoutes';
import StudentsProgressAndInfo from '../screens/teacher/StudentsProgressAndInfo';
import TeacherNotification from '../screens/teacher/TeacherNotification';
import CategoryScreen from '../screens/teacher/CategoryScreen';
import EditTeacherTask from '../screens/teacher/EditTeacherTask';
import TeacherTaskAssign from '../screens/teacher/TeacherTaskAssign';
import TeacherRewords from '../screens/teacher/TeacherRewords';
import TeacherCreateRewords from '../screens/teacher/TeacherCreateRewords';
import TeacherEditRewords from '../screens/teacher/EditTeacherRewords';
import TeacherAddCategory from '../screens/teacher/TeacherAddCategory';
import TeacherFeedback from '../screens/teacher/TeacherFeedBack';
import TeacherProfile from '../screens/teacher/TeacherProfile';
import TeacherAddNewStudent from '../screens/teacher/TeacherAddNewStudent';
import StudentAllAvatar from '../screens/teacher/StudentAllAvater';
import TeacherAddNewClass from '../screens/teacher/TeacherAddNewClass';
import StudentDrawerRoutes from './StudentDrawerRoutes';
import TaskDetailsScreen from '../screens/teacher/TaskDetailsScreen';
import ParticularClassStudents from '../screens/teacher/ParticularClassStudents';
import TastingComponents from '../screens/Testing';
import EditTeacherProfile from '../screens/teacher/EditTeacherProfileScreen';
import StudentPassCode from '../screens/student/StudentPassCode';
import TeacherPassCode from '../screens/teacher/TeacherPassCode';
import StudentProfileEdit from '../screens/student/StudentProfileEdit';
import TeacherCreateTask from '../screens/teacher/TeacherCreateTask';
import EditCategory from '../screens/teacher/EditCategory';
import StudentPassCodeWithTeacher from '../screens/teacher/StudentPassCodeWithTeacher';
import AllStudentAvatar from '../screens/student/AllStudentAvatar';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Provider, useDispatch, useSelector} from 'react-redux';

const Stack = createNativeStackNavigator();

export const NavigationRoutes = () => {
  // console.log( "token" + token);
  const {user} = useContextApi();
  const {
    netInfo: {type, isConnected},
    refresh,
  } = useNetInfoInstance();

  console.log(isConnected);
  return (
    <NavigationContainer>
      <Stack.Navigator
        //  initialRouteName={user?.token ? user?.role === "teacher" ? "TeacherDrawerRoutes" : "StudentDrawerRoutes" : "Splash"}
        initialRouteName={true ? 'Splash' : 'InternetStatus'}
        screenOptions={{
          headerShown: false,
          // statusBarColor: 'transparent',
          // statusBarStyle: 'auto',
          // statusBarTranslucent: true,
          animation: 'slide_from_right',
        }}>
        {/* <Stack.Screen name="Testing" component={TastingComponents} /> */}
        <Stack.Screen name="InternetStatus" component={InternetStatusScreen} />
        <Stack.Screen name="Splash" component={SplashScreen} />

        {!user?.token && (
          <>
            <Stack.Screen name="LoginAs" component={LoginAsScreen} />
            <Stack.Screen name="TeacherLogin" component={TeacherLoginScreen} />
            <Stack.Screen name="AdminLogin" component={AdminLoginScreen} />
            <Stack.Screen name="ChildLogin" component={ChildLoginScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
          </>
        )}

        {/* Admins All Screens  */}
        {/* <Stack.Screen name="AdminRoutes" component={AdminRoutes} />
      <Stack.Screen name="CreateRewords" component={CreateRewords} />
      <Stack.Screen name="EditRewords" component={EditRewordsScreen} />
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
            <Stack.Screen name="TeacherRewords" component={TeacherRewords} />
            <Stack.Screen
              name="TeacherCreateRewords"
              component={TeacherCreateRewords}
            />
            <Stack.Screen
              name="TeacherEditRewords"
              component={TeacherEditRewords}
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

import {useNetInfoInstance} from '@react-native-community/netinfo';
import store from '../redux/store';
import ContextApi, {useContextApi} from '../context/ContextApi';
import Toast from 'react-native-toast-message';

import ToasTConfig from '../components/common/toaster/ToasTConfig';
import InternetStatusScreen from '../screens/internet/InternetStatusScreen';
import TeacherEditClass from '../screens/teacher/TeacherEditClass';

export const Routes = () => {
  return (
    <GestureHandlerRootView>
      <Provider store={store}>
        <ContextApi>
          <NavigationRoutes />
        </ContextApi>
      </Provider>
      <Toast config={ToasTConfig} />
    </GestureHandlerRootView>
  );
};

// function AppRoutes() {
//   const [appLoad, setAppLoad] = React.useState(true);
//   return <>{appLoad ? <SplashScreen setLoad={setAppLoad} /> : <Routes />}</>;
// }

export default Routes;
