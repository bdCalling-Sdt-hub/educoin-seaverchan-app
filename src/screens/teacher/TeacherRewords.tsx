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

import { useSharedValue } from 'react-native-reanimated';
import { useGetRewordsQuery } from '../../redux/apiSlices/teacher/teacherRewords';
import { useContextApi } from '../../context/ContextApi';
import { imageUrl } from '../../redux/api/baseApi';
import { ActionSheet } from 'react-native-ui-lib';
import { FontSize } from '../../utils/utils';
import { IReword } from '../../redux/interface/interface';
import { RefreshControl } from 'react-native-gesture-handler';

const TeacherRewords = ({navigation}: NavigProps<null>) => {
  const {user} = useContextApi();
  const {data : rewords, isLoading : rewordLoading, refetch : rewordRefetch} = useGetRewordsQuery(user.token)
  // console.log(rewords);
  const [selectItem,setSelectItem] = React.useState<IReword | null>()
  const [isEarned, setIsEarned] = React.useState(false);
  const [modalVisible, setModalVisible] = React.useState(false);
  const [isActionOpen, setIsActions] = React.useState(false);

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

     refreshControl={<RefreshControl  refreshing={rewordLoading}
     onRefresh={rewordRefetch} colors={[GStyles?.primaryPurple]} />}

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
            // editRoute={"TeacherEditRewords"}
            // routeData={item?.item}
            editOption={true}
            // achieved
            optionOnPress={()=>{
              setSelectItem(item?.item)
              setIsActions(true)
            }}
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
          onPress={() => {
           
            navigation?.navigate('TeacherCreateRewords')
          } 
        }
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

   


   <ActionSheet
        visible={isActionOpen}
        onDismiss={() => {
          setIsActions(false);
        }}
        // title={'Task options'}
        // message={'Message goes here'}
        // cancelButtonIndex={3}
        destructiveButtonIndex={0}
        optionsStyle={{}}
        showCancelButton
        dialogStyle={{
          borderTopRightRadius: 10,
          borderTopStartRadius: 10,
        }}
        containerStyle={{
          paddingBottom: 20,
          paddingTop: 15,
        }}
        options={[
          {
            label: 'Edit',
            onPress: () => {

              navigation?.navigate('TeacherEditRewords',{data : selectItem})
            },
          },
          {
            label: 'Re-assign',
            onPress: () => {
              navigation?.navigate('TeacherRewordsAssign',{data : selectItem})
            },
          },
        ]}
        renderAction={(option, index: number, onOptionPress) => {
          return (
            <View key={index}>
              <TouchableOpacity
                onPress={() => onOptionPress(index)}
                style={{
                  paddingHorizontal: '4%',
                  paddingVertical: 10,

                  borderRadius: 8,
                  justifyContent: 'center',
                  // alignItems : "center",
                }}>
                <Text
                  style={{
                    fontSize: FontSize(14),
                    color:
                      option?.label === 'Deleted'
                        ? 'rgba(255,20,20,.7)'
                        : 'gray',
                    fontFamily: GStyles.Poppins,
                  }}>
                  {option?.label}
                </Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />

    </View>
  );
};

export default TeacherRewords;

const styles = StyleSheet.create({});
