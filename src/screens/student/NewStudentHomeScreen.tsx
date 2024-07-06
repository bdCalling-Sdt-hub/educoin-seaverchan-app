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
import React from 'react';
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

const NewStudentHomeScreen = ({navigation}: HomeNavigProps<null>) => {
  const [isCompeted, setIsCompeted] = React.useState('Task');
  const [modalVisible, setModalVisible] = React.useState(false);
  const [yesNoModal, setYesNoModal] = React.useState(false);

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
        userDetails={{
          image:
            'https://s3-alpha-sig.figma.com/img/7e25/5623/4294ee5c7b1b9f58586be6b07d5af09b?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qoYP6qbNyHMaDp7G~F0LsLi4D0Zb2zJK9~MoCQh-nBo13nilsaprRhhB~jZ3NESLlm45D6~LJzohohDlrx1PyVFJhC1c6SYzNiZemEYD9S5WofLU-5StHzQuuoU6dPwZJHLeX9AX9EdHNV-u3xX9jlMTspEKEb2cXbH0QH54QsEbsKi0ILq7RQvW~PBB251NBenJtxcsXGiDmjHaRyEcKjS8L56erB11TsgtmpBgpeQvRnY5rrLgBzX1H-hD769AETCEgNj7T9ZbUwJq1-YuI9j13kTEuTtjv9cuwWlkaOLGYSnJTxfrjoMU36e3zvQDAi6O~Gm00Uiwa0J7HtQAlQ__',
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
        op1="Task"
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
                  removePress={() => {
                    setYesNoModal(!yesNoModal);
                  }}
                  removeBtn
                  iconOrTextColor={GStyles.primaryOrange}
                  imgAssets={require('../../assets/images/rewordCategory/15.png')}
                  marginHorizontal={10}
                  points={10}
                  title='play game'
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
              title="Playing outside with dad"
              img="https://s3-alpha-sig.figma.com/img/2e1f/4337/9d26722aa7a8aec491c98ad18a957a69?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TiCi0v2BRlAAn~1nPvl-VpaiwdAUpRXH5ORl-XJmPKTayEuaXm~bQm1Lt7oW21WDmKWQjT99Nb5cd4tTx2orvSLafBwwn55sHyyL1xTNqxh1WFhqF1PoZWdU78zYZkgfaGRGyczqXon5btqHQIiTS0qf7jbFoqf8LcYp~WuBvMbew-3WOSspow2dD4E-hqVWHvtSLaf3XmsoHIBIRDTePh~mHQe3-YvjjscFHAXIMP5S~MtBvwEbwxVrSEHCC8ZcddYi8BnIcJlHOnIz~UfEvFgfs6DhdRwQ0omRrf-f2j1u1Ow-ntUDNTVbEso191iRCNJG1MB8Wz~o-pwrjjhJpw__"
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
              title="Playing outside with dad"
              img="https://s3-alpha-sig.figma.com/img/3e3a/22a0/4816ca9d807840b97b4a80c39cdd400c?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oBQLe1S7gXJpTJTSExd7Zb8PL3dpBBtp8PSxLoLXKgTcL4NkKdElruZsCL5af73Vp5CmC~qVij5-m~N0dAvIejyebFhNLitlAJO92r00Sqm040prQzfzZaS3G1Wc30T3F4zo7kzpoSpcvPQbKFVp8nhnzxZINshRx2WiJwbCXx0I1nlzHuvzOkfgnCaZRh44qD0Wm-fzns8ReVFsXiuPh3YtOlvO436DJBsiF8e-fYNbjbfkyAQlntKHBBM-jx7EAiDOPaDoKVsqYPDMltEMS-04IQk9m7MQE1S2UuALtkuq3zdlmm8mDpZRlU6COsGfEC7QrK5EwrujrMfNHiuCMw__"
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
              title="Playing outside with dad"
              points={90}
              img="https://s3-alpha-sig.figma.com/img/2e1f/4337/9d26722aa7a8aec491c98ad18a957a69?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TiCi0v2BRlAAn~1nPvl-VpaiwdAUpRXH5ORl-XJmPKTayEuaXm~bQm1Lt7oW21WDmKWQjT99Nb5cd4tTx2orvSLafBwwn55sHyyL1xTNqxh1WFhqF1PoZWdU78zYZkgfaGRGyczqXon5btqHQIiTS0qf7jbFoqf8LcYp~WuBvMbew-3WOSspow2dD4E-hqVWHvtSLaf3XmsoHIBIRDTePh~mHQe3-YvjjscFHAXIMP5S~MtBvwEbwxVrSEHCC8ZcddYi8BnIcJlHOnIz~UfEvFgfs6DhdRwQ0omRrf-f2j1u1Ow-ntUDNTVbEso191iRCNJG1MB8Wz~o-pwrjjhJpw__"
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

              title="Playing outside with dad"
              img="https://s3-alpha-sig.figma.com/img/2e1f/4337/9d26722aa7a8aec491c98ad18a957a69?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TiCi0v2BRlAAn~1nPvl-VpaiwdAUpRXH5ORl-XJmPKTayEuaXm~bQm1Lt7oW21WDmKWQjT99Nb5cd4tTx2orvSLafBwwn55sHyyL1xTNqxh1WFhqF1PoZWdU78zYZkgfaGRGyczqXon5btqHQIiTS0qf7jbFoqf8LcYp~WuBvMbew-3WOSspow2dD4E-hqVWHvtSLaf3XmsoHIBIRDTePh~mHQe3-YvjjscFHAXIMP5S~MtBvwEbwxVrSEHCC8ZcddYi8BnIcJlHOnIz~UfEvFgfs6DhdRwQ0omRrf-f2j1u1Ow-ntUDNTVbEso191iRCNJG1MB8Wz~o-pwrjjhJpw__"
              disabled
              claimBtn
            />
          </View>
        ) : (
          <View>
            <View
              style={{
                marginBottom: 25,
              }}>
              {[...Array(10)].map((_, index) => (
                <TaskCard
                  approveBTColor={GStyles.primaryOrange}
                  completedTextColor={GStyles.primaryOrange}
                  isButton
                  button
                  buttonText="Approved"
                  imageUrl="https://s3-alpha-sig.figma.com/img/f3cd/d3da/ea5781defc325eb8f2fdcbd118ec50c1?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ITHLb4tfHnER3RnFnToFhbJ4Rs7dV8XHzKWdoFom4yKb9AT3UFDVajL7tRVtnjHGCd51e3cFo1vQ74EQ7CzpQn0tEL-mdoXFfLgqX34lnNqJIuz0Bd-9LCCXkKBgZSEFT3RAoZO1aRUoylUy66YjkM1jh2qAG~VJM~TwvhoLIja-C3Z9DprFl~WIrg09bPD1Sve~FHdfQ8RKZDLsNlq1sRPQDMbZv2kL1DZ74~61kQkCmnWFwb5hN-iDzSkEe1BDERwobnGaham2U-nv0oMXKkeojiSICFZqIrijYnmelZ2ov6NJKDv8jL0XXRMde~MWrOEbBuzenl1UKtya989dMg__"
                  category="Home Errands"
                  // completed
                  // description=''
                  title="Make Your Bed"
                  points="50"
                  time="Anytime"
                  approveOnPress={() => {
                    setModalVisible(true);
                  }}
                  key={index}
                />
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
    </View>
  );
};

export default NewStudentHomeScreen;

const styles = StyleSheet.create({});
