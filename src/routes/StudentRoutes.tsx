import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AdminHomeScreen from '../screens/admin/AdminHomeScreen';
import AdminDrawerRoutes from './AdminDrawerRoutes';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Entypo from 'react-native-vector-icons/Entypo';
import AdminRewords from '../screens/admin/AdminRewords';
import AdminTask from '../screens/admin/AdminTask';
import CreateTaskScreen from '../screens/admin/CreateTaskScreen';
import StudentDrawerRoutes from './StudentDrawerRoutes';
import {GStyles} from '../styles/GStyles';
import StudentRewordsScreen from '../screens/student/StudentRewordsScreen';
import ProgressScreen from '../screens/student/ProgressScreen';
import StudentHomeScreen from '../screens/student/StudentHomeScreen';
const Tab = createBottomTabNavigator();

function StudentRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="StudentHome"
        component={StudentHomeScreen}
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
            color: GStyles.primaryOrange,
          },
          tabBarActiveTintColor: GStyles.primaryOrange,
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="StudentRewords"
        component={StudentRewordsScreen}
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
          tabBarActiveTintColor: GStyles.primaryOrange,
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="gift" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="StudentProgress"
        component={ProgressScreen}
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
          tabBarActiveTintColor: GStyles.primaryOrange,
          tabBarIcon: ({color, size}) => (
            <Entypo name="bar-graph" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default StudentRoutes;
