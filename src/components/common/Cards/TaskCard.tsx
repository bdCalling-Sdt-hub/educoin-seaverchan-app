import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {Dispatch, SetStateAction, useEffect} from 'react';
import {GStyles} from '../../../styles/GStyles';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

interface TaskCardProps {
  title?: string;
  category?: string;
  description?: string;
  points?: number;
  date?: string;
  time?: string;
  completed?: boolean;
  onPress?: () => void;
  isButton?: boolean;
  onPressOption?: () => void;
  OnButtonPress?: () => void;
  optionList?: OptionList[];
  buttonText?: string;
  optionContainerHight?: number;
  approveBTColor?: string;
  approveDisabled?: boolean;
  button?: boolean;
  imageUrl?: string;
  completedTextColor?: string;
  imgAssets?: any;
  indexNumber?: number;
  selectIndex?: number;
  completedText?: string;
}

interface OptionList {
  title: string;
  onPress: () => void;
}

const TaskCard = ({
  onPress,
  completed,
  date,
  time,
  isButton,
  onPressOption,
  buttonText,
  optionList,
  optionContainerHight,
  OnButtonPress,
  approveBTColor,
  approveDisabled,
  button,
  imageUrl,
  title,
  category,
  description,
  points,
  completedTextColor,
  completedText,
  imgAssets,
  indexNumber,
  selectIndex,
}: TaskCardProps) => {
  const [open, setOpen] = React.useState(false);

  // console.log(tasks);

  console.log(indexNumber, selectIndex);

  return (
    <View>
      <Pressable
        onPress={onPress}
        onPressIn={() => {
          setOpen(false);
        }}
        style={{
          padding: 12,

          borderRadius: 8,
          marginVertical: 10,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',

          zIndex: -1,
          // elevation : 1
          borderWidth: 1,
          borderColor: '#ECECEC',
        }}>
        <View
          style={{
            flexDirection: 'row',
            gap: 15,
            // alignItems: 'center',
            justifyContent: 'center',
          }}>
          {/* <View
          style={{
            width: 60,
            height: 60,
            justifyContent: 'center',
            alignItems: 'center',
            // borderWidth: 1,
            // borderColor: GStyles.primaryBlue,
            borderRadius: 100,
          }}> */}
          {imgAssets ? (
            <Image
              source={imgAssets}
              style={{
                width: 60,
                height: 60,
                borderRadius: 100,
              }}
            />
          ) : (
            <Image
              source={{
                uri: imageUrl,
              }}
              style={{
                width: 46,
                height: 46,
                borderRadius: 100,
              }}
            />
          )}

          {/* </View> */}
          <View
            style={{
              gap: 2,
            }}>
            {category && (
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: GStyles.Poppins,
                  color: GStyles.primaryPurple,
                }}>
                {category ? category : 'Empty category'}
              </Text>
            )}

            <Text
              style={{
                fontSize: 16,
                fontFamily: GStyles.PoppinsMedium,
                color: '#3D3D3D',
              }}>
              {title ? title : 'Empty Title'}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 5,
              }}>
              <Text
                style={{
                  color: GStyles.textColor['#3D3D3D'],
                  fontFamily: GStyles.Poppins,
                }}>
                Reword :
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: GStyles.Poppins,
                  color: GStyles.textColor['#3D3D3D'],
                }}>
                {points ? points : 'Empty point'}
              </Text>
              <AntDesign name="star" color={GStyles.primaryYellow} />
            </View>
            {date ||
              (time && (
                <Text
                  style={{
                    fontSize: 12,
                    fontFamily: GStyles.Poppins,
                    color: GStyles.primaryBlue,
                    marginTop: 5,
                    marginBottom: 3,
                    // marginBottom: -2,
                  }}>
                  {time}
                </Text>
              ))}
          </View>
        </View>
        {button && (
          <>
            {completed ? (
              <View
                style={{
                  width: 100,
                  height: 40,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    color: completedTextColor
                      ? completedTextColor
                      : GStyles.primaryBlue,
                    fontSize: 14,
                    fontFamily: GStyles.Poppins,
                  }}>
                  {completedText ? completedText : 'Completed'}
                </Text>
              </View>
            ) : isButton ? (
              <TouchableOpacity
                disabled={approveDisabled}
                onPress={OnButtonPress}
                style={{
                  backgroundColor:
                    approveBTColor && approveDisabled
                      ? GStyles.borderColor['#ECECEC']
                      : approveBTColor
                      ? approveBTColor
                      : GStyles.primaryBlue,
                  borderRadius: 100,
                  width: 100,
                  height: 40,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 14,
                    fontFamily: GStyles.Poppins,
                  }}>
                  {buttonText ? buttonText : 'Achieve'}
                </Text>
              </TouchableOpacity>
            ) : (
              <View
                style={{
                  position: 'absolute',
                  top: 15,
                  right: 0,
                  zIndex: -1,
                }}>
                <TouchableOpacity
                  // onPressIn={onPressOption}
                  onPress={onPressOption}
                  style={{
                    paddingHorizontal: 10,
                  }}>
                  <Entypo
                    name="dots-three-vertical"
                    size={20}
                    color={'black'}
                  />
                </TouchableOpacity>
              </View>
            )}
          </>
        )}

        {/* {open && selectIndex === indexNumber && (
          <View
            style={{
              position: 'absolute',
              top: 25,
              right: 10,
              backgroundColor: 'white',
              height: optionContainerHight ? optionContainerHight : 68,
              width: 85,
              borderRadius: 6,
              borderColor: GStyles.borderColor['#ECECEC'],
              borderWidth: 1,
              // shadowColor: GStyles.gray.dark,
              // shadowOffset: {width: 1, height: 2},
              // shadowRadius: 4,
              // shadowOpacity: 1,
              // zIndex: 9999,
              gap: 2,
              justifyContent: 'center',
              alignItems: 'center',
              elevation: 1,
            }}>
            {optionList?.map((item, index) => (
              <TouchableOpacity
                onPress={item.onPress}
                key={index}
                style={{
                  padding: 2,
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingVertical: 4,
                  backgroundColor: GStyles.white,
                  borderRadius: 10,
                  borderColor: GStyles.borderColor['#ECECEC'],
                  // borderWidth: 1,
                  // shadowColor: GStyles.gray.dark,
                  // elevation : 1,
                  width: '100%',
                }}>
                <Text>{item.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )} */}
      </Pressable>
    </View>
  );
};

export default TaskCard;

const styles = StyleSheet.create({});
