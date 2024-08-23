import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  NavigationProp,
  ParamListBase,
  useIsFocused,
} from '@react-navigation/native';
import React, {Fragment} from 'react';
import {
  useGetRewardsQuery,
  useLazyGetRewardsQuery,
} from '../../redux/apiSlices/teacher/teacherRewords';

import {ActionSheet} from 'react-native-ui-lib';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CustomModal from '../../components/common/CustomModal/CustomModal';
import Feather from 'react-native-vector-icons/Feather';
import {FontSize} from '../../utils/utils';
import {GStyles} from '../../styles/GStyles';
import HeaderBackground from '../../components/common/headerBackground/HeaderBackground';
import {IReword} from '../../redux/interface/interface';
import LottieView from 'lottie-react-native';
import {NavigProps} from '../../interfaces/NavigationPros';
import PaginationHook from '../../utils/hooks/PaginationHook';
import {RefreshControl} from 'react-native-gesture-handler';
import RewardsCard from '../../components/common/Cards/RewordsCard';
import {categoryIcons} from '../../utils/ShearData';
import {imageUrl} from '../../redux/api/baseApi';
import {useContextApi} from '../../context/ContextApi';
import {useSharedValue} from 'react-native-reanimated';

const TeacherRewards = ({navigation}: NavigProps<null>) => {
  const isFocused = useIsFocused();
  const [rewardPage, setRewardPage] = React.useState(1);
  const {user} = useContextApi();
 

  const [
    fetchItems,
    {isFetching: rewardFetching, currentData, isLoading: rewardLoading},
  ] = useLazyGetRewardsQuery();
  // console.log(Rewards);
  const [selectItem, setSelectItem] = React.useState<IReword | null>();

  const [isActionOpen, setIsActions] = React.useState(false);

  const [allRewards, setAllRewards] = React.useState<Array<IReword>>([]);

  const [handleLoadMore, loadItems] = PaginationHook(
    fetchItems,
    setAllRewards,
    allRewards,
    setRewardPage,
    rewardPage,
    currentData,
    rewardFetching,
  );

  React.useEffect(() => {
    if (isFocused) {
      setTimeout(() => {
        handleRefetchTask();
      }, 100);
    }
  }, [isFocused]);

  const handleRefetchTask = () => {
    setRewardPage(1);
    fetchItems({token: user.token, rewardPage}).then(res => {
      //  console.log(res);
      setAllRewards(res.data?.data);
    });
  };

  return (
    <View
      style={{
        position: 'relative',
        height: '100%',
        backgroundColor: 'white',
      }}>
      <HeaderBackground
        title="Rewards"
        ringColor={GStyles.purple.normalHover}
        opacity={0.02}
        backgroundColor={GStyles.primaryPurple}
        navigation={navigation}
      />

      <FlatList
        refreshControl={
          <RefreshControl
            refreshing={rewardLoading}
            onRefresh={handleRefetchTask}
            colors={[GStyles?.primaryPurple]}
          />
        }
        onEndReachedThreshold={0.5}
        onEndReached={handleLoadMore}
        contentContainerStyle={{
          paddingBottom: 80,
          paddingTop: 15,
          paddingHorizontal: '5%',
          gap: 5,
        }}

        ListFooterComponent={()=>{
          return rewardFetching? <ActivityIndicator color={GStyles?.primaryPurple} size="large" /> : null;
        }}
        showsVerticalScrollIndicator={false}
        data={allRewards}
        renderItem={item => (
          <Fragment key={item.index}>
            <RewardsCard
              navigation={navigation}
              // editRoute={"TeacherEditRewards"}
              // routeData={item?.item}
              editOption={true}
              // achieved
              optionOnPress={() => {
                setSelectItem(item?.item);
                setIsActions(true);
              }}
              points={item?.item?.requiredPoints}
              title={item?.item?.name}
              imgAssets={{uri: imageUrl + item?.item.image}}
            />
          </Fragment>
        )}
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
            navigation?.navigate('TeacherCreateRewards');
          }}
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
              fontSize: FontSize(16),
              letterSpacing: 0.8,
              marginTop: 5,
            }}>
            Create Rewards
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
              navigation?.navigate('TeacherEditRewards', {data: selectItem});
            },
          },
          {
            label: 'Re-assign',
            onPress: () => {
              navigation?.navigate('TeacherRewardsAssign', {data: selectItem});
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

export default TeacherRewards;

const styles = StyleSheet.create({});
