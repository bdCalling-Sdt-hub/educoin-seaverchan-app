import {createDrawerNavigator} from '@react-navigation/drawer';
import AdminHomeScreen from '../screens/admin/AdminHomeScreen';

import Ionicons from 'react-native-vector-icons/Ionicons';
import StudentHomeScreen from '../screens/student/StudentHomeScreen';

import StudentCustomDrawer from '../components/CustomDrawer/StudentCustomDrawer';
import StudentRoutes from './StudentRoutes';
const Drawer = createDrawerNavigator();

function StudentDrawerRoutes() {
  return (
    <Drawer.Navigator
      drawerContent={props => <StudentCustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
      }}>
      <Drawer.Screen
        name="StudentRoutes"
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
        component={StudentRoutes}
      />
    </Drawer.Navigator>
  );
}

export default StudentDrawerRoutes;
