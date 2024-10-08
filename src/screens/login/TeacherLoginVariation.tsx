import {
  Dimensions,
  Image,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {GStyles, HEIGHT} from '../../styles/GStyles';
import LinearGradient from 'react-native-linear-gradient';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {FontSize, setStorageRole, setStorageToken} from '../../utils/utils';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {AppName} from '../../styles/AppDetails';
import {onGoogleButtonPress} from '../../utils/google';
import {useLoginTeacherMutation} from '../../redux/apiSlices/authSlice';
import { initiateSocket } from '../../redux/services/socket';
import { useContextApi } from '../../context/ContextApi';

const AsLoginData = [
  {
    id: 1,
    name: 'Sign in with Google',
    social: true,
    image: require('../../assets/images/loginAs/teacher.png'),
    icons: <MaterialCommunityIcons name="google" size={25} color={'white'} />,
    style: {
      algin: 'right',
      bgColor: 'rgb(233,75,64)',
      textColor: 'rgb(255,255,255)',
    },
  },
  {
    id: 2,
    name: 'Sign in with Email',
    route: 'TeacherLoginWithEmail',
    icons: (
      <MaterialCommunityIcons
        name="email"
        size={25}
        color={GStyles?.textColor['#3D3D3D']}
      />
    ),
    style: {
      algin: 'left',
      bgColor: 'rgb(255,255,255)',
      textColor: GStyles?.textColor['#3D3D3D'],
    },
    image: require('../../assets/images/loginAs/admin.png'),
  },
];

interface LoginAsProps {
  navigation: NavigationProp<ParamListBase>;
}

const {scale, fontScale, height, width} = Dimensions.get('window');

const TeacherLoginVariation = ({navigation}: LoginAsProps) => {
  const {setUser} = useContextApi()
  const [loginUser, results] = useLoginTeacherMutation();
  return (
    <View style={styles.container}>
      <LinearGradient
        style={{
          height: HEIGHT,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        colors={['#9556D7', 'rgba(255,255,255,1)', '#FF8811']}>
        <View style={styles.bgImage}>
          {/* title on login as  */}
          <View style={styles.loginAsContainer}>
            <Image
              resizeMode="center"
              style={{
                height: "60%",
                width: "90%",
                marginRight: "5%",
                // marginBottom: "5%",
              }}
              source={require('../../assets/images/loginAs/normalQuokka.png')}
            />
            <Text
              style={{
                fontSize: FontSize(32),
                color: GStyles.primaryPurple,
                fontFamily: GStyles.PoppinsBold,
              }}>
              {AppName}
            </Text>
          </View>
          {/* card container  */}
          <View style={styles.cardContainer}>
            {AsLoginData.map((data, index) => (
              <TouchableOpacity
                onPress={() => {
                  if (data.social) {
                    onGoogleButtonPress().then(res => {
                      // console.log(res?.user?.email);
                      loginUser({
                        email: res?.user?.email,
                        name: res?.user?.displayName,
                        profile: res?.user?.photoURL,
                        type: 'social',
                      }).then(orUser=>{
                        // console.log(orUser);
                        if (orUser?.data?.success) {
                          setUser({
                            token: orUser?.data?.data,
                            role: 'teacher',
                          });
                          setStorageRole('teacher');
                          setStorageToken(orUser?.data?.data);
                          // Toast.show({
                            //   text1: 'Login successful!',
                            //   type: 'success',
                            //   visibilityTime: 2000,
                            // });
                            initiateSocket();
                          }
                      })
                    });
                  }
                  data?.route && navigation?.navigate(data?.route);
                }}
                style={[styles.card, {backgroundColor: data.style.bgColor}]}
                key={index}>
                <View style={[styles.cardContentContainer]}>
                  <View
                    style={{
                      paddingHorizontal: 10,
                    }}>
                    {data.icons}
                  </View>
                  <Text
                    style={[
                      styles.cardTitle,
                      {
                        color: data?.style?.textColor,
                      },
                    ]}>
                    {data.name}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </LinearGradient>

      <StatusBar backgroundColor={'white'} barStyle="dark-content" />
    </View>
  );
};

export default TeacherLoginVariation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  bgImage: {
    width: '100%',
    height: '100%',
  },
  loginAsContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: width,
    // gap: 20,
  },

  cardContainer: {
    alignItems: 'center',
    gap: 24,
    // height: 74,
    width: width,
  },
  card: {
    width: '85%',
    height: HEIGHT * 0.068,
    backgroundColor: '#9556D7',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
    position: 'relative',
  },

  cardContentContainer: {
    width: '100%',
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardImage: {
    width: 58,
    height: 58,
  },
  cardTitle: {
    fontFamily: GStyles.PoppinsMedium,
    fontSize: FontSize(20),
    // fontWeight: 'bold',
    // flex : 1,
    // width : "100%",

    textAlign: 'center',
    paddingHorizontal: 10,
    letterSpacing: 0.8,
  },
});
