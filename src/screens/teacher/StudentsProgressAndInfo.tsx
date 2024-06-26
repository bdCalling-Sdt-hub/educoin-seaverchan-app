import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {Fragment} from 'react';
import HeaderBackground from '../../components/common/headerBackground/HeaderBackground';
import {GStyles} from '../../styles/GStyles';
import {NavigProps} from '../../interfaces/NavigationPros';

import AntDesign from 'react-native-vector-icons/AntDesign';
import HeaderOption from '../../components/common/header/HeaderOption';
import TaskCard from '../../components/common/Cards/TaskCard';
import {PieChart} from 'react-native-chart-kit';
import PieChartWithLabels from '../../utils/PieChart';
const screenWidth = Dimensions.get('window').width;
const StudentsProgressAndInfo = ({navigation}: NavigProps<null>) => {
  const [isOp, setIsOp] = React.useState('Profile');
  const [taskOp, setTaskOp] = React.useState('New Task');

  const data = [
    {
      name: 'Assigned',
      population: 50,
      color: '#FF8811',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Completed',
      population: 50,
      color: '#3AAFFF',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Uncompleted',
      population: 50,
      color: '#A55FEF',
      legendFontColor: '#A55FEF',
      legendFontSize: 15,
    },
  ];
  const chartConfig = {
    backgroundGradientFrom: '#1E2923',
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: '#08130D',
    backgroundGradientToOpacity: 0.5,
    backgroundColor: 'white',
    color: (opacity = 1) => `#A55FEF`,
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };
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
      <HeaderOption
        op1="Profile"
        op2="Tasks"
        op3="Records"
        setIsOp={setIsOp}
        fillButton
        marginBottom={25}
        marginHorizontal={20}
        isOp={isOp}
        borderWidth={0}
        gap={20}
        borderColor={GStyles.purple.lightHover}
        activeBorderColor={GStyles.primaryPurple}
        marginTop={25}
      />

      {isOp === 'Profile' && (
        <Fragment>
          <View
            style={{
              //   borderColor: GStyles.borderColor['#ECECEC'],
              //   borderWidth: 1,
              padding: 15,
              marginVertical: 10,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
              marginHorizontal: '5%',
              marginTop: 15,
              gap: 10,
            }}>
            <View
              style={{
                width: 70,
                height: 70,
                borderRadius: 100,
                borderColor: GStyles.primaryOrange,
                borderWidth: 1,
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 5,
                alignSelf: 'center',
              }}>
              <Image
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 100,
                }}
                source={{
                  uri: 'https://s3-alpha-sig.figma.com/img/2652/6f15/5ad196b4d3c078ebf800d82c4ec359f6?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=An1Bb5hoDgmVyZ2Wtwe~3RLi6Ca2wXdhWhbGJE7QyXHGolr5Rl8OYCwq1usqimBxjV9dPVR~rFYqG5H888vtHvzBHUiii5cSLc0u~325UIpagwwYrRiMWRUi9MvqricdrY5~mWC8jg4wGirH4HJDMUHjRAd8qwOUP7I9CmY~D3P4l9~ERZzOEJSAPQSqlThyOUlEBK9AyN1GEu7LeBP0cSCnYk-F4MxlkyMefEPqV9fQj~jkirqlO0RWE6ZIrQN8QafqXtIbw-DKaDq-iK-JM3ikaW7RYl0aHIc0Y-LmVCeDwJZu~ZkFy6xV7~sd19Q8Pe7LD50QvNW6Qa0rnCKEcg__',
                }}
              />
            </View>
            <View
              style={{
                gap: 4,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontFamily: GStyles.Poppins,
                  fontSize: 16,
                  color: GStyles.textColor['#3D3D3D'],
                  fontWeight: '600',
                  letterSpacing: 0.5,
                }}>
                Aadi T
              </Text>

              <Text
                style={{
                  fontFamily: GStyles.Poppins,
                  fontSize: 12,
                  color: GStyles.textColor['#3D3D3D'],
                  fontWeight: '400',
                  letterSpacing: 0.5,
                }}>
                Class : 01
              </Text>
              <Text
                style={{
                  fontFamily: GStyles.PoppinsSemiBold,
                  fontSize: 20,
                  color: GStyles.primaryOrange,
                  fontWeight: '500',
                  letterSpacing: 0.5,
                }}>
                Level 1
              </Text>

              <View
                style={{
                  flexDirection: 'row',

                  gap: 5,
                }}>
                <Text
                  style={{
                    fontFamily: GStyles.Poppins,
                    fontSize: 12,
                    color: '#797979',
                    fontWeight: '400',
                    letterSpacing: 0.5,
                  }}>
                  45{' '}
                </Text>
                <AntDesign
                  name="star"
                  size={15}
                  color={GStyles.primaryYellow}
                />
              </View>
            </View>
          </View>
          <View
            style={{
              marginTop: 17,
              paddingHorizontal: '8%',
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                backgroundColor: '#FFF3E7',
                height: 65,
                borderRadius: 8,
              }}>
              <View
                style={{
                  backgroundColor: GStyles.primaryOrange,
                  height: 65,
                  width: '40%',
                  borderRadius: 8,
                }}
              />
            </View>
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
                <AntDesign
                  name="star"
                  size={15}
                  color={GStyles.primaryYellow}
                />
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
        </Fragment>
      )}
      {isOp === 'Tasks' && (
        <>
           <HeaderOption
                op1="New Task"
                op2="Completed Task"
                setIsOp={setTaskOp}
                isOp={taskOp}
                activeBorderColor={GStyles.primaryPurple}
                marginHorizontal={20}
                // borderWidth={0}
                // borderColor='white'
              />
          <FlatList
            showsVerticalScrollIndicator={false}
            data={[...Array(10)]}
          
            contentContainerStyle={{
              paddingHorizontal: '4%',

              paddingVertical: 10,
              marginBottom: 20,
            }}
            renderItem={item => (
              <Fragment>
                {taskOp === 'New Task' ? (
                  <TaskCard time="ss" key={item.index} />
                ) : (
                  taskOp === 'Completed Task' && (
                    <TaskCard
                      button
                      isButton
                      key={item.index}
                      time="as"
                      completed
                    />
                  )
                )}
              </Fragment>
            )}
          />
        </>
      )}
      {isOp === 'Records' && (
        <Fragment>
          <View>
            {/* <PieChart
              data={data}
              width={screenWidth}
              height={220}
              chartConfig={chartConfig}
              accessor={'population'}
              avoidFalseZero
              fromNumber={10}
              hidePointsAtIndex={[10, 20, 4]}
              backgroundColor={'transparent'}
              paddingLeft={'15'}
              hasLegend={false}
              center={[(screenWidth / 100) * 20, 0]}
              // absolute
            /> */}
            <PieChartWithLabels />
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {/* <Text
              style={{
                fontSize: 20,
                color: GStyles.primaryOrange,
                fontFamily: GStyles.PoppinsBold,
                fontWeight: '600',
                letterSpacing: 0.5,
              }}>
              Level 1
            </Text>
            <View
              style={{
                flexDirection: 'row',
                gap: 5,
              }}>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: GStyles.Poppins,
                  color: '#797979',
                  fontWeight: '400',
                  letterSpacing: 0.5,
                }}>
                45{' '}
              </Text>
              <AntDesign name="star" size={20} color={GStyles.primaryYellow} />
            </View> */}
            <View
              style={{
                justifyContent: 'center',
                // alignItems: 'center',
                marginTop: 20,
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
        </Fragment>
      )}
    </View>
  );
};

export default StudentsProgressAndInfo;

const styles = StyleSheet.create({});
