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
import HeaderBackground from '../../components/common/headerBackground/HeaderBackground';
import YesNoModal from '../../components/common/CustomModal/YesNoModal';

const StudentsProgressAndInfo = ({navigation}: HomeNavigProps<null>) => {
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

      <HeaderBackground
        title="Student Activity"
        ringColor={GStyles.purple.normalHover}
        opacity={0.02}
        backgroundColor={GStyles.primaryPurple}
        navigation={navigation}
      />

      <View
        style={{
          height: 70,
          backgroundColor: GStyles.primaryOrange,
          borderRadius: 24,
          position: 'relative',

          gap: 30,
          paddingVertical: 5,
          //  elevation : 2
          marginHorizontal: '5%',
          paddingHorizontal: 10,
          marginTop: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 10,
            }}>
            <Image
              style={{
                height: 46,
                width: 46,
                borderRadius: 100,
                //   alignSelf: 'center',
              }}
              source={{
                uri: 'https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg',
              }}
            />

            <View
              style={{
                gap: 5,
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 16,
                  fontWeight: '800',
                  fontFamily: GStyles.Poppins,
                  lineHeight: 22,
                  letterSpacing: 1.4,
                }}>
                Esther Karina
              </Text>
              <View
                style={{
                  backgroundColor: GStyles.gray.light,
                  height: 30,
                  borderRadius: 8,
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingHorizontal: 5,
                  gap: 10,
                  // marginTop : 5
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    gap: 5,
                  }}>
                  <AntDesign
                    name="star"
                    size={15}
                    color={GStyles.primaryOrange}
                  />
                  <Text
                    style={{
                      fontSize: 12,
                      fontFamily: GStyles.PoppinsSemiBold,
                      color: GStyles.primaryOrange,
                    }}>
                    51
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    gap: 5,
                  }}>
                  <AntDesign
                    name="staro"
                    size={15}
                    color={GStyles.primaryOrange}
                  />
                  <Text
                    style={{
                      fontSize: 12,
                      fontFamily: GStyles.PoppinsSemiBold,
                      color: GStyles.primaryOrange,
                    }}>
                    5
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    gap: 5,
                  }}>
                  <AntDesign
                    name="staro"
                    size={15}
                    color={GStyles.gray.lightActive}
                  />
                  <Text
                    style={{
                      fontSize: 12,
                      fontFamily: GStyles.PoppinsSemiBold,
                      color: GStyles.gray.lightActive,
                    }}>
                    1
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 10,
            }}>
            <TouchableOpacity
              onPress={() => {
                // drawerNavigation?.openDrawer()
                navigation?.navigate('StudentPassCodeWithTeacher');
              }}>
              <Feather name="lock" color="white" size={24} />
            </TouchableOpacity>
          </View>
        </View>
        {/* <View>
      <View
        style={{
          backgroundColor: 'white',
          height: 48,
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          borderRadius: 100,
        }}>
        <TextInput
          placeholder="Search here...."
          placeholderTextColor="#858585" style={{
            flex: 1,
            // paddingHorizontal: 10,
          }}
          onChangeText={setSearchValue}
          value={searchValue}
        />
        <Feather name="search" color="#858585" size={24} />
      </View>
    </View> */}
      </View>

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
              {[...Array(4)].map((_, index) => (
                <RewordsCard
                  key={"agun" + index}
                  points={50}
                  removePress={() => {
                    setYesNoModal(!yesNoModal);
                  }}
                  removeBtn
                  title="play game"
                  iconOrTextColor={GStyles.primaryOrange}
                  imgAssets={require('../../assets/images/rewordCategory/15.png')}
                  marginHorizontal={10}
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
              iconOrTextColor={GStyles.orange.normal}
              backGroundColor={'#FFF3E7'}
              backGroundColorProgress={'#FFDAB5'}
              backGroundProgressWidth="20%"
              borderColor={GStyles.borderColor['#ECECEC']}
              points={20}
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
              points={50}
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
              points={50}
              title="Playing outside with dad"
              img="https://s3-alpha-sig.figma.com/img/2e1f/4337/9d26722aa7a8aec491c98ad18a957a69?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TiCi0v2BRlAAn~1nPvl-VpaiwdAUpRXH5ORl-XJmPKTayEuaXm~bQm1Lt7oW21WDmKWQjT99Nb5cd4tTx2orvSLafBwwn55sHyyL1xTNqxh1WFhqF1PoZWdU78zYZkgfaGRGyczqXon5btqHQIiTS0qf7jbFoqf8LcYp~WuBvMbew-3WOSspow2dD4E-hqVWHvtSLaf3XmsoHIBIRDTePh~mHQe3-YvjjscFHAXIMP5S~MtBvwEbwxVrSEHCC8ZcddYi8BnIcJlHOnIz~UfEvFgfs6DhdRwQ0omRrf-f2j1u1Ow-ntUDNTVbEso191iRCNJG1MB8Wz~o-pwrjjhJpw__"
            />
            <RewordsCard
              navigation={navigation}
              // route="EditRewords"
              // routeData={'demo'}
              // editOption={true}
              // achieved
              points={50}
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
              {[...Array(2)].map((_, index) => (
                <TaskCard
                  approveBTColor={GStyles.primaryOrange}
                  completedTextColor={GStyles.primaryOrange}
                  isButton
                  button
                  buttonText="Accept"
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
        backgroundColor={GStyles.primaryPurple}
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
            Accepted Successfully
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

export default StudentsProgressAndInfo;

const styles = StyleSheet.create({});
