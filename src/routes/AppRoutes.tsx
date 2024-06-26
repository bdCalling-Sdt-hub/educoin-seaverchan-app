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
import TeacherCreateTask from '../screens/teacher/TeacherCreateTask';
import TeacherCustomTask from '../screens/teacher/TeacherCustomTask';
import EditTeacherCustomTask from '../screens/teacher/EditTeacherCustomTask';
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

const Stack = createNativeStackNavigator();

export const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          // statusBarColor: 'transparent',
          // statusBarStyle: 'auto',
          // statusBarTranslucent: true,
          animation: 'slide_from_right',
        }}>
        {/* <Stack.Screen name="Testing" component={TastingComponents} /> */}
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="LoginAs" component={LoginAsScreen} />
        <Stack.Screen name="TeacherLogin" component={TeacherLoginScreen} />
        <Stack.Screen name="AdminLogin" component={AdminLoginScreen} />
        <Stack.Screen name="ChildLogin" component={ChildLoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
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
        <Stack.Screen name="StudentProfile" component={StudentProfileScreen} />
        <Stack.Screen
          name="StudentNotification"
          component={StudentNotification}
        />
        <Stack.Screen name="AllStudents" component={AllStudentsScreen} />

        {/*-------------------- Teachers All Screens ----------- */}
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
        <Stack.Screen name="TeacherCreateTask" component={TeacherCreateTask} />
        <Stack.Screen name="TeacherCustomTask" component={TeacherCustomTask} />
        <Stack.Screen
          name="EditTeacherCustomTask"
          component={EditTeacherCustomTask}
        />
        <Stack.Screen name="TeacherTaskAssign" component={TeacherTaskAssign} />
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
          name="TeacherAddNewStudent"
          component={TeacherAddNewStudent}
        />
        <Stack.Screen name="TeacherFeedBack" component={TeacherFeedback} />
        <Stack.Screen name="TeacherProfile" component={TeacherProfile} />
        <Stack.Screen name="StudentAllAvatar" component={StudentAllAvatar} />
        <Stack.Screen name="TaskDetails" component={TaskDetailsScreen} />
        <Stack.Screen
          name="ParticularClassStudent"
          component={ParticularClassStudents}
        />
        <Stack.Screen
          name="EditTeacherProfile"
          component={EditTeacherProfile}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// function AppRoutes() {
//   const [appLoad, setAppLoad] = React.useState(true);
//   return <>{appLoad ? <SplashScreen setLoad={setAppLoad} /> : <Routes />}</>;
// }

export default Routes;
