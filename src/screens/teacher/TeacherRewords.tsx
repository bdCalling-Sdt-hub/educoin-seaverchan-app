import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {Fragment} from 'react';
import HeaderBackground from '../../components/common/headerBackground/HeaderBackground';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import {GStyles} from '../../styles/GStyles';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import CustomModal from '../../components/common/CustomModal/CustomModal';
import LottieView from 'lottie-react-native';
import RewordsCard from '../../components/common/Cards/RewordsCard';
import {NavigProps} from '../../interfaces/NavigationPros';

import { categoryIcons } from '../../utils/ShearData';
import { categories } from './EditCategory';
import { useSharedValue } from 'react-native-reanimated';
import { useGetRewordsQuery } from '../../redux/apiSlices/teacher/teacherRewords';
import { useContextApi } from '../../context/ContextApi';
import { imageUrl } from '../../redux/api/baseApi';

const TeacherRewords = ({navigation}: NavigProps<null>) => {
  const {user} = useContextApi();
  const {data : rewords} = useGetRewordsQuery(user.token)
  console.log(rewords);
  const [isEarned, setIsEarned] = React.useState(false);
  const [modalVisible, setModalVisible] = React.useState(false);

  return (
    <View
      style={{
        position: 'relative',
        height: '100%',
        backgroundColor: 'white',
      }}>
      <HeaderBackground
        title="Rewords"
        ringColor={GStyles.purple.normalHover}
        opacity={0.02}
        backgroundColor={GStyles.primaryPurple}
        navigation={navigation}
      />

      <FlatList
        contentContainerStyle={{
          paddingBottom: 80,
          paddingTop: 15,
          paddingHorizontal: '5%',
          gap : 5
        }}
        showsVerticalScrollIndicator={false}
        data={rewords?.data}

        renderItem={(item)=>
          <Fragment key={item.index}>
          <RewordsCard
            navigation={navigation}
            editRoute={"TeacherEditRewords"}
            routeData={item?.item}
            editOption={true}
            // achieved
            points={item?.item?.requiredPoints}
            title={item?.item?.name}
            imgAssets={{ uri : imageUrl + item?.item.image}}
          />
        </Fragment>

        }
        />
       
    
      <View
        style={{
          paddingHorizontal: '4%',
          alignItems: 'flex-end',
          position: 'absolute',
          bottom: 20,
          right: 0,
          width: '100%',
          justifyContent: 'center',
        }}>
        <TouchableOpacity
          onPress={() => navigation?.navigate('TeacherCreateRewords')}
          style={{
            backgroundColor: GStyles.primaryPurple,
            padding: 10,
            borderRadius: 100,
            marginVertical: 10,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            width: '50%',
          }}>
          <Text
            style={{
              fontWeight: 'bold',
            }}>
            <AntDesign name="plus" size={20} color="white" />
          </Text>
          <Text
            style={{
              color: 'white',
              fontFamily: GStyles.Poppins,
              fontSize: 16,
              letterSpacing: 0.8,
              marginTop: 5,
            }}>
            Create rewords
          </Text>
        </TouchableOpacity>
      </View>

      <CustomModal
        modalVisible={modalVisible}
        backButton
        setModalVisible={setModalVisible}
        height={289}
        Radius={10}>
        <View
          style={{
            padding: 20,
            gap: 20,
            justifyContent: 'center',
            flex: 1,
            alignItems: 'center',
          }}>
          <LottieView
            source={require('../../assets/lottie/goal-completed.json')}
            style={{width: 200, height: 200, marginBottom: -70, marginTop: -50}}
            autoPlay
            loop
          />

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
                width: 100,
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
    </View>
  );
};

export default TeacherRewords;

const styles = StyleSheet.create({});
