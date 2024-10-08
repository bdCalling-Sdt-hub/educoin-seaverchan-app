import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import {
  Image,
  Linking,
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import {GStyles} from '../../styles/GStyles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Octicons from 'react-native-vector-icons/Octicons';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import { AppName } from '../../styles/AppDetails';
import { FontSize, removeStorageRole, removeStorageToken } from '../../utils/utils';
import { useContextApi } from '../../context/ContextApi';
import { disconnectSocket } from '../../redux/services/socket';
function StudentCustomDrawer(props: any) {
  const {setUser} = useContextApi();
  const navigation = useNavigation<any>();
  return (
    <>
      <View
        style={{
          height: 104,
          backgroundColor: GStyles.primaryOrange,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'relative',
        }}>
        <Image
          source={require('../../assets/images/loginAs/bearFace.png')}
          style={{
            width: 140,
            height: 140,
            position: 'absolute',
            left: -25,
            bottom: -28,
            transform: [{rotate: '15deg'}],
          }}
        />
        <View
          style={{
            width: 115,
            height: 115,
            marginLeft: -10,
            marginBottom: -10,
          }}
        />
        <View
          style={{
            flex: 1,
            height: 82,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontFamily: GStyles.SarinaRegular,
                fontSize: FontSize(24),
              fontWeight: '400',
              lineHeight: 34,
              color: '#FCFCFC',
              marginTop: 10,
            }}>
           {AppName}
          </Text>
        </View>
      </View>
      <DrawerContentScrollView
        {...props}
        style={{
          // paddingVertical: 10,
     

        }}>
        <DrawerItemList {...props} />
        <DrawerItem
          label="Get Student Code"
          icon={() => <AntDesign name="lock" color={GStyles.primaryOrange} size={24} />}
          
          labelStyle={{
            color: GStyles.primaryOrange,
            fontFamily: GStyles.Poppins,
            fontSize: FontSize(16),
            fontWeight: '400',
            letterSpacing: 0.8,
            
          }}
          
          style={{
            // height: 100,
            marginTop: 23,
            // borderWidth : 1,
            // borderColor : GStyles.primaryOrange,
            // borderRadius : 100,
      

          }}
          onPress={() => {
            navigation.navigate('StudentPassCode');
          }}
        />
        <DrawerItem
          label="Profile"
          icon={() => <AntDesign name="user" color={'#4A2B6C'} size={24} />}
          labelStyle={{
            color: '#4A2B6C',
            fontFamily: GStyles.Poppins,
            fontSize: FontSize(16),
            fontWeight: '400',
            letterSpacing: 0.8,
          }}
          style={{
            // height: 100,
            // marginTop: 23,
          }}
          onPress={() => {
            navigation.navigate('StudentProfile');
          }}
        />
        <DrawerItem
          label="Feedback"
          icon={() => <Octicons name="report" color={'#4A2B6C'} size={24} />}
          labelStyle={{
            color: '#4A2B6C',
            fontFamily: GStyles.Poppins,
            fontSize: FontSize(16),
            fontWeight: '400',

            letterSpacing: 0.8,
          }}
          style={
            {
              // height: 100,
              // paddingVertical: 2,
            }
          }
          onPress={() => {
            navigation.navigate('StudentFeedBack');
          }}
        />
        {/* <DrawerItem
            label="AssignTask"
            icon={() => (
              <MaterialIcons name="feedback" color={'#4A2B6C'} size={24} />
            )}
            labelStyle={{
              color: '#4A2B6C',
              fontFamily: GStyles.Poppins,
              fontSize: FontSize(16),
              fontWeight: '400',
  
              letterSpacing: 0.8,
            }}
            style={
              {
                // height: 100,
                // paddingVertical: 2,
              }
            }
            onPress={() => {
              navigation.navigate('AssignTask');
            }}
          />
          <DrawerItem
            label="AllTeacher"
            icon={() => (
              <MaterialIcons name="feedback" color={'#4A2B6C'} size={24} />
            )}
            labelStyle={{
              color: '#4A2B6C',
              fontFamily: GStyles.Poppins,
              fontSize: FontSize(16),
              fontWeight: '400',
  
              letterSpacing: 0.8,
            }}
            style={
              {
                // height: 100,
                // paddingVertical: 2,
              }
            }
            onPress={() => {
              navigation.navigate('AllTeacher');
            }}
          />
          <DrawerItem
            label="Notification"
            icon={() => (
              <MaterialIcons name="feedback" color={'#4A2B6C'} size={24} />
            )}
            labelStyle={{
              color: '#4A2B6C',
              fontFamily: GStyles.Poppins,
              fontSize: FontSize(16),
              fontWeight: '400',
  
              letterSpacing: 0.8,
            }}
            style={
              {
                // height: 100,
                // paddingVertical: 2,
              }
            }
            onPress={() => {
              navigation.navigate('AdminNotification');
            }}
          /> */}
      </DrawerContentScrollView>
      <View>
        <TouchableHighlight
          underlayColor={'rgba(0, 0, 0, 0.25)'}
          onPress={() => {
          
              removeStorageRole();
              removeStorageToken();
              setUser({
                token: null,
                role: null,
              });
              disconnectSocket()
              // navigation.navigate('LoginAs')
        
          }}
          style={{
            flexDirection: 'row',
            gap: 15,
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal: 10,
            paddingVertical: 10,
            marginVertical: 30,
            marginHorizontal: 10,
            borderRadius: 5,
          }}>
          <View
            style={{
              flexDirection: 'row',
              gap: 10,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                transform: [{rotate: '180deg'}],
              }}>
              <Entypo name="log-out" color="#3D3D3D" size={20} />
            </Text>
            <Text
              style={{
                color: '#3D3D3D',
                fontFamily: GStyles.Poppins,
                   fontSize: FontSize(15),
                fontWeight: '400',
                letterSpacing: 0.8,
              }}>
              Log Out
            </Text>
          </View>
        </TouchableHighlight>
      </View>
    </>
  );
}
export default StudentCustomDrawer;
