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
  import {AppName} from '../../styles/AppDetails';
  import { useContextApi } from '../../context/ContextApi';
import { FontSize } from '../../utils/utils';
  
  interface splashProps {
    // setLoad: Dispatch<boolean>;
    // navigation: NavigationProp<ParamListBase>;
    appLoad ?: boolean;
     setAppLoad : React.Dispatch<React.SetStateAction<boolean>>
  }
  
  // const SplashScreen = ({setLoad}: splashProps) => {
  const GlobalSplash = ({appLoad,setAppLoad}: splashProps) => {
    setTimeout(() => {
        setAppLoad && setAppLoad(false)
    }, 1000);
    return (
      <View style={styles.container}>
        <View style={styles.splashBg}>
          <View style={styles.splashContainer}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: '10%',
                gap: -10,
              }}>
              <Text
                style={{
                     fontSize: FontSize(32),
                  fontWeight: '600',
                  color: GStyles.primaryPurple,
                  fontFamily: GStyles.PoppinsBold,
                }}>
                Welcome to
              </Text>
              <Text
                style={{
                     fontSize: FontSize(32),
  
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
          {/* {appLoad && (
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
                    fontSize: FontSize(16),
                    fontFamily: GStyles.PoppinsMedium,
                    letterSpacing: 0.8,
                  }}>
                  Get Started
                </Text>
              </TouchableOpacity>
            </View>
          )} */}
        </View>
        <StatusBar backgroundColor={'white'} />
      </View>
    );
  };
  
  export default GlobalSplash;
  
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
  