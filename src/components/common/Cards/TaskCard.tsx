import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {GStyles} from '../../../styles/GStyles';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

interface TaskCardProps {
  title?: string;
  category?: string;
  description?: string;
  points?: string;
  date?: string;
  time?: string;
  completed?: boolean;
  onPress?: () => void;
  isButton?: boolean;
  onPressOption?: () => void;
  approveOnPress?: () => void;
  optionList?: OptionList[];
  buttonText?: string;
  optionContainerHight?: number;
  approveBTColor?: string;
  approveDisabled?: boolean;
  button?: boolean;
  imageUrl ?: string;
  completedTextColor ?: string;
  imgAssets ?: any;
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
  approveOnPress,
  approveBTColor,
  approveDisabled,
  button,
  imageUrl,
  title,
  category,
  description,
  points,
  completedTextColor,
  imgAssets
}: TaskCardProps) => {
  const [open, setOpen] = React.useState(false);
  useEffect(() => {
    return () => setOpen(false);
  }, []);
  return (
    <Pressable
      onPress={onPress}
      onPressIn={() => {
        setOpen(false);
      }}
      style={{
        padding: 12,
        borderWidth: 1,
        borderColor: '#ECECEC',
        borderRadius: 8,
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

        zIndex: 0,
        // elevation : 1
      }}>
      <View
        style={{
          flexDirection: 'row',
          gap: 14,
          // alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            width: 56,
            height: 56,
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: GStyles.primaryBlue,
            borderRadius: 100,
          }}>
            {
              imgAssets ? <Image
              source={imgAssets}
              style={{
                width: 46,
                height: 46,
                borderRadius: 100,
              }}
            /> : <Image
            source={{
              uri: imageUrl ? imageUrl : 'https://s3-alpha-sig.figma.com/img/5ed6/a25e/30d0b09b0411b981dafc20d45811f98b?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K~gmlW1G6g5XRSx36O1Frt5zyupXRqxCUz4lJFTg1sC92Wij9xKlXrGfrqjpOszO74yM-8qMQVXvtj03PtQpYwwm29OkuZdsGHhNTq97CPSjQab8IPyIvpSJIfcD814JsuPBE8Y7p~dJaR7ntiFamBpNKLxuJ3f36DYf8-wmZP8iv4vtHfm55Q26s3gjKT~2NEL7ss8iSDL282wxCC7woBNemG9gjMmA7Qxa96-PvXQRsGTKqX9aMDBJ7AI2qKYpmvjP9w4d1pM7IR7JtEdhFAf3jcnptld-3EYZGrcr9ITpjbBGb0GZKguL11wwH07SxkzyB5if8wZt44qA3Ee5tA__',
            }}
            style={{
              width: 46,
              height: 46,
              borderRadius: 100,
            }}
          />
            }
         
        </View>
        <View
          style={{
            // gap: 5,
          }}>
            {
              category &&    <Text
              style={{
                fontSize: 12,
                fontFamily: GStyles.Poppins,
                color: GStyles.primaryPurple,
              }}>
              {category ? category : "Empty category"}
            </Text>
            }
       
          <Text
            style={{
              fontSize: 16,
              fontFamily: GStyles.PoppinsMedium,
              color: '#3D3D3D',
            }}>
           {title ? title : "Empty Title"}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 5,
            }}>
            <Text>Points:</Text>
            <Text>{points ? points : "Empty point"}</Text>
            <AntDesign name="star" color={GStyles.primaryYellow} />
          </View>
          {date ||
            (time && (
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: GStyles.Poppins,
                  color: GStyles.primaryBlue,
                  marginTop: 8,
                  marginBottom: -2,
                }}>
                Anytime
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
                  color: completedTextColor ? completedTextColor : GStyles.primaryBlue,
                  fontSize: 14,
                  fontFamily: GStyles.Poppins,
                }}>
                Completed
              </Text>
            </View>
          ) : isButton ? (
            <TouchableOpacity
              disabled={approveDisabled}
              onPress={approveOnPress}
              style={{
                backgroundColor: approveBTColor
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
              }}>
              <TouchableOpacity
                onPress={() => {
                  setOpen(!open);
                }}
                style={{
                  paddingHorizontal: 10,
                }}>
                <Entypo name="dots-three-vertical" size={20} />
              </TouchableOpacity>
              {open && (
                <View
                  style={{
                    position: 'absolute',
                    top: 25,
                    right: 10,
                    backgroundColor: GStyles.white,
                    height: optionContainerHight ? optionContainerHight : 68,
                    width: 85,
                    borderRadius: 6,
                    borderColor: GStyles.borderColor['#ECECEC'],
                    borderWidth: 1,
                    shadowColor: GStyles.gray.dark,
                    shadowOffset: {width: 1, height: 2},
                    shadowRadius: 4,
                    shadowOpacity: 1,
                    zIndex: 9999,
                    gap: 2,
                    justifyContent: 'center',
                    alignItems: 'center',
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
                      }}>
                      <Text>{item.title}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              )}
            </View>
          )}
        </>
      )}
    </Pressable>
  );
};

export default TaskCard;

const styles = StyleSheet.create({});
