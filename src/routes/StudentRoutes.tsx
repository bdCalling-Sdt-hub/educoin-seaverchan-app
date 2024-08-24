import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ProgressScreen from '../screens/student/ProgressScreen';
import StudentHomeScreen from '../screens/student/StudentHomeScreen';
import StudentRewardsScreen from '../screens/student/StudentRewordsScreen';
import { GStyles } from '../styles/GStyles';

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
        name="StudentRewards"
        component={StudentRewardsScreen}
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
