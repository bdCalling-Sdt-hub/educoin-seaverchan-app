import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
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

  buttonText?: string;
}

const TaskCard = ({
  onPress,
  completed,
  date,
  time,
  isButton,

  buttonText,
}: TaskCardProps) => {
  return (
    <View
      style={{
        padding: 12,
        borderWidth: 3,
        borderColor: '#ECECEC',
        borderRadius: 8,
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
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
          <Image
            source={{
              uri: 'https://s3-alpha-sig.figma.com/img/5ed6/a25e/30d0b09b0411b981dafc20d45811f98b?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K~gmlW1G6g5XRSx36O1Frt5zyupXRqxCUz4lJFTg1sC92Wij9xKlXrGfrqjpOszO74yM-8qMQVXvtj03PtQpYwwm29OkuZdsGHhNTq97CPSjQab8IPyIvpSJIfcD814JsuPBE8Y7p~dJaR7ntiFamBpNKLxuJ3f36DYf8-wmZP8iv4vtHfm55Q26s3gjKT~2NEL7ss8iSDL282wxCC7woBNemG9gjMmA7Qxa96-PvXQRsGTKqX9aMDBJ7AI2qKYpmvjP9w4d1pM7IR7JtEdhFAf3jcnptld-3EYZGrcr9ITpjbBGb0GZKguL11wwH07SxkzyB5if8wZt44qA3Ee5tA__',
            }}
            style={{
              width: 46,
              height: 46,
              borderRadius: 100,
            }}
          />
        </View>
        <View>
          <Text
            style={{
              fontSize: 12,
              fontFamily: GStyles.Poppins,
              color: GStyles.primaryPurple,
            }}>
            Home Errands
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontFamily: GStyles.PoppinsMedium,
              color: '#3D3D3D',
            }}>
            Make Your Bed
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 10,
            }}>
            <Text>Points:</Text>
            <Text>50</Text>
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
              color: GStyles.primaryBlue,
              fontSize: 14,
              fontFamily: GStyles.Poppins,
            }}>
            Done
          </Text>
        </View>
      ) : isButton ? (
        <TouchableOpacity
          onPress={onPress}
          style={{
            backgroundColor: GStyles.primaryBlue,
            borderRadius: 100,
            width: 100,
            height: 40,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 16,
              fontFamily: GStyles.Poppins,
            }}>
            {buttonText ? buttonText : 'Achieve'}
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={{
            paddingHorizontal: 10,
          }}>
          <Entypo name="dots-three-horizontal" size={20} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default TaskCard;

const styles = StyleSheet.create({});
