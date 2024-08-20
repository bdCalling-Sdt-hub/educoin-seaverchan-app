import {
    Dimensions,
    Image,
    ImageBackground,
    Keyboard,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
  } from 'react-native';
  import React, { useCallback } from 'react';
  import {GStyles, HEIGHT} from '../../styles/GStyles';
  import LinearGradient from 'react-native-linear-gradient';
  import {NavigationProp, ParamListBase} from '@react-navigation/native';
  import { FontSize, setStorageRole, setStorageToken } from '../../utils/utils';
  import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
  import { AppName } from '../../styles/AppDetails';
import NormalButtons from '../../components/common/Buttons/NormalButtons';
import Require from '../../components/common/require/Require';
import { useLoginTeacherMutation } from '../../redux/apiSlices/authSlice';
import PopUpModal, { PopUpModalRef } from '../../components/modals/PopUpModal';
import { useContextApi } from '../../context/ContextApi';
import { NavigProps } from '../../interfaces/NavigationPros';
import { initiateSocket } from '../../redux/services/socket';
  
  

  interface LoginAsProps {
    navigation: NavigationProp<ParamListBase>;
  }
  
  const {scale,fontScale,height,width} = Dimensions.get('window');
  
  // console.log(height);
  const TeacherLoginWithEmail = ({navigation,route}: NavigProps<any>) => {
    // console.log();
    const [loginUser, results] = useLoginTeacherMutation();

    const popRef = React.useRef<PopUpModalRef>()
  
   
    // const  dispatch = useDispatch()
    // console.log(results?.error);
    const {setUser, user} = useContextApi();
  
    const [userInfo, setUserInfo] = React.useState<{email : string, password : string}>({
      email : route?.params?.data?.email ?route?.params?.data?.email :'',
      password : ''
    });


  
    
    // console.log(results?.error);
    
    const handleGoPress = useCallback((UData)=>{
      UData.type = "general"
      if(!UData?.email){
        popRef?.current?.open({
          title: 'Please enter your email',
            buttonText : "Ok"
        })
      }
      if(!UData?.password){
        popRef?.current?.open({
          title: 'Please enter your password',
            buttonText : "Ok"
        })
      }
      if(UData?.email && UData?.password){
        loginUser(UData).then(res=>{
          // console.log(res);
          if (res?.data?.success) {
            setUser({
              token: res?.data?.data,
              role: 'teacher',
            });
            setStorageRole('teacher');
            setStorageToken(res?.data?.data);
            // Toast.show({
              //   text1: 'Login successful!',
              //   type: 'success',
              //   visibilityTime: 2000,
              // });
              initiateSocket();
            }
          }).catch(err => {
            console.log(err);
            popRef.current?.open({title : "Something went wrong, please try again"})
          })
      
      }
      Keyboard.dismiss()
    },[userInfo])
      
  
    return (
      <View style={styles?.container}>
        <ScrollView keyboardShouldPersistTaps="always" showsVerticalScrollIndicator={false} contentContainerStyle={{
            // flex : 1
        }}>
         {/* <LinearGradient
              style={{
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              colors={[
                '#9556D7',
                'rgba(255,255,255,1)',
                '#FF8811',
               
              ]}> */}
               <View style={styles.bgImage}>
          {/* title on login as  */}
          <View style={styles.loginAsContainer}>
          <Image
            resizeMode='center'
            style={{
              height:  height * .22,
              width:  width * .9,
              marginRight : HEIGHT < 800 ? 0 : width * .08,
            //   marginBottom : - height * .015
            }}
              source={require('../../assets/images/loginAs/normalQuokka.png')}
            />
              <Text style={{
                     fontSize: FontSize(32),
                  color: GStyles.primaryPurple,
                  fontFamily: GStyles.PoppinsBold,
              }}>{AppName}</Text>
          </View>
          {/* card container  */}
          <View style={styles.cardContainer}>
          <View style={{
              marginHorizontal : "4%"
          }}>
          <Require title="Email" />
          <TextInput
            style={{
              borderBottomColor:GStyles.borderColor['#ECECEC'],
              borderBottomWidth: 1,
              borderRadius: 2,
              paddingHorizontal: 10,
              fontFamily: GStyles.Poppins,
              paddingVertical: 10,
              color: GStyles.textColor['#3D3D3D'],
            
            }}
            placeholderTextColor={GStyles?.gray?.lightHover}
            onChangeText={text =>
             setUserInfo({...userInfo, email : text})
            }
            value={userInfo?.email}
            placeholder="example.gmail.com"
          />
        </View>
          <View style={{
              marginHorizontal : "4%"
          }}>
          <Require title="Password" />
          <TextInput
            style={{
              borderBottomColor:GStyles.borderColor['#ECECEC'],
              borderBottomWidth: 1,
              borderRadius: 2,
              paddingHorizontal: 10,
              fontFamily: GStyles.Poppins,
              paddingVertical: 10,
              color: GStyles.textColor['#3D3D3D'],
            
            }}
            placeholderTextColor={GStyles?.gray?.lightHover}
            onChangeText={text =>
              setUserInfo({...userInfo, password : text})
             }
             value={userInfo?.password}
            placeholder="password"
            secureTextEntry={true}
          />
        </View>
             
        <NormalButtons title='Sign In' onPress={()=>{
          handleGoPress(userInfo)
        }} />

          </View>
           
  
     
            <View style={{
                marginVertical: 24,
                flexDirection: 'row',
                justifyContent:'center',
            }}>
            <TouchableOpacity onPress={() => navigation?.navigate('SignUp')}>
            <Text style={{
                fontSize: FontSize(14),
                color: GStyles.gray.lightHover,
                fontFamily: GStyles.Poppins,
            }}>
             {/* new accoutn  */}
             Dont't have an account?
                 <Text style={{
                fontSize: FontSize(14),
                color: GStyles.primaryPurple,
                fontFamily:  GStyles.Poppins,
                marginTop: 16,
            }}>{" "} Sign Up!</Text></Text>
            </TouchableOpacity>
           
            </View>
   
        </View>
            {/* </LinearGradient> */}
      
        <StatusBar backgroundColor={'white'} barStyle="dark-content" />
      </ScrollView>
      <PopUpModal ref={popRef}/>
      </View>
    );
  };
  
  export default TeacherLoginWithEmail;
  
  const styles = StyleSheet.create({
    container: {
      // flex: 1,
      height :HEIGHT,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
    },
    bgImage: {
      width: '100%',
      height: '100%',
    },
    loginAsContainer: {
      paddingVertical: HEIGHT < 800 ? '2%' : "20%",
      alignItems: 'center',
      justifyContent : "center",
      width : width
      // gap: 20,
    },
  
    cardContainer: {
    //   alignItems: 'center',
      gap: 24,
      // height: 74,
    //   marginHorizontal : "4%",
      width : width
    },
    card: {
      width: '85%',
      height: HEIGHT * .068,
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
  