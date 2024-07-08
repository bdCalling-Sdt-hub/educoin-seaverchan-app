import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {GStyles} from '../../styles/GStyles';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import CustomModal from '../../components/common/CustomModal/CustomModal';
import HeaderOption from '../../components/common/header/HeaderOption';
import HomeTopHeader from '../../components/common/header/HomeTopHeader';
import {HomeNavigProps} from '../../interfaces/NavigationPros';
import RewordsCard from '../../components/common/Cards/RewordsCard';
import StudentCard from '../../components/common/Cards/StudentCard';
import TaskCard from '../../components/common/Cards/TaskCard';
import YesNoModal from '../../components/common/CustomModal/YesNoModal';
import LottieView from 'lottie-react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

const NewStudentHomeScreen = ({navigation}: HomeNavigProps<null>) => {
  const [isCompeted, setIsCompeted] = React.useState('Tasks');
  const [modalVisible, setModalVisible] = React.useState(false);
  const [claimModal, setClaimModal] = React.useState(false);
  const [yesNoModal, setYesNoModal] = React.useState(false);
  const [selected, setSelected] = useState([]);
  const bottom = useSharedValue(0)
  
  const animationStyle = useAnimatedStyle(()=>{
    return {
      
        position : "absolute",
        width : 200,
        height : 200,
        zIndex : +1,
        bottom :  bottom.value
    
    }
  })

  useEffect(()=>{
   if(claimModal){
    bottom.value =  withSpring(60)
   }
   else{
    bottom.value = withSpring(0)
   }
  },[claimModal])

  return (
    <View
      style={{
        height: '100%',
        backgroundColor: 'white',
      }}>
      {/* header part  start */}

      <HomeTopHeader
        drawerNavigation={navigation}
        navigation={navigation}
        backgroundColor={GStyles.primaryOrange}
        ringColor={GStyles.orange.normalHover}
        notifyRoute="StudentNotification"
        profileStyle="student"
        imgAssets={require('../../assets/images/avatar/1.png')}
        userDetails={{
          name: 'Rina Karina',
          points: 100,
        }}
        containerGap={30}
      />
      {/* header part  end */}
      <HeaderOption
        isOp={isCompeted}
        setIsOp={setIsCompeted}
        fillButton
        gap={24}
        marginTop={15}
        marginBottom={5}
        marginHorizontal={15}
        op1="Tasks"
        op2="Rewords"
        op3="Earned"
        borderColor={GStyles.orange.lightActive}
        activeBorderColor={GStyles.primaryOrange}
        filButtonHight={48}
      />
      {/* body part start */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          paddingHorizontal: '4%',
          paddingVertical: 20,
        }}>
        {isCompeted === 'Earned' ? (
          <>
            <View
              style={{
                marginBottom: 25,
              }}>
              {[...Array(2)].map((_, index) => (
                <RewordsCard
                  key={index}
                  removePress={() => {
                    setYesNoModal(!yesNoModal);
                  }}
                  removeBtn
                  iconOrTextColor={GStyles.primaryOrange}
                  imgAssets={require('../../assets/icons/icon12.png')}
                  marginHorizontal={10}
                  points={10}
                  title="play music"
                />
              ))}
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                // paddingHorizontal: 10,
                alignItems: 'center',
              }}></View>
          </>
        ) : isCompeted === 'Rewords' ? (
          <View
            style={{
              gap: 10,
            }}>
            <RewordsCard
              navigation={navigation}
              // route="EditRewords"
              // routeData={'demo'}
              // editOption={true}
              // achieved
              iconOrTextColor={GStyles.orange.normal}
              backGroundColor={'#FFF3E7'}
              backGroundColorProgress={'#FFDAB5'}
              backGroundProgressWidth="20%"
              borderColor={GStyles.borderColor['#ECECEC']}
              // onPress={() => setSelected(index)}
              points={140}
              title="Get Iphone ..."
              imgAssets={require('../../assets/icons/icon17.png')}
            />
            <RewordsCard
              navigation={navigation}
              // route="EditRewords"
              // routeData={'demo'}
              // editOption={true}
              // achieved
              iconOrTextColor={GStyles.orange.normal}
              backGroundColor={'#FFF3E7'}
              backGroundColorProgress={'#FFDAB5'}
              backGroundProgressWidth="80%"
              borderColor={GStyles.borderColor['#ECECEC']}
              // onPress={() => setSelected(index)}
              points={60}
              title="Get Bike ..."
              imgAssets={require('../../assets/icons/icon44.png')}
            />
            <RewordsCard
              navigation={navigation}
              // route="EditRewords"
              // routeData={'demo'}
              // editOption={true}
              // achieved
              iconOrTextColor={GStyles.orange.normal}
              backGroundColor={'#FFF3E7'}
              backGroundColorProgress={'#FFDAB5'}
              backGroundProgressWidth="40%"
              borderColor={GStyles.borderColor['#ECECEC']}
              // onPress={() => setSelected(index)}
              title="Get a car ..."
              points={90}
              imgAssets={require('../../assets/icons/icon15.png')}
            />
            <RewordsCard
              navigation={navigation}
              // route="EditRewords"
              // routeData={'demo'}
              // editOption={true}
              // achieved
              points={50}
              iconOrTextColor={GStyles.orange.normal}
              backGroundColor={'#FFF3E7'}
              backGroundColorProgress={'#FFDAB5'}
              backGroundProgressWidth="100%"
              borderColor={GStyles.borderColor['#ECECEC']}
              // onPress={() => setSelected(index)}

              claimPress={() => {
                setClaimModal(true);
              }}
              title="Get a chocolate ..."
              imgAssets={require('../../assets/icons/icon7.png')}
              // disabled
              claimBtn
            />
          </View>
        ) : (
          <View>
            <View
              style={{
                marginBottom: 25,
              }}>
              <TaskCard
                approveBTColor={GStyles.primaryOrange}
                completedTextColor={GStyles.primaryOrange}
                isButton
                button
                // buttonText={"Completed"}

                imgAssets={require('../../assets/icons/icon5.png')}
                category="Home Errands"
                completed
                completedText="Achieved"
                approveDisabled
                // description=''
                title={'Help 2 people'}
                points="50"
                time="Anytime"
                approveOnPress={() => {
                  // setModalVisible(true);
                }}
              />
              {[...Array(2)].map((_, index) => (
                <>
                  <TaskCard
                    key={index}
                    approveBTColor={GStyles.primaryOrange}
                    completedTextColor={GStyles.primaryOrange}
                    isButton
                    button
                    buttonText={
                      selected.includes(index) ? 'Waiting...' : 'Achieve'
                    }
                    imgAssets={require('../../assets/icons/icon33.png')}
                    category="Home Errands"
                    // completed
                    approveDisabled={selected.includes(index)}
                    // description=''
                    title={'Help 5 people'}
                    points="50"
                    time="Anytime"
                    approveOnPress={() => {
                      // setModalVisible(true);
                      setSelected([...selected, index]);
                    }}
                  />
                </>
              ))}
            </View>
          </View>
        )}
      </ScrollView>
      {/* body part end */}

      <StatusBar
        backgroundColor={GStyles.primaryOrange}
        barStyle="light-content"
        animated
        showHideTransition="slide"
      />
      <CustomModal
        modalVisible={modalVisible}
        backButton
        setModalVisible={setModalVisible}
        height={'30%'}
        width={'85%'}
        Radius={10}>
        <View
          style={{
            padding: 20,
            gap: 20,
            justifyContent: 'center',
            flex: 1,
          }}>
          <Text
            style={{
              fontSize: 18,
              fontFamily: GStyles.PoppinsMedium,
              textAlign: 'center',
              color: GStyles.textColor['#3D3D3D'],
              marginTop: 10,
            }}>
            Done Successfully
          </Text>
          <Text
            style={{
              fontFamily: GStyles.Poppins,
              fontSize: 16,
              textAlign: 'center',
            }}>
            You will go to class and show your performance and then the teacher
            will give you a star on your work
          </Text>

          <View>
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={{
                backgroundColor: GStyles.primaryOrange,
                width: '30%',
                paddingVertical: 10,
                paddingHorizontal: 15,
                borderRadius: 100,
                alignSelf: 'center',
              }}>
              <Text
                style={{
                  color: 'white',
                  fontFamily: GStyles.Poppins,
                  textAlign: 'center',
                  fontSize: 16,
                  fontWeight: '400',
                }}>
                OK
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </CustomModal>
      <YesNoModal
        backButton
        modalVisible={yesNoModal}
        setModalVisible={setYesNoModal}
      />

      <CustomModal
        modalVisible={claimModal}
        backButton
        setModalVisible={setClaimModal}
        height={289}
        width={"80%"}
        Radius={10}>
        <View
          style={{
            padding: 20,
            gap: 20,
            justifyContent: 'center',
            flex: 1,
            alignItems: 'center',
            position : "relative"
          }}>
         <Animated.View style={animationStyle}>
         <Image style={{
              position : "absolute",
              width : 200,
              height : 200,
              zIndex : +1,
              
            }} source={require("../../assets/images/quakka/happyQuakka.png")}/>
         </Animated.View>
          {/* <LottieView
            source={require('../../assets/lottie/effect.json')}
            style={{width: 1000, height: "100%"}}
            autoPlay
            loop={false}
            resizeMode='cover'
          /> */}
          <LottieView
            source={require('../../assets/lottie/effect.json')}
            style={{width: 500, height: "100%"}}
            autoPlay
            loop={false}
            resizeMode='cover'
          />

          <View>
            <TouchableOpacity
              onPress={() => setClaimModal(false)}
              style={{
                backgroundColor: GStyles.primaryOrange,
                width: 100,
                paddingVertical: 10,
                paddingHorizontal: 15,
                borderRadius: 100,
                alignSelf: 'center',
                marginBottom: 20,
              }}>
              <Text
                style={{
                  color: 'white',
                  fontFamily: GStyles.Poppins,
                  textAlign: 'center',
                  fontSize: 16,
                  fontWeight: '400',
                }}>
                OK
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </CustomModal>
    </View>
  );
};

export default NewStudentHomeScreen;

const styles = StyleSheet.create({});
