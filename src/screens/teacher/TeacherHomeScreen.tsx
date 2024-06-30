import {
  Button,
  FlatList,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {Fragment} from 'react';
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

interface AdminHOmeProps {
  navigation: DrawerNavigationProp<ParamListBase>;
}

const TeacherHomeScreen = ({navigation}: AdminHOmeProps) => {
  const [op, setOp] = React.useState<string>('All Students');
  const [modalVisible, setModalVisible] = React.useState(false);
  return (
    <View
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
        image : "https://s3-alpha-sig.figma.com/img/5d7c/a921/417b9cf730eccf53d85b6166da178018?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WH537GxBxSCyr84yo5Umsi7zGYowKN8w1HSsgZyIgeKZAJkL-NF1vDeywWaV6zkVHyXSlYbOkyTsAxHgjHL18v2cOMVpyNLo1EdYt7T4D3Cmw516taRTKOXBMmWulBCFos~E7~c0cRHLC4O2obTqWjDySrmrTMSkqrN6mZcVgVQbVgeDIMHpsGXUQoa343ddL1IMzQ01LVg6QTin8-U8PSLrKgEnRPNpiUTYd3zyXbmJzTS1jpcyrT2pAEXxPvZ1x9Ip49q~-pWHRJB-so6CBYY3xuQkmPaesrthpDWu2E0xZPrMBQWoISQwO6xuVg~dDHBVBvtYIdqzEnp60Lk0yg__",
        name: "Maria"
      }} navigation={navigation} drawerNavigation={navigation} notifyRoute='TeacherNotification'
      // containerGap={35}
      />
      {/* header part  end */}

      <SmallSubHeaderCard
        marginTop={10}
        title="Teacher Name"
        count={20}
        subTitle="Students Counts"
      />

      <FlatList
        showsVerticalScrollIndicator={false}
        data={[...Array(20)]}
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
        ListHeaderComponent={item => (
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
          />
        )}
        renderItem={item => (
          <Fragment key={item.index}>
            {op === 'All Students' ? (
              <StudentCard
                imgBorderColor={GStyles.primaryPurple}
                width={'45%'}
                student={{
                  image:
                    'https://s3-alpha-sig.figma.com/img/2652/6f15/5ad196b4d3c078ebf800d82c4ec359f6?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=An1Bb5hoDgmVyZ2Wtwe~3RLi6Ca2wXdhWhbGJE7QyXHGolr5Rl8OYCwq1usqimBxjV9dPVR~rFYqG5H888vtHvzBHUiii5cSLc0u~325UIpagwwYrRiMWRUi9MvqricdrY5~mWC8jg4wGirH4HJDMUHjRAd8qwOUP7I9CmY~D3P4l9~ERZzOEJSAPQSqlThyOUlEBK9AyN1GEu7LeBP0cSCnYk-F4MxlkyMefEPqV9fQj~jkirqlO0RWE6ZIrQN8QafqXtIbw-DKaDq-iK-JM3ikaW7RYl0aHIc0Y-LmVCeDwJZu~ZkFy6xV7~sd19Q8Pe7LD50QvNW6Qa0rnCKEcg__',
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
    </View>
  );
};

export default TeacherHomeScreen;

const styles = StyleSheet.create({});
