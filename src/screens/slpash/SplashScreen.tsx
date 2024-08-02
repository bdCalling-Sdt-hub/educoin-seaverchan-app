import {
  Image,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {Dispatch, SetStateAction} from 'react';
import LottieView from 'lottie-react-native';
import {GStyles} from '../../styles/GStyles';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import { AppName } from '../../styles/AppDetails';



interface splashProps {
  // setLoad: Dispatch<boolean>;
  navigation: NavigationProp<ParamListBase>;
}

// const SplashScreen = ({setLoad}: splashProps) => {
const SplashScreen = ({navigation}: splashProps) => {
  const [appLoad, setAppLoad] = React.useState(false);

  setTimeout(() => {
    // Storage.getString("token") ? navigation?.navigate( Storage.getString("role") === "teacher" ? "TeacherDrawerRoutes" : Storage.getString("role") === "student" ? "StudentDrawerRoutes" : "LoginAs"  ) : setAppLoad(true);
    // setTimeout(()=>{
    //   navigation.navigate('Login');
    // },2000)
    setAppLoad(true)
  }, 2000);

  return (
    <View style={styles.container}>
      <View style={styles.splashBg}>
        <View style={styles.splashContainer}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: "10%",
              gap : -10
            }}>
            <Text
              style={{
                fontSize: 32,
                fontWeight : '600',
                color: GStyles.primaryPurple,
                fontFamily: GStyles.PoppinsBold,
              }}>
              Welcome to
            </Text>
            <Text
              style={{
                fontSize: 32,

                color: GStyles.primaryPurple,
                fontFamily: GStyles.PoppinsBold,
              }}>
              {AppName}
            </Text>
          </View>
          <Image
            source={require('../../assets/images/splash/quokka.png')}
            style={{
              width: 327,
              height: 327,
            }}
          />
          <LottieView
            source={require('../../assets/lottie/login-animation.json')}
            style={{width: 200, height: 200}}
            autoPlay
            // loop={false}
            onAnimationFinish={() => {
              console.log('Animation end');
              // setAppLoad(true);
            }}
          />
        </View>
        {appLoad && (
          <View
            style={{
              width: '95%',
              alignSelf: 'center',
              position: 'absolute',
              bottom: 30,
              paddingHorizontal: 20,
            }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('LoginAs')}
              style={{
                backgroundColor: GStyles.primaryPurple,
                padding: 15,
                borderRadius: 100,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 16,
                  fontFamily: GStyles.PoppinsMedium,
                  letterSpacing: 0.8,
                }}>
           Get Started
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
      <StatusBar backgroundColor={'white'} />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  splashBg: {
    width: '100%',
    height: '100%',
  },
  splashContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  //   splashBg: {},
  //   splashBg: {},
});
