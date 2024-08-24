import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CreateTaskScreen from '../screens/admin/CreateTaskScreen';
import AdminDrawerRoutes from './AdminDrawerRoutes';

const Tab = createBottomTabNavigator();

function AdminRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="AdminDrawer"
        component={AdminDrawerRoutes}
        options={{
          tabBarLabel: 'Home',
          tabBarLabelStyle: {
            display: 'none',
          },
          tabBarStyle: {
            height: 70,
          },
          tabBarIconStyle: {
            width: 30,
            height: 30,
          },
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="AdminRewards"
        component={AdminRewards}
        options={{
          tabBarLabel: 'Home',
          tabBarLabelStyle: {
            display: 'none',
          },
          tabBarStyle: {
            height: 70,
          },
          tabBarIconStyle: {
            width: 30,
            height: 30,
          },
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="gift" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="CreateTask"
        component={CreateTaskScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarLabelStyle: {
            display: 'none',
          },
          tabBarStyle: {
            height: 70,
          },
          tabBarIconStyle: {
            width: 30,
            height: 30,
          },
          tabBarIcon: ({color, size}) => (
            <FontAwesome6 name="clipboard-list" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default AdminRoutes;
