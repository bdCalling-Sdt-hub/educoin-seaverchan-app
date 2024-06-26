import {createDrawerNavigator} from '@react-navigation/drawer';
import AdminHomeScreen from '../screens/admin/AdminHomeScreen';

import Ionicons from 'react-native-vector-icons/Ionicons';
import AdminCustomDrawer from '../components/CustomDrawer/AdminCustomDrawer';
const Drawer = createDrawerNavigator();

function AdminDrawerRoutes() {
  return (
    <Drawer.Navigator
      drawerContent={props => <AdminCustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
      }}>
      <Drawer.Screen
        name="AdminHome"
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
        component={AdminHomeScreen}
      />
    </Drawer.Navigator>
  );
}

export default AdminDrawerRoutes;
