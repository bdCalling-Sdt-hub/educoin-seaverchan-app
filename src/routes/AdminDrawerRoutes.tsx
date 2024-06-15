import {createDrawerNavigator} from '@react-navigation/drawer';
import AdminHomeScreen from '../screens/admin/AdminHomeScreen';
import CustomDrawer from '../components/CustomDrawer/CustomDrawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Drawer = createDrawerNavigator();

function AdminDrawerRoutes() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
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
