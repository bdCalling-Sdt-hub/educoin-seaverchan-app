import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import HeaderBackground from '../../components/common/headerBackground/HeaderBackground';
import {GStyles, WIDTH} from '../../styles/GStyles';
import {NavigProps} from '../../interfaces/NavigationPros';
import { useGetPrivacyPolicyQuery } from '../../redux/apiSlices/setings/setingsSlices';
import { useContextApi } from '../../context/ContextApi';
import RenderHTML from 'react-native-render-html';

const PrivacyAndPolicyScreen = ({navigation}: NavigProps<null>) => {
  const {user} = useContextApi()
  const {data} = useGetPrivacyPolicyQuery(user.token)
  // console.log(data?.data.content);
  const source = {
    html: data?.data.content || `
  <p style='text-align:center;'>
    Hello World!
  </p>`
  };
  return (
    <View
      style={{
        height: '100%',
        backgroundColor: 'white',
      }}>
      <HeaderBackground
        title="Privacy Policy"
        ringColor={GStyles.purple.normalHover}
        opacity={0.02}
        backgroundColor={GStyles.primaryPurple}
        navigation={navigation}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: '4%',
        }}>
         <RenderHTML contentWidth={WIDTH} source={source} />
      </ScrollView>
    </View>
  );
};

export default PrivacyAndPolicyScreen;

const styles = StyleSheet.create({});
