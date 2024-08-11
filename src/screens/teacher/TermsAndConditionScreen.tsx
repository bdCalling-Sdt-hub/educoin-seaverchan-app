import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import HeaderBackground from '../../components/common/headerBackground/HeaderBackground';
import {GStyles, WIDTH} from '../../styles/GStyles';
import {NavigProps} from '../../interfaces/NavigationPros';
import { useGetTermsAndConditionsQuery } from '../../redux/apiSlices/setings/setingsSlices';
import { useContextApi } from '../../context/ContextApi';
import RenderHtml from 'react-native-render-html';
const TermsAndConditionScreen = ({navigation}: NavigProps<null>) => {
  const {user} = useContextApi()
  const {data} = useGetTermsAndConditionsQuery(user.token)
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
        title="Terms & Conditions"
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
        <RenderHtml contentWidth={WIDTH} source={source} />
      </ScrollView>
    </View>
  );
};

export default TermsAndConditionScreen;

const styles = StyleSheet.create({});
