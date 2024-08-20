import {
  ActivityIndicator,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import BackButton from '../../components/BackButton';
import {NavigProps} from '../../interfaces/NavigationPros';
import {GStyles, HEIGHT} from '../../styles/GStyles';
import LottieView from 'lottie-react-native';
import { FontSize } from '../../utils/utils';

const InternetStatusScreen = ({navigation}: NavigProps<null>) => {
  return (
    <View style={styles.container}>
      {/* <BackButton /> */}
      <View
        style={{
          height: '100%',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: 'white',
          padding: 20,
          borderRadius: 10,
          paddingVertical: '20%',
        }}>
        <Text
          style={{
               fontSize: FontSize(32),
            fontFamily: GStyles.Poppins,
            color: 'rgb(195,195,195)',
          }}>
          No Internet
        </Text>
     {/* <View style={{
      justifyContent: 'center',
      alignItems : "center"
     }}>
     <Image style={{
       height : HEIGHT * .5,
       aspectRatio : 1,
      resizeMode : "contain",
      marginRight : "20%",
      // opacity : .5
     }} source={require("../../assets/images/quakka/unhappyQuakka.png")}/>
     </View> */}
        {/* <View style={{
          justifyContent : "center",
          alignItems : "center"
        }}>
        <LottieView
              source={require('../../assets/lottie/login-animation.json')}
              style={{width: 80, height: 80}}
              autoPlay
              // loop={false}
              onAnimationFinish={() => {
                console.log('Animation end');
                // setAppLoad(true);
              }}
            />
            <Text style={{
              color : GStyles?.textColor?.['#929394'],
              fontFamily : GStyles?.Poppins,
              fontSize: FontSize(12),
            }}>Please turn on internet</Text>
        </View> */}
        <View style={{
          justifyContent : "center",
          alignItems : "center"
        }}>
        <LottieView
              source={require('../../assets/lottie/login-animation.json')}
              style={{width: 80, height: 80}}
              autoPlay
              // loop={false}
              onAnimationFinish={() => {
                console.log('Animation end');
                // setAppLoad(true);
              }}
            />
       <Text
          style={{
              fontSize: FontSize(24),
            fontFamily: GStyles.Poppins,
            //  color: 'rgb(195,195,195)',
          }}>
          Opps!
        </Text>
        </View>

        
        
      </View>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
    </View>
  );
};

export default InternetStatusScreen;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
  },
});
