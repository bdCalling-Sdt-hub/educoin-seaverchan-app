import {
  ActivityIndicator,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import BackButton from '../../components/BackButton';
import {NavigProps} from '../../interfaces/NavigationPros';
import {GStyles} from '../../styles/GStyles';

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
            fontSize: 32,
            fontFamily: GStyles.Poppins,
            color: 'rgb(195,195,195)',
          }}>
          No Internet
        </Text>
        <Text
          style={{
            fontSize: 24,
            fontFamily: GStyles.Poppins,
            //  color: 'rgb(195,195,195)',
          }}>
          Opps!
        </Text>
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
