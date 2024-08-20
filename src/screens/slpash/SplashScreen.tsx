import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import {GStyles} from '../../styles/GStyles';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {AppName} from '../../styles/AppDetails';
import { useContextApi } from '../../context/ContextApi';

interface SplashProps {
  navigation: NavigationProp<ParamListBase>;
}

const SplashScreen = ({navigation}: SplashProps) => {
  const {user, loading} = useContextApi();

  React.useEffect(() => {
    setTimeout(() => {
      if (!user?.token && !user?.role && !loading) {
        (navigation as any)?.replace('LoginAs');
      } else if (user?.role === "teacher") {
        (navigation as any)?.replace("TeacherDrawerRoutes");
      } else if (user?.role === "student") {
        (navigation as any)?.replace("StudentDrawerRoutes");
      }
    }, 600);
  }, [user, loading, navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.splashBg}>
        <View style={styles.splashContainer}>
          <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: '10%', gap: -10 }}>
            <Text style={styles.welcomeText}>Welcome to</Text>
            <Text style={{
                   fontSize: FontSize(32),
                color: GStyles.primaryPurple,
                fontFamily: GStyles.PoppinsBold,
            }}>{AppName}</Text>
          </View>
          <Image
            source={require('../../assets/images/splash/quokka.png')}
            style={styles.splashImage}
          />
          <LottieView
            source={require('../../assets/lottie/login-animation.json')}
            style={styles.lottieAnimation}
            autoPlay
          />
        </View>
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
  welcomeText: {
       fontSize: FontSize(32),
    fontWeight: '600',
    color: GStyles.primaryPurple,
    fontFamily: GStyles.PoppinsBold,
  },
  appNameText: {
       fontSize: FontSize(32),
    color: GStyles.primaryPurple,
    fontFamily: GStyles.PoppinsBold,
  },
  splashImage: {
    width: 327,
    height: 327,
  },
  lottieAnimation: {
    width: 200,
    height: 200,
  },
});
