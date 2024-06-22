import {
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

const TeacherRewords = ({navigation}: NavigProps) => {
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

      <ScrollView
        contentContainerStyle={{
          paddingBottom: 80,
          paddingTop: 15,
        }}
        showsVerticalScrollIndicator={false}>
        {[...Array(10)].map((item, index) => (
          <Fragment key={index}>
            <RewordsCard
              navigation={navigation}
              route="TeacherEditRewords"
              // routeData={'demo'}
              editOption={true}
              // achieved
              title="Playing outside with dad"
              img="https://s3-alpha-sig.figma.com/img/2e1f/4337/9d26722aa7a8aec491c98ad18a957a69?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mEyxuNlq2BjRWUoh1ura~rwrvOx7IMDzwmvqHTfINpJsU5Bp5yFs9oxhzqsd164PqMovGyQre4Lmb5K-rpFHzgPt1d3SOydMj7tkxOhUm5~gWIT7nG1aFZaVMn3-UNl6AiUtnG8opY40XSgigPgWr6QDD3i3acdOrgpjjL7JgjgIaI1cwu3XKI3GoczUnMlKfjXS2ID0a0q1yCrkaNNwtmtMJtYGBKNCXrGbNTM9Dke6lPyVwYhAKeAJhhHuGy5cPr9pv5GAqpYwQmL9xXp85o7VR-~2m0K1F2MVQ-jF6A6TsB7TZTuD3qvbvnHUpLbI0YtMMwl~7DHFX6mGzaAt-w__"
            />
          </Fragment>
        ))}
      </ScrollView>
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
          onPress={() => navigation.navigate('TeacherCreateRewords')}
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
