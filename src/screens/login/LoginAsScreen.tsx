import {
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

const AsLoginData = [
  {
    id: 1,
    name: 'Teacher',
    route: 'TeacherLogin',
    image: require('../../assets/images/loginAs/teacher.png'),
    style: {
      algin: 'left',
      bgColor: '#9556D7',
      gradientColor: {
        start: 'rgba(182, 9, 243, 0.01)',
        end: 'rgba(165, 95, 239, 1)',
      },
    },
  },
  {
    id: 2,
    name: 'Admin',
    route: 'AdminLogin',
    style: {
      algin: 'right',
      bgColor: '#3AAFFF',
      gradientColor: {
        start: 'rgba(58, 175, 255, .01)',
        end: 'rgba(26, 162, 255, 1)',
      },
    },
    image: require('../../assets/images/loginAs/admin.png'),
  },
  {
    id: 3,
    name: 'Child',
    route: 'ChildLogin',
    style: {
      algin: 'left',
      bgColor: '#FF8811',
      gradientColor: {
        start: 'rgba(230, 122, 15, 0.01)',
        end: 'rgba(246, 126, 6, 1)',
      },
    },
    image: require('../../assets/images/loginAs/child.png'),
  },
];

interface LoginAsProps {
  navigation: NavigationProp<ParamListBase>;
}

const LoginAsScreen = ({navigation}: LoginAsProps) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.bgImage}
        source={require('../../assets/images/loginBg.png')}>
        {/* title on login as  */}
        <View style={styles.loginAsContainer}>
          <Text style={styles.loginAsText}>Login as a</Text>
        </View>
        {/* card container  */}
        <View style={styles.cardContainer}>
          {AsLoginData.map((data, index) => (
            <TouchableOpacity
              onPress={() => navigation.navigate(data.route)}
              style={[styles.card, {backgroundColor: data.style.bgColor}]}
              key={index}>
              <View
                style={{
                  width: '100%',
                  height: '100%',
                  overflow: 'hidden',
                  justifyContent: 'center',
                  alignItems: 'center',
                  position: 'absolute',
                }}>
                <View
                  style={{
                    position: 'absolute',
                    transform:
                      data.style.algin === 'right'
                        ? [
                            {rotate: '110deg'},
                            {translateX: -40},
                            {translateY: 55},
                          ]
                        : [
                            {rotate: '55deg'},
                            {translateX: -40},
                            {translateY: -55},
                          ],
                  }}>
                  <LinearGradient
                    colors={[
                      data.style.gradientColor.start,
                      data.style.gradientColor.end,
                    ]}
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}
                    style={{
                      height: 48,
                      width: 99,
                      borderRadius: 100,
                    }}
                  />
                </View>
              </View>
              <View
                style={[
                  styles.cardContentContainer,
                  {
                    flexDirection:
                      data.style.algin === 'right' ? 'row-reverse' : 'row',
                  },
                ]}>
                <Image style={styles.cardImage} source={data.image} />
                <Text style={styles.cardTitle}>{data.name}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ImageBackground>
      <StatusBar backgroundColor={GStyles.blue.light} barStyle="dark-content" />
    </View>
  );
};

export default LoginAsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: GStyles.blue.light,
  },
  bgImage: {
    width: '100%',
    height: '100%',
  },
  loginAsContainer: {
    paddingVertical: '15%',
    // gap: 20,
  },
  loginAsText: {
    fontSize: 32,
    fontWeight: '400',
    color: GStyles.primaryPurple,
    lineHeight: 41,
    textAlign: 'center',
    fontFamily: 'SuezOne-Regular',
  },
  cardContainer: {
    alignItems: 'center',
    gap: 50,
  },
  card: {
    width: '85%',
    height: 125,
    backgroundColor: '#9556D7',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
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
    width: 150,
    height: 150,
    position: 'relative',
    bottom: 12,
  },
  cardTitle: {
    fontFamily: GStyles.Poppins,
    fontSize: 32,
    fontWeight: '600',
    lineHeight: 34,
    color: GStyles.white,
    textAlign: 'center',
    paddingHorizontal: 10,
  },
});
