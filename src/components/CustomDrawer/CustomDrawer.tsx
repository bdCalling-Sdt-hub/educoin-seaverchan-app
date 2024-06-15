import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import {Image, Linking, View, Text, TouchableOpacity} from 'react-native';
import {GStyles} from '../../styles/GStyles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
function CustomDrawer(props: any) {
  return (
    <>
      <View
        style={{
          height: 104,
          backgroundColor: GStyles.primaryBlue,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          paddingHorizontal: 10,
        }}>
        <Image
          source={require('../../assets/images/bearImage.png')}
          style={{
            width: 82,
            height: 82,
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
              fontFamily: GStyles.ProstoOneRegular,
              fontSize: 24,
              fontWeight: '400',
              lineHeight: 34,
              color: '#FCFCFC',
            }}>
            Logo name
          </Text>
        </View>
      </View>
      <DrawerContentScrollView
        {...props}
        style={{
          paddingVertical: 10,
        }}>
        <DrawerItemList {...props} />
        <DrawerItem
          label="Profile"
          icon={() => <AntDesign name="user" color={'#4A2B6C'} size={24} />}
          labelStyle={{
            color: '#4A2B6C',
            fontFamily: GStyles.Poppins,
            fontSize: 16,
            fontWeight: '400',
            letterSpacing: 0.8,
          }}
          style={{
            // height: 100,
            marginBottom: 30,
            marginTop: 23,
            borderBottomColor: '#4A2B6C',
            borderBottomWidth: 1,
          }}
          onPress={() => console.log('ok')}
        />
        <DrawerItem
          label="Feedback"
          icon={() => (
            <MaterialIcons name="feedback" color={'#4A2B6C'} size={24} />
          )}
          labelStyle={{
            color: '#4A2B6C',
            fontFamily: GStyles.Poppins,
            fontSize: 16,
            fontWeight: '400',

            letterSpacing: 0.8,
          }}
          style={{
            // height: 100,
            // paddingVertical: 2,
            borderBottomColor: '#4A2B6C',
            borderBottomWidth: 1,
          }}
          onPress={() => console.log('ok')}
        />
      </DrawerContentScrollView>
      <View>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            gap: 15,
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal: 10,
            paddingVertical: 10,
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              transform: [{rotate: '180deg'}],
            }}>
            <Feather name="log-out" color="#3D3D3D" size={20} />
          </Text>
          <Text
            style={{
              color: '#3D3D3D',
              fontFamily: GStyles.Poppins,
              fontSize: 16,
              fontWeight: '400',
              letterSpacing: 0.8,
            }}>
            Log Out
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
export default CustomDrawer;
