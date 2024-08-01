import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { Fragment, useEffect, useState } from 'react';
import HeaderBackground from '../../components/common/headerBackground/HeaderBackground';
import {GStyles} from '../../styles/GStyles';
import {NavigProps} from '../../interfaces/NavigationPros';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import HeaderOption from '../../components/common/header/HeaderOption';
import StudentMiniCard from '../../components/common/Cards/StudentMiniCard';
import {Dropdown} from 'react-native-element-dropdown';
import PieChartWithLabels from '../../utils/PieChart';
import Animated, { Easing, ReduceMotion, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';
import { PieChart } from 'react-native-gifted-charts';

const TeacherForStProgress = ({navigation}: NavigProps<null>) => {

  const [data, setData] = useState([
    { value: 10, color: '#42A5F5', text: '10%' },
    { value: 70, color: '#AB47BC', text: '70%' },
  ]);
  const [isOp, setIsOp] = React.useState('Profile');
  const [value, setValue] = React.useState<string>();
  const [isFocus, setIsFocus] = React.useState(false);
  const [select, setSelect] = React.useState<number | null>(null);
  const completedTask = useSharedValue(0);
  const uncompletedTask = useSharedValue(0);
  const animationOpacity = useSharedValue(0);

   const progressBar = useSharedValue("0%")
  

   useEffect(()=>{
    progressBar.value =  withSpring("50%");

    completedTask.value = withSpring(50);
    uncompletedTask.value = withSpring(50);


    // setData([
    //   { value: 50, color:'#42A5F5', text: "50%" },
    //   { value: 50, color: '#AB47BC', text: "50%" },
    // ])

    
   
    animationOpacity.value = withSpring(1);
    return () =>{
      progressBar.value =  "1%";
      animationOpacity.value = 0;
  
    }
   },[value])

  return (
    <View
      style={{
        height: '100%',
        backgroundColor: 'white',
      }}>
      <HeaderBackground
        title="Progress"
        ringColor={GStyles.purple.normalHover}
        opacity={0.02}
        backgroundColor={GStyles.primaryPurple}
        navigation={navigation}
      />
    <ScrollView>
    <View
        style={{
          marginTop: 20,
          marginBottom: 20,
          paddingHorizontal: '4%',

          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View style={{}}>
          <Dropdown
            // maxHeight={150}
            style={{
              // flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: 12,
              paddingVertical: 15,
              borderWidth: 1,
              borderColor: '#E2E2E2',
              borderRadius: 10,
              width: '100%',
              gap: 20,
            }}
            iconStyle={{
              marginHorizontal: 10,
            }}
            labelField="label"
            valueField="value"
            value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              setValue(item?.value);
              setIsFocus(false);
            }}
            placeholder="class 1"
            data={[
              {label: 'class 1', value: '1'},
              {label: 'class 2', value: '2'},
              {label: 'class 3', value: '3'},
              {label: 'class 4', value: '4'},
              {label: 'class 5', value: '5'},
              {label: 'class 6', value: '6'},
              {label: 'class 7', value: '7'},
              {label: 'class 8', value: '8'},
              {label: 'class 9', value: '9'},
              {label: 'class 10', value: '10'},
              {label: 'class 11', value: '11'},
              {label: 'class 12', value: '12'},
              {label: 'class 13', value: '13'},
              {label: 'class 14', value: '14'},
              {label: 'class 15', value: '15'},
              {label: 'class 16', value: '16'},
              {label: 'class 17', value: '17'},
            ]}
          />
        </View>

        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 15,
            gap: 15,
            paddingVertical: 10,
          }}
          data={[...Array(10)]}
          renderItem={item => (
            <StudentMiniCard
               student={
               {
                class : 10,
                image : "https://s3-alpha-sig.figma.com/img/e7cf/58d5/ad26a782d01e9b869a2db8abbae39d7c?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=q6AzXTJXCNOceLS10AroQ~uDsNBvY6JxeX9ErdRAD4ludj7cJv40V7~1u9R-tUw-vP3fVm8gcgHOQvVxZo1Gy~ftVuSBvly5WYwaiXdnj2newRV73NesbgsqbQfLkQiGQ-HYpA~mF-4cWK-MOe8zKeixZniFwNYho62VOTB0VSdlhxXKzlKZCTejlps~JI6GybnOFODJOGgljJUCAfg~irQhUQ5TBVDVaOFf1hXV~xALeon256Z6t4dlqt8bl3U7RuuVIP3580kAd~808yyGazIFv2EnotksLua9lw7S2pMZ1UTLKRBx6PyhIg73-0zJZBaZY1HimZav1y0~96tC9Q__",
                level : 4,
                name : "John Doe",
                points : 100,
               }
               }
              borderColor={
                select === item.index
                  ? GStyles.primaryOrange
                  : GStyles.borderColor['#ECECEC']
              }
              onPress={() => {
                setSelect(item.index);
              }}
              key={item.index}
            />
          )}
        />
      </View>
     
      <View
        style={{
          marginTop: 10,
          paddingHorizontal: '8%',
        }}>

          {/* progress bar started */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: '#FFF3E7',
            height: 65,
            borderRadius: 8,
          }}>
          <Animated.View
            style={{
              backgroundColor: GStyles.primaryOrange,
              height: 65,
              width: progressBar,
              borderRadius: 8,
            }}
            />
        </View>
            {/* progress bar ended */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginVertical: 17,
          }}>
          <Text
            style={{
              fontSize: 12,
              color: GStyles.textColor['#3D3D3D'],
              fontFamily: GStyles.Poppins,
              fontWeight: '400',
              letterSpacing: 0.8,
            }}>
            level 1
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              gap: 5,
            }}>
            <Text
              style={{
                fontSize: 12,
                color: '#000000',
                fontFamily: GStyles.Poppins,
                fontWeight: '400',
                letterSpacing: 0.8,
              }}>
              45\200
            </Text>
            <AntDesign name="star" size={15} color={GStyles.primaryYellow} />
          </View>
          <Text
            style={{
              fontSize: 12,
              color: GStyles.textColor['#3D3D3D'],
              fontFamily: GStyles.Poppins,
              fontWeight: '400',
              letterSpacing: 0.8,
            }}>
            level 2
          </Text>
        </View>
      </View>
      

  <View style={{
   
  }}>
   
   <Animated.View style={[styles.container,{opacity : animationOpacity}]}>
      <PieChart
        data={data}
        showText
        textColor="white"
        textSize={16}
        showValuesAsLabels
        // animationDuration={2000}
        textBackgroundColor="black"
        textBackgroundRadius={15}
        donut
        innerRadius={60}
        centerLabelComponent={() => (
          <View style={styles.centerText}>
            <Text style={styles.levelText}>Level 1</Text>
            <Text style={styles.scoreText}>45 ★</Text>
          </View>
        )}
      />
    </Animated.View>
  </View>
  <View
    style={{
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    
    <View
      style={{
        justifyContent: 'center',
        // alignItems: 'center',
        marginTop: 20,
        marginBottom : 30,
        gap: 8,
      }}>
      <View
        style={{
          flexDirection: 'row',
          gap: 10,
          alignItems: 'center',
        }}>
        <View
          style={{
            backgroundColor: GStyles.primaryOrange,
            height: 20,
            width: 20,
            borderRadius: 100,
          }}></View>
        <Text
          style={{
            fontSize: 16,
            color: GStyles.textColor['#3D3D3D'],
            fontFamily: GStyles.Poppins,
            fontWeight: '500',
            letterSpacing: 0.5,
          }}>
          Total Assigned Work: 10
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          gap: 10,
          alignItems: 'center',
        }}>
        <View
          style={{
            backgroundColor: GStyles.primaryBlue,
            height: 20,
            width: 20,
            borderRadius: 100,
          }}></View>
        <Text
          style={{
            fontSize: 16,
            color: GStyles.textColor['#3D3D3D'],
            fontFamily: GStyles.Poppins,
            fontWeight: '500',
            letterSpacing: 0.5,
          }}>
          Total Completed Work: 15
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          gap: 10,
          alignItems: 'center',
        }}>
        <View
          style={{
            backgroundColor: GStyles.primaryPurple,
            height: 20,
            width: 20,
            borderRadius: 100,
          }}></View>
        <Text
          style={{
            fontSize: 16,
            color: GStyles.textColor['#3D3D3D'],
            fontFamily: GStyles.Poppins,
            fontWeight: '500',
            letterSpacing: 0.5,
          }}>
          Total Uncompleted Work: 08
        </Text>
      </View>
    </View>
  </View>


    </ScrollView>

   
    </View>
  );
};

export default TeacherForStProgress;

const styles = StyleSheet.create({
  container: {
    height: 260,
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerText: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  levelText: {
    fontSize: 24,
    color: '#FFA726', // Replace with your GStyles.primaryOrange
    fontFamily: 'Poppins-Bold', // Replace with your GStyles.PoppinsBold
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  scoreText: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular', // Replace with your GStyles.Poppins
    color: '#797979',
    fontWeight: '400',
    letterSpacing: 0.5,
  },
});
