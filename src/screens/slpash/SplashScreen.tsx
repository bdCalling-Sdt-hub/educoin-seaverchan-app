import {ImageBackground, StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {Dispatch, SetStateAction} from 'react';
import LottieView from 'lottie-react-native';
import {GStyles} from '../../styles/GStyles';

interface splashProps {
  setLoad: Dispatch<boolean>;
}

const SplashScreen = ({setLoad}: splashProps) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.splashBg}
        source={require('../../assets/images/splashBg.png')}>
        <View style={styles.splashContainer}>
          <LottieView
            source={require('../../assets/lottie/splash-animation-cartoon.json')}
            style={{width: 305, height: 322}}
            autoPlay
            duration={2000}
            speed={-0.1}
            loop={false}
            onAnimationFinish={() => {
              console.log('Animation end');
              setLoad(false);
            }}
          />
          <LottieView
            source={require('../../assets/lottie/splash-loading-animation.json')}
            style={{width: 44, height: 44}}
            autoPlay
            loop
          />
        </View>
      </ImageBackground>
      <StatusBar backgroundColor={GStyles.primaryPurple} />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: GStyles.primaryPurple,
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
