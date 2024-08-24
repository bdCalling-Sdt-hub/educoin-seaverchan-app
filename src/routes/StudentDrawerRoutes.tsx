import { createDrawerNavigator } from '@react-navigation/drawer';
import StudentCustomDrawer from '../components/CustomDrawer/StudentCustomDrawer';
import NewStudentHomeScreen from '../screens/student/NewStudentHomeScreen';

const Drawer = createDrawerNavigator();

function StudentDrawerRoutes() {
  return (
    <Drawer.Navigator
      drawerContent={props => <StudentCustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        
      }}>
      <Drawer.Screen
        name="NewStudentHome"
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
        component={NewStudentHomeScreen}
      />
    </Drawer.Navigator>
  );
}

export default StudentDrawerRoutes;
