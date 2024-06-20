import {createDrawerNavigator} from '@react-navigation/drawer';
import AdminHomeScreen from '../screens/admin/AdminHomeScreen';

import Ionicons from 'react-native-vector-icons/Ionicons';
import StudentHomeScreen from '../screens/student/StudentHomeScreen';

import StudentCustomDrawer from '../components/CustomDrawer/StudentCustomDrawer';
import TeacherHomeScreen from '../screens/teacher/TeacherHomeScreen';
import TeacherCustomDrawer from '../components/CustomDrawer/TeacherCustomDrawer';
import TeacherRoutes from './TeacherRoutes';
const Drawer = createDrawerNavigator();

function TeacherDrawerRoutes() {
  return (
    <Drawer.Navigator
      drawerContent={props => <TeacherCustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
      }}>
      <Drawer.Screen
        name="TeacherRoutes"
        options={{
          drawerStyle: {
            // display: 'none',
          },
          drawerItemStyle: {
            display: 'none',
          },
          drawerLabelStyle: {
            display: 'none',
          },
        }}
        component={TeacherRoutes}
      />
    </Drawer.Navigator>
  );
}

export default TeacherDrawerRoutes;
