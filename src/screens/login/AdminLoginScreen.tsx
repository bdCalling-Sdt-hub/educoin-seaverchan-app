import {
  Image,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

import LottieView from 'lottie-react-native';
import BackButton from '../../components/BackButton';
import {GStyles} from '../../styles/GStyles';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import { FontSize } from '../../utils/utils';

export interface NavigationProps {
  navigation: NavigationProp<ParamListBase>;
}

const AdminLoginScreen = ({navigation}: NavigationProps) => {
  const [code, setCode] = React.useState('');
  const textInputRef = React.useRef<TextInput>(null);
  const handlePress = () => {
    if (textInputRef.current) {
      textInputRef.current.focus();
    }
  };
  return (
    <View style={styles.container}>
      <BackButton />
      <ScrollView>
        <Text style={styles.welcomeText}>Welcome!</Text>
        <View style={styles.animationContainer}>
          <View style={styles.animationCircle}>
            <Image
              source={require('../../assets/images/loginAs/bearFace.png')}
            />
          </View>
          <View>
            <Text style={styles.enterPassCodeText}>
              Please enter the passcode
            </Text>
          </View>
          <View style={styles.inputContainer}>
            <Pressable onPress={() => handlePress()} style={styles.codeInput}>
              <Text style={styles.inputCodeText}>{code[0] ? code[0] : ''}</Text>
            </Pressable>
            <Pressable onPress={() => handlePress()} style={styles.codeInput}>
              <Text style={styles.inputCodeText}>{code[1] ? code[1] : ''}</Text>
            </Pressable>
            <Pressable onPress={() => handlePress()} style={styles.codeInput}>
              <Text style={styles.inputCodeText}>{code[2] ? code[2] : ''}</Text>
            </Pressable>
            <Pressable onPress={() => handlePress()} style={styles.codeInput}>
              <Text style={styles.inputCodeText}>{code[3] ? code[3] : ''}</Text>
            </Pressable>
            <Pressable onPress={() => handlePress()} style={styles.codeInput}>
              <Text style={styles.inputCodeText}>{code[4] ? code[4] : ''}</Text>
            </Pressable>
            <Pressable onPress={() => handlePress()} style={styles.codeInput}>
              <Text style={styles.inputCodeText}>{code[5] ? code[5] : ''}</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.buttonContain}>
          <TouchableOpacity
            onPress={() => navigation.navigate('AdminRoutes')}
            style={styles.button}>
            <Text style={styles.buttonText}>Go</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <TextInput
        ref={textInputRef}
        keyboardType="number-pad"
        style={{
          position: 'absolute',
          top: -500,
        }}
        onChangeText={text => {
          code.split('').length > 6 || setCode(text);
        }}
      />
      <StatusBar backgroundColor="white" barStyle="dark-content" />
    </View>
  );
};

export default AdminLoginScreen;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
  },

  welcomeText: {
       fontSize: FontSize(32),
    fontFamily: GStyles.PoppinsSemiBold,
    fontWeight: '600',
    lineHeight: 48,
    color: '#3D3D3D',
    textAlign: 'center',
    marginVertical: 30,
  },
  animationContainer: {
    width: '100%',
    alignItems: 'center',
    gap: 40,
  },
  animationCircle: {
    width: 186,
    height: 186,
    borderRadius: 100,
    backgroundColor: GStyles.primaryBlue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  enterPassCodeText: {
      fontSize: FontSize(18),
    fontFamily: GStyles.Poppins,
    fontWeight: '400',
    lineHeight: 27,
    color: '#3D3D3D',
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  codeInput: {
    borderWidth: 1,
    borderColor: GStyles.primaryBlue,
    width: 47,
    height: 47,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputCodeText: {
       fontSize: FontSize(25),
    fontFamily: GStyles.Poppins,
    fontWeight: '600',
    lineHeight: 48,
    color: '#3D3D3D',
    textAlign: 'center',
  },
  buttonContain: {
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: '40%',
  },
  button: {
    width: '85%',
    paddingVertical: 15,
    backgroundColor: GStyles.primaryBlue,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  buttonText: {
    fontSize: FontSize(16),
    fontFamily: GStyles.PoppinsSemiBold,
    fontWeight: '400',
    lineHeight: 18,
    color: 'white',
    textAlign: 'center',
  },
});
