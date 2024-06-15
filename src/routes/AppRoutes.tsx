// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginAsScreen from '../screens/login/LoginAsScreen';
import TeacherLoginScreen from '../screens/login/TeacherLoginScreen';
import AdminLoginScreen from '../screens/login/AdminLoginScreen';
import ChildLoginScreen from '../screens/login/ChildLoginScreen';
import HomeScreen from '../screens/HomeScreen';
import SignUpScreen from '../screens/signup/SignUpScreen';
import SplashScreen from '../screens/slpash/SplashScreen';
import AdminRoutes from './AdminRoutes';

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
        <Stack.Screen name="LoginAs" component={LoginAsScreen} />
        <Stack.Screen name="TeacherLogin" component={TeacherLoginScreen} />
        <Stack.Screen name="AdminLogin" component={AdminLoginScreen} />
        <Stack.Screen name="ChildLogin" component={ChildLoginScreen} />
        <Stack.Screen name="AdminRoutes" component={AdminRoutes} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

function AppRoutes() {
  const [appLoad, setAppLoad] = React.useState(true);
  return <>{appLoad ? <SplashScreen setLoad={setAppLoad} /> : <Routes />}</>;
}

export default AppRoutes;
