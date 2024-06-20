import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import HeaderBackground from '../../components/common/headerBackground/HeaderBackground';
import {GStyles} from '../../styles/GStyles';
import {NavigProps} from '../../interfaces/NavigationPros';

const PrivacyAndPolicyScreen = ({navigation}: NavigProps) => {
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
        <Text
          style={{
            fontSize: 16,
            lineHeight: 24,
            color: '#6E6E6F',
            fontFamily: GStyles.Poppins,
            letterSpacing: 0.4,
            textAlign: 'justify',
            marginVertical: 20,
          }}>
          When you use our App, we collect and store your personal information
          which is provided by you from time to time. Our primary goal in doing
          so is to provide you a safe, efficient, smooth and customized
          experience. This allows us to provide services and features that most
          likely meet your needs, and to customize our website to make your
          experience safer and easier. More importantly, while doing so, we
          collect personal information from you that we consider necessary for
          achieving this purpose
        </Text>
        <Text
          style={{
            fontSize: 16,
            lineHeight: 24,
            color: '#6E6E6F',
            fontFamily: GStyles.Poppins,
            letterSpacing: 0.4,
            textAlign: 'justify',
            marginVertical: 20,
          }}>
          Below are some of the ways in which we collect and store your
          information:
        </Text>

        <Text
          style={{
            fontSize: 16,
            lineHeight: 24,
            color: '#6E6E6F',
            fontFamily: GStyles.Poppins,
            letterSpacing: 0.4,
            textAlign: 'justify',
            marginVertical: 20,
          }}>
          We receive and store any information you enter on our website or give
          us in any other way. We use the information that you provide for such
          purposes as responding to your requests, customizing future shopping
          for you, improving our stores, and communicating with you
        </Text>
        <Text
          style={{
            fontSize: 16,
            lineHeight: 24,
            color: '#6E6E6F',
            fontFamily: GStyles.Poppins,
            letterSpacing: 0.4,
            textAlign: 'justify',
            marginVertical: 20,
          }}>
          We also store certain types of information whenever you interact with
          us. For example, like many websites, we use "cookies," and we obtain
          certain types of information when your web browser accesses
          Chaldal.com or advertisements and other content served by or on behalf
          of Chaldal.com on other websites.When signing up via Facebook, we
          collect your Name and Email (provided by Facebook) as part of your
          Chaldal account Information.To help us make e-mails more useful and
          interesting, we often receive a confirmation when you open e-mail from
          Chaldal if your computer supports such capabilities.
        </Text>
        <Text
          style={{
            fontSize: 16,
            lineHeight: 24,
            color: '#6E6E6F',
            fontFamily: GStyles.Poppins,
            letterSpacing: 0.4,
            textAlign: 'justify',
            marginVertical: 20,
          }}>
          Changes To Your Information:
        </Text>
        <Text
          style={{
            fontSize: 16,
            lineHeight: 24,
            color: '#6E6E6F',
            fontFamily: GStyles.Poppins,
            letterSpacing: 0.4,
            textAlign: 'justify',
            marginVertical: 20,
          }}>
          The information you provide us isn’t set in stone. You may review,
          update, correct or delete the personal information in your profile at
          any time.
        </Text>
        <Text
          style={{
            fontSize: 16,
            lineHeight: 24,
            color: '#6E6E6F',
            fontFamily: GStyles.Poppins,
            letterSpacing: 0.4,
            textAlign: 'justify',
            marginVertical: 20,
          }}>
          If you would like us to remove your information from our records,
          please create a request at the Contact Us page. To Delete your
          Facebook login, visit the Contact Us page while logged in via
          Facebook. You should see a "Delete Facebook Login" option to create a
          request to remove Facebook login from your account.
        </Text>
        <Text
          style={{
            fontSize: 16,
            lineHeight: 24,
            color: '#6E6E6F',
            fontFamily: GStyles.Poppins,
            letterSpacing: 0.4,
            textAlign: 'justify',
            marginVertical: 20,
          }}>
          Information about our customers is an important part of our business,
          and we are not in the business of selling it to others.
        </Text>
        <Text
          style={{
            fontSize: 16,
            lineHeight: 24,
            color: '#6E6E6F',
            fontFamily: GStyles.Poppins,
            letterSpacing: 0.4,
            textAlign: 'justify',
            marginVertical: 20,
          }}>
          We release account and other personal information when we believe
          release is appropriate to comply with the law; enforce or apply our
          Terms of Use and other agreements; or protect the rights, property, or
          safety of Chaldal.com, our users, or others. This includes exchanging
          information with other companies and organizations for fraud
          protection.
        </Text>
      </ScrollView>
    </View>
  );
};

export default PrivacyAndPolicyScreen;

const styles = StyleSheet.create({});
