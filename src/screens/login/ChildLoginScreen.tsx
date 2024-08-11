import {
  Image,
  Keyboard,
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
import BackButton from '../../components/BackButton';
import {GStyles} from '../../styles/GStyles';
import LottieView from 'lottie-react-native';
import {NavigProps} from '../../interfaces/NavigationPros';
import Toast from 'react-native-toast-message';
import { setStorageRole, setStorageToken } from '../../utils/utils';
import { useContextApi } from '../../context/ContextApi';
import { useLoginStudentMutation } from '../../redux/apiSlices/authSlice';
import NormalButtons from '../../components/common/Buttons/NormalButtons';

const ChildLoginScreen = ({navigation}: NavigProps<null>) => {
  const {setUser, user} = useContextApi();
  const [loginUser, results] = useLoginStudentMutation();
  // const  dispatch = useDispatch()
  // console.log(results?.error);

  const [pin, setPin] = React.useState('');
  const textInputRef = React.useRef<TextInput>(null);
  const handlePress = () => {
    if (textInputRef.current) {
      textInputRef.current.focus();
    }
  };
  React.useEffect(() => {
    textInputRef.current?.focus();
  }, []);

  const handlePinChange = (input: string) => {
    // Ensure only numbers are entered and limit to 6 digits
    const filteredInput = input.replace(/[^0-9]/g, '').slice(0, 6);
    setPin(filteredInput);
  };

  // console.log(results?.error);

  const handleGoPress = () => {
    // Handle the action when the "Go" button is pressed
    // console.log(pin);
    if (!pin) {
      Toast.show({
        text1: 'Please enter the passcode !',
        type: 'error',
        // swipeable : true
      });
    }
    if (pin.length < 6) {
      Toast.show({
        text1: 'Passcode must be 6 digit!',
        type: 'error',
        // swipeable : true
      });
    }
    console.log(pin.length);
    if (pin.length < 7) {
      loginUser(pin).then(res => {
        // console.log(res);
        // if (res.error) {
        //   Toast.show({
        //     text1: res?.error?.data?.message,
        //     type: 'info',
        //     // swipeable : true
        //   });
        // }
        if(res.error){
          Toast.show({
            text1: res?.error?.data?.message,
            type: 'error',
            // swipeable : true
          });
        }

        if (res?.data?.success) {
          setUser({
            token: res?.data?.data,
            role: 'student',
          });
          setStorageRole('student');
          setStorageToken(res?.data?.data);
          // Toast.show({
          //   text1: 'Login successful!',
          //   type: 'success',
          //   visibilityTime: 2000,
          // });
        }
      });
      // navigation?.navigate("TeacherDrawerRoutes")
    }
    // navigation?.navigate('TeacherDrawerRoutes');
    Keyboard.dismiss(); // Dismiss the keyboard
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
              <Text style={styles.inputCodeText}>{pin[0] ? pin[0] : ''}</Text>
            </Pressable>
            <Pressable onPress={() => handlePress()} style={styles.codeInput}>
              <Text style={styles.inputCodeText}>{pin[1] ? pin[1] : ''}</Text>
            </Pressable>
            <Pressable onPress={() => handlePress()} style={styles.codeInput}>
              <Text style={styles.inputCodeText}>{pin[2] ? pin[2] : ''}</Text>
            </Pressable>
            <Pressable onPress={() => handlePress()} style={styles.codeInput}>
              <Text style={styles.inputCodeText}>{pin[3] ? pin[3] : ''}</Text>
            </Pressable>
            <Pressable onPress={() => handlePress()} style={styles.codeInput}>
              <Text style={styles.inputCodeText}>{pin[4] ? pin[4] : ''}</Text>
            </Pressable>
            <Pressable onPress={() => handlePress()} style={styles.codeInput}>
              <Text style={styles.inputCodeText}>{pin[5] ? pin[5] : ''}</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.buttonContain} >
        <NormalButtons title='Go' onPress={()=>{
          handleGoPress()
        }} />
        </View>
      </ScrollView>

      <TextInput
        ref={textInputRef}
       keyboardType="numeric"
        style={{
          position: 'absolute',
          top: -500,
        }}
       
        onChangeText={handlePinChange}

        maxLength={6}
    
      />
      <StatusBar backgroundColor="white" barStyle="dark-content" />
    </View>
  );
};

export default ChildLoginScreen;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
  },

  welcomeText: {
    fontSize: 32,
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
    backgroundColor: GStyles.primaryOrange,
    justifyContent: 'center',
    alignItems: 'center',
  },
  enterPassCodeText: {
    fontSize: 18,
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
    borderColor: GStyles.primaryOrange,
    width: 47,
    height: 47,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputCodeText: {
    fontSize: 25,
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
    backgroundColor: GStyles.primaryOrange,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  buttonText: {
    fontSize: 16,
    fontFamily: GStyles.PoppinsSemiBold,
    fontWeight: '400',
    lineHeight: 18,
    color: 'white',
    textAlign: 'center',
  },
});
