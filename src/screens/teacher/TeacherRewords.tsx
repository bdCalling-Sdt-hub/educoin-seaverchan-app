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

const TeacherRewords = ({navigation}: NavigProps<null>) => {
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
              editRoute="TeacherEditRewords"
              // routeData={'demo'}
              editOption={true}
              // achieved
              title="Playing outside with dad"
              img="https://s3-alpha-sig.figma.com/img/2e1f/4337/9d26722aa7a8aec491c98ad18a957a69?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TiCi0v2BRlAAn~1nPvl-VpaiwdAUpRXH5ORl-XJmPKTayEuaXm~bQm1Lt7oW21WDmKWQjT99Nb5cd4tTx2orvSLafBwwn55sHyyL1xTNqxh1WFhqF1PoZWdU78zYZkgfaGRGyczqXon5btqHQIiTS0qf7jbFoqf8LcYp~WuBvMbew-3WOSspow2dD4E-hqVWHvtSLaf3XmsoHIBIRDTePh~mHQe3-YvjjscFHAXIMP5S~MtBvwEbwxVrSEHCC8ZcddYi8BnIcJlHOnIz~UfEvFgfs6DhdRwQ0omRrf-f2j1u1Ow-ntUDNTVbEso191iRCNJG1MB8Wz~o-pwrjjhJpw__"
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
