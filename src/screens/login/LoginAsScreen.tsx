import {
  Dimensions,
  Image,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {GStyles} from '../../styles/GStyles';
import LinearGradient from 'react-native-linear-gradient';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import { FontSize } from '../../utils/utils';

const AsLoginData = [
  {
    id: 3,
    name: 'Student Login',
    route: 'ChildLogin',
    style: {
      algin: 'left',
      bgColor: '#FF8811',
      gradientColor: {
        start: 'rgba(230, 122, 15, 0.01)',
        end: 'rgba(246, 126, 6, 1)',
      },
    },
    image: require('../../assets/images/loginAs/student.png'),
  },
  {
    id: 1,
    name: 'Teacher Login',
    route: 'TeacherLogin',
    image: require('../../assets/images/loginAs/teacher.png'),
    style: {
      algin: 'right',
      bgColor: '#9556D7',
      gradientColor: {
        start: 'rgba(182, 9, 243, 0.01)',
        end: 'rgba(165, 95, 239, 1)',
      },
    },
  },
  // {
  //   id: 2,
  //   name: 'Login as a Admin',
  //   route: 'AdminLogin',
  //   style: {
  //     algin: 'left',
  //     bgColor: '#3AAFFF',
  //     gradientColor: {
  //       start: 'rgba(58, 175, 255, .01)',
  //       end: 'rgba(26, 162, 255, 1)',
  //     },
  //   },
  //   image: require('../../assets/images/loginAs/admin.png'),
  // },
];

interface LoginAsProps {
  navigation: NavigationProp<ParamListBase>;
}

const {scale,fontScale,height,width} = Dimensions.get('window');


const LoginAsScreen = ({navigation}: LoginAsProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.bgImage}>
        {/* title on login as  */}
        <View style={styles.loginAsContainer}>
          <Image
          resizeMode='center'
          style={{
            height:  height * .42,
            width:  width * .9,
            marginRight :  width * .05
          }}
            source={require('../../assets/images/loginAs/normalQuokka.png')}
          />
        </View>
        {/* card container  */}
        <View style={styles.cardContainer}>
          {AsLoginData.map((data, index) => (
            <TouchableOpacity
              onPress={() => navigation.navigate(data.route)}
              style={[styles.card, {backgroundColor: data.style.bgColor}]}
              key={index}>
              <View
                style={[
                  styles.cardContentContainer,
                  {
                    flexDirection:
                      data.style.algin === 'right' ? 'row-reverse' : 'row',
                  },
                ]}>
                <View
                  style={{
                    backgroundColor: 'white',
                    borderRadius: 100,
                    width: "21%",
                    height: "100%",
                    overflow: 'hidden',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image style={styles.cardImage} source={data.image} />
                </View>
                <Text adjustsFontSizeToFit style={styles.cardTitle}>{data.name}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <StatusBar backgroundColor={'white'} barStyle="dark-content" />
    </View>
  );
};

export default LoginAsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  bgImage: {
    width: '100%',
    height: '100%',
  },
  loginAsContainer: {
    paddingVertical: '20%',
    alignItems: 'center',
    justifyContent : "center",
    width : width
    // gap: 20,
  },

  cardContainer: {
    alignItems: 'center',
    gap: 24,
    // height: 74,
    width : width
  },
  card: {
    width: '85%',
    height: 84,
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
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardImage: {
    width: 58,
    height: 58,
  },
  cardTitle: {
    fontFamily: GStyles.PoppinsBold,
    fontSize: FontSize(25),
    // fontWeight: 'bold',
    flex : 1,
    // width : "100%",

    color: GStyles.white,
    textAlign: 'center',
    paddingHorizontal: 10,
    letterSpacing: 0.8,
  },
});
