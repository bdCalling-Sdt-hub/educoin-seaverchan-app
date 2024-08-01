import {
  Button,
  FlatList,
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
import React, {Fragment, useState} from 'react';
import {GStyles} from '../../styles/GStyles';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import SmallSubHeaderCard from '../../components/common/Cards/SmallSubHeaderCard';
import StudentCard from '../../components/common/Cards/StudentCard';
import HeaderOption from '../../components/common/header/HeaderOption';
import CustomModal from '../../components/common/CustomModal/CustomModal';
import HomeTopHeader from '../../components/common/header/HomeTopHeader';
import YesNoModal from '../../components/common/CustomModal/YesNoModal';
import { useSelector } from 'react-redux';



interface AdminHOmeProps {
  navigation: DrawerNavigationProp<ParamListBase>;
}

const TeacherHomeScreen = ({navigation}: AdminHOmeProps) => {
  const [op, setOp] = React.useState<string>('All Students');
  const [modalVisible, setModalVisible] = React.useState(false);
  const [isYes, setIsYes] = React.useState(false);
  const [selectNumber,setSelectNumber] = useState<number>()
  // const token = useSelector((state) => state?.token?.token)
// console.log(token);
  return (
    <Pressable onPress={()=>{
      setSelectNumber()
    }}
      style={{
        height: '100%',
        backgroundColor: GStyles.white,
        position: 'relative',
      }}>
      {/* header part  start */}
     
      <HomeTopHeader
      ringColorOpacity={0.1}
      ringColor={GStyles.purple.normalActive}
      backgroundColor={GStyles.primaryPurple}
      profileStyle='teacher' userDetails={{
        image : "https://s3-alpha-sig.figma.com/img/5d7c/a921/417b9cf730eccf53d85b6166da178018?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RuKcZuiRY1ewKPKRUollcYQmU94ijiou6LpE3y2Ap~vR-7y2esn24kbns7N2sI40kNqa8jc-AhP7sOxtI8-CYwKJT-ZqocsUIxzIpGk-LF3nIOLSUvLi3ziO7XMEAdZR4NX1du7vTi55~ijWaS3WdlshA02O3GyD5Yb~CHIpTr9JKO9kCSzm9bp7F~ptudTRccIwh5vTCSfyV56W2yP~P13I8ZqUI4d6aJCj31q9nQjOZLAQnLad4XrJGbkBKhs4rQv-nVsJrue7Utv3eDZ-6SuSBTy-ZebKBo~fujd6N3tnP6OCuqi83snR0SxOdCWZwUoWBarO4B9~KwayYmmP0w__",
        name: "Maria"
      }} navigation={navigation} drawerNavigation={navigation} notifyRoute='TeacherNotification'
      // containerGap={35}
      />
      {/* header part  end */}

      {/* <SmallSubHeaderCard
        marginTop={10}
        title="Teacher Name"
        count={20}
        subTitle="Students Counts"
      /> */}
       <HeaderOption
            op1="All Students"
            op2="All Classes"
            initialOp="All Students"
            fillButton
            filButtonHight={48}
            marginHorizontal={20}
            gap={30}
            setIsOp={setOp}
            isOp={op}
            borderColor={GStyles.purple.lightHover}
            // borderWidth={0}
            activeBorderColor={GStyles.primaryPurple}
            marginTop={10}
            marginBottom={5}
          />

      <FlatList
        showsVerticalScrollIndicator={false}
        data={[...Array(2)]}
        numColumns={2}
        contentContainerStyle={{
          gap: 10,
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: 10,
          paddingBottom: 50,
        }}
        columnWrapperStyle={{
          gap: 10,
          alignSelf: 'center',
        }}
        ListHeaderComponentStyle={{
          width: '100%',
        }}
        // ListHeaderComponent={item => (
         
        // )}
        renderItem={item => (
          <Fragment key={item.index}>
            {op === 'All Students' ? (
              <StudentCard
                imgBorderColor={GStyles.primaryPurple}
                width={'45%'}
                imgAssets={require("../../assets/images/avatar/1.png")}
                student={{
            
                  class: 1,
                  level: 9,
                  name: 'John Doe',
                  points: 100,
                }}
                onPress={() => {
                  // console.log('lol');
                  navigation.navigate('StudentsProgressAndInfo');
                }}
                key={item.index}
              />
            ) : (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('ParticularClassStudent', {
                    data: {class : item.index + 1},
                  });
                }}
                style={{
                  height: 168,
                  width: '45%',
                  borderWidth: 1,
                  borderColor: GStyles.borderColor['#ECECEC'],
                  borderRadius: 8,
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingVertical: 10,
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: '500',
                    color: GStyles.textColor['#3D3D3D'],

                    textAlign: 'center',
                    fontFamily: GStyles.Poppins,
                  }}>
                  Class : {item.index + 1}
                </Text>
                <View>
                  <Text
                    style={{
                      fontSize: 12,
                      color: GStyles.textColor['#3D3D3D'],
                      textAlign: 'center',
                    }}>
                    2 Students
                  </Text>
                </View>
                <TouchableOpacity onPress={()=>{
                  setSelectNumber(item.index)
             
                }} style={{
               
                  justifyContent: 'center',
                  alignItems: 'center',
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  padding : 10,
                  zIndex: +1,
                }}>
                  <Entypo name="dots-three-vertical" size={24} color={GStyles.primaryPurple} />
                </TouchableOpacity>
               {
                item.index === selectNumber &&  <View style={{
                  position: 'absolute',
                  top: 15,
                  right: 30,
                  padding: 10,
                  zIndex: +1,
                  backgroundColor : "white",
                  elevation : 1,
                  width : 70,
                  borderRadius : 8,
                  gap : 8
                }}>
                 <TouchableOpacity style={{}} onPress={()=>{
                  navigation.navigate('TeacherAddNewClass', {
                  
                  });
                 }}>
                 <Text
                    style={{
                      fontSize: 13,
                      color: GStyles.textColor['#3D3D3D'],
                      textAlign: 'center',
                    }}>
                    edit
                  </Text>
                 </TouchableOpacity>
                 <TouchableOpacity onPress={()=>setIsYes(!isYes)}>
                 <Text
                    style={{
                      fontSize: 13,
                      color: GStyles.textColor['#3D3D3D'],
                      textAlign: 'center',
                    }}>
                    deleted
                  </Text>
                 </TouchableOpacity>
                </View>
               }
              </TouchableOpacity>
            )}
          </Fragment>
        )}
      />
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={{
          width: 68,
          height: 68,
          backgroundColor: GStyles.primaryPurple,
          borderRadius: 100,
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          bottom: 20,
          right: 30,
          zIndex: 9999,
        }}>
        <AntDesign name="plus" color={'white'} size={24} />
      </TouchableOpacity>

      <StatusBar
        backgroundColor={GStyles.primaryPurple}
        barStyle="light-content"
        animated
        showHideTransition="slide"
      />
      <CustomModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        Radius={8}
        height={'33%'}
        width={'80%'}
        backButton>
        <View
          style={{
            gap: 15,
            marginTop: 10,
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontFamily: GStyles.Poppins,
              fontSize: 16,
              fontWeight: '500',
              marginTop: 20,
              color: GStyles.textColor['#3D3D3D'],
            }}>
            What do you want to add?
          </Text>
          <TouchableOpacity
            onPress={() => {
              setModalVisible(false);
              navigation.navigate('TeacherAddNewStudent');
            }}
            style={{
              borderColor: GStyles.primaryPurple,
              borderWidth: 1,
              height: 56,
              borderRadius: 8,
              justifyContent: 'center',
              alignItems: 'center',
              marginHorizontal: 20,
            }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '500',
                color: GStyles.primaryPurple,
                fontFamily: GStyles.Poppins,
              }}>
              Add New Student
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setModalVisible(false);
              navigation.navigate('TeacherAddNewClass');
            }}
            style={{
              borderColor: GStyles.primaryPurple,
              borderWidth: 1,
              height: 56,
              borderRadius: 8,
              justifyContent: 'center',
              alignItems: 'center',
              marginHorizontal: 20,
            }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '500',
                color: GStyles.primaryPurple,
                fontFamily: GStyles.Poppins,
              }}>
              Add New Class
            </Text>
          </TouchableOpacity>
        </View>
      </CustomModal>
      <YesNoModal modalVisible={isYes} setModalVisible={setIsYes} yesPress={()=>{
        setIsYes(false)
      }} />
    </Pressable>
  );
};

export default TeacherHomeScreen;

const styles = StyleSheet.create({});
