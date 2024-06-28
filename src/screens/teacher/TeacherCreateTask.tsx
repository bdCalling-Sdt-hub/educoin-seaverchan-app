import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import HeaderBackground from '../../components/common/headerBackground/HeaderBackground';
import {GStyles} from '../../styles/GStyles';

import AntDesign from 'react-native-vector-icons/AntDesign';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {NavigProps} from '../../interfaces/NavigationPros';

const data = [
  {
    title: 'New Task',
    img: 'https://s3-alpha-sig.figma.com/img/1070/f8fd/67dcaf37ebc77ffc315ed4635c4f37c3?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZTZ5W--Szt4n8aPb8OQgNCel4IjH09pO4H9xC50AXwAwZtj50h-WijCvQcWdBinPJEFx2cEyxTIixmsnn0MrRAlPaJHWLNekrF3UiCAxQMDq2bECgD7D3-HjXJgjH7AtWHObPd48jKUxvWb6UTd8fdwRW54aeJxUVhOGinedSihICi5NhRMg1zMCKetCs~H6UTW2q7nVBmOhnceaiZ5xtEnbrlnTLBsdIRbJZum6sWCoNURIl6eeDYggPtwE3b2t-bgkQ9WjueMcyHx2uxu85zRX6XS-OlBSTtsBfgprQsgaK0xjfmWPf2k6iDJKUvc9-7UvqWXw5KbSdaRWAnPtUw__',
  },
  {
    title: 'Brush Your Teeth',
    img: 'https://s3-alpha-sig.figma.com/img/3d19/a410/f868e34619cbf38d48ab19c360f00f8d?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=geRopxiMitJnKTINerTC92ap55rzIehoHt~0U59NMhplyeutx-9tFaSZyhxXncTBhjwnlVVHxXH1PE9Fu5DoBWKMcE4TLTU13mm5MZBTGxZThhBEUA2LI-asZLPpwoD1ST21nIXnq9EMr8CGiqyoKdXYPIPws3GVYq2lI1a9jiSGDdba1NppMp1sgGlsrSSPCQyUsJj5aV7wyLupa8DBRL3lm8~KRmNEhTWwvfE1ibE3MjrVehnm4kjXb9zKg9dPWXRa4MC~xCczvGlbSZNCBqtAZZSivRNvr6A5ByxBBJ9YIqZ5JgeUt0aontrVAHQGLHvBGvbNLotniL~tuVw4oA__',
    rate: '+5',
  },
  {
    title: 'Brush Your Teeth',
    img: 'https://s3-alpha-sig.figma.com/img/3d19/a410/f868e34619cbf38d48ab19c360f00f8d?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=geRopxiMitJnKTINerTC92ap55rzIehoHt~0U59NMhplyeutx-9tFaSZyhxXncTBhjwnlVVHxXH1PE9Fu5DoBWKMcE4TLTU13mm5MZBTGxZThhBEUA2LI-asZLPpwoD1ST21nIXnq9EMr8CGiqyoKdXYPIPws3GVYq2lI1a9jiSGDdba1NppMp1sgGlsrSSPCQyUsJj5aV7wyLupa8DBRL3lm8~KRmNEhTWwvfE1ibE3MjrVehnm4kjXb9zKg9dPWXRa4MC~xCczvGlbSZNCBqtAZZSivRNvr6A5ByxBBJ9YIqZ5JgeUt0aontrVAHQGLHvBGvbNLotniL~tuVw4oA__',
    rate: '+5',
  },
  {
    title: 'Room Organization',
    img: 'https://s3-alpha-sig.figma.com/img/4235/00b8/aead15e90083b8ffeae87ca73d1c3b46?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=P1bmSRTe9U0dccgOvW75cOFPHUUDerm3-u9PRVQHscCz7ALGmMtUs1r6uGGcabqVu9CvaPqs9S37iby-F-cY4ZR4nhjTv~re6-ul4iZ~u3r4iFQ3yw-iftSUbNjhzOugJU26mR7bjSFAjE-GlpqLhAYN80u29xvaoOnSeh-WZT6v4HdSMEHsr~s5oUTKM8H~KZN3TDO-EqhmnwvVTsqdTCol-49i2qgbNhEHgi0ovNBEG1TjIi1wsCjudy-KHQ08z7JWQo7hodY9hFLf7~Q8Hj8WyRtTkomXCWB8KskqU4zhvskVl8pnargc0jqd~tK5AjevxN3SLsIVbSh54IqGNA__',
    rate: '+10',
  },
  {
    title: 'Brush Your Teeth',
    img: 'https://s3-alpha-sig.figma.com/img/2953/119b/c485fbcd56a5252802c5b94a42507946?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Dj1oIHdz4mcJJNxlwWv-3h-E~XiGa0rpknX63CKRww3SaUjFX-86eCLsn4bdSLOThSfhiNXuh5IhS6azLhGp9E5ofUVl5vh8JqslC9YvJ5zjTpT9CEqn5Hr43nJiPk8VckbLx9C33A4Ay2qz7k1tm36a1KqdIRFq-OgLELw~QUMIgD3C1RuBrdDg0ScPKzahaF9~Esn33pDZapOtrxb~l353WmlaJdlDxaB7dzg4s3fY9lBC7xxgeqeC~jJZoaD2S5lxXrnbvL0AUNPPtJxHCfEjdtwEDemZ62IudeIntoH4wupYTb~ZyEJC4hwiJLLiLPQJT3ZkJRTWxUqTSQfqUw__',
    rate: '+5',
  },
  {
    title: 'Brush Your Teeth',
    img: 'https://s3-alpha-sig.figma.com/img/2953/119b/c485fbcd56a5252802c5b94a42507946?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Dj1oIHdz4mcJJNxlwWv-3h-E~XiGa0rpknX63CKRww3SaUjFX-86eCLsn4bdSLOThSfhiNXuh5IhS6azLhGp9E5ofUVl5vh8JqslC9YvJ5zjTpT9CEqn5Hr43nJiPk8VckbLx9C33A4Ay2qz7k1tm36a1KqdIRFq-OgLELw~QUMIgD3C1RuBrdDg0ScPKzahaF9~Esn33pDZapOtrxb~l353WmlaJdlDxaB7dzg4s3fY9lBC7xxgeqeC~jJZoaD2S5lxXrnbvL0AUNPPtJxHCfEjdtwEDemZ62IudeIntoH4wupYTb~ZyEJC4hwiJLLiLPQJT3ZkJRTWxUqTSQfqUw__',
    rate: '+5',
  },
  {
    title: 'Brush Your Teeth',
    img: 'https://s3-alpha-sig.figma.com/img/2953/119b/c485fbcd56a5252802c5b94a42507946?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Dj1oIHdz4mcJJNxlwWv-3h-E~XiGa0rpknX63CKRww3SaUjFX-86eCLsn4bdSLOThSfhiNXuh5IhS6azLhGp9E5ofUVl5vh8JqslC9YvJ5zjTpT9CEqn5Hr43nJiPk8VckbLx9C33A4Ay2qz7k1tm36a1KqdIRFq-OgLELw~QUMIgD3C1RuBrdDg0ScPKzahaF9~Esn33pDZapOtrxb~l353WmlaJdlDxaB7dzg4s3fY9lBC7xxgeqeC~jJZoaD2S5lxXrnbvL0AUNPPtJxHCfEjdtwEDemZ62IudeIntoH4wupYTb~ZyEJC4hwiJLLiLPQJT3ZkJRTWxUqTSQfqUw__',
    rate: '+5',
  },
  {
    title: 'Brush Your Teeth',
    img: 'https://s3-alpha-sig.figma.com/img/2953/119b/c485fbcd56a5252802c5b94a42507946?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Dj1oIHdz4mcJJNxlwWv-3h-E~XiGa0rpknX63CKRww3SaUjFX-86eCLsn4bdSLOThSfhiNXuh5IhS6azLhGp9E5ofUVl5vh8JqslC9YvJ5zjTpT9CEqn5Hr43nJiPk8VckbLx9C33A4Ay2qz7k1tm36a1KqdIRFq-OgLELw~QUMIgD3C1RuBrdDg0ScPKzahaF9~Esn33pDZapOtrxb~l353WmlaJdlDxaB7dzg4s3fY9lBC7xxgeqeC~jJZoaD2S5lxXrnbvL0AUNPPtJxHCfEjdtwEDemZ62IudeIntoH4wupYTb~ZyEJC4hwiJLLiLPQJT3ZkJRTWxUqTSQfqUw__',
    rate: '+5',
  },
  {
    title: 'Brush Your Teeth',
    img: 'https://s3-alpha-sig.figma.com/img/2953/119b/c485fbcd56a5252802c5b94a42507946?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Dj1oIHdz4mcJJNxlwWv-3h-E~XiGa0rpknX63CKRww3SaUjFX-86eCLsn4bdSLOThSfhiNXuh5IhS6azLhGp9E5ofUVl5vh8JqslC9YvJ5zjTpT9CEqn5Hr43nJiPk8VckbLx9C33A4Ay2qz7k1tm36a1KqdIRFq-OgLELw~QUMIgD3C1RuBrdDg0ScPKzahaF9~Esn33pDZapOtrxb~l353WmlaJdlDxaB7dzg4s3fY9lBC7xxgeqeC~jJZoaD2S5lxXrnbvL0AUNPPtJxHCfEjdtwEDemZ62IudeIntoH4wupYTb~ZyEJC4hwiJLLiLPQJT3ZkJRTWxUqTSQfqUw__',
    rate: '+5',
  },
  {
    title: 'Brush Your Teeth',
    img: 'https://s3-alpha-sig.figma.com/img/2953/119b/c485fbcd56a5252802c5b94a42507946?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Dj1oIHdz4mcJJNxlwWv-3h-E~XiGa0rpknX63CKRww3SaUjFX-86eCLsn4bdSLOThSfhiNXuh5IhS6azLhGp9E5ofUVl5vh8JqslC9YvJ5zjTpT9CEqn5Hr43nJiPk8VckbLx9C33A4Ay2qz7k1tm36a1KqdIRFq-OgLELw~QUMIgD3C1RuBrdDg0ScPKzahaF9~Esn33pDZapOtrxb~l353WmlaJdlDxaB7dzg4s3fY9lBC7xxgeqeC~jJZoaD2S5lxXrnbvL0AUNPPtJxHCfEjdtwEDemZ62IudeIntoH4wupYTb~ZyEJC4hwiJLLiLPQJT3ZkJRTWxUqTSQfqUw__',
    rate: '+5',
  },
  {
    title: 'Brush Your Teeth',
    img: 'https://s3-alpha-sig.figma.com/img/2953/119b/c485fbcd56a5252802c5b94a42507946?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Dj1oIHdz4mcJJNxlwWv-3h-E~XiGa0rpknX63CKRww3SaUjFX-86eCLsn4bdSLOThSfhiNXuh5IhS6azLhGp9E5ofUVl5vh8JqslC9YvJ5zjTpT9CEqn5Hr43nJiPk8VckbLx9C33A4Ay2qz7k1tm36a1KqdIRFq-OgLELw~QUMIgD3C1RuBrdDg0ScPKzahaF9~Esn33pDZapOtrxb~l353WmlaJdlDxaB7dzg4s3fY9lBC7xxgeqeC~jJZoaD2S5lxXrnbvL0AUNPPtJxHCfEjdtwEDemZ62IudeIntoH4wupYTb~ZyEJC4hwiJLLiLPQJT3ZkJRTWxUqTSQfqUw__',
    rate: '+5',
  },
];

const TeacherCreateTask = ({navigation}: NavigProps<null>) => {
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
      }}>
      <HeaderBackground
        title="Add new task"
        ringColor={GStyles.purple.normalHover}
        opacity={0.02}
        backgroundColor={GStyles.primaryPurple}
        navigation={navigation}
      />

      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: '4%',
          paddingVertical: 30,
          gap: 20,
        }}
        columnWrapperStyle={{
          justifyContent: 'space-around',
          gap: 20,
        }}
        data={data}
        numColumns={2}
        renderItem={item => (
          <TouchableOpacity
            onPress={() =>
              item.item.title === 'New Task'
                ? navigation?.navigate('TeacherCustomTask')
                : navigation?.navigate('TeacherTaskAssign')
            }
            key={item.index}
            style={{
              //   height: 182,

              borderWidth: 1,
              borderColor: '#E9E9E9',
              borderRadius: 8,
              padding: 16,
              width: '50%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                gap: 10,
                alignItems: 'center',
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  fontFamily: GStyles.PoppinsSemiBold,
                  fontSize: 16,
                  color: '#3D3D3D',
                }}>
                {item.item.title === 'New Task' ? 'New Task' : item.item.title}
              </Text>
              <Image
                source={{
                  uri: item.item.img,
                }}
                resizeMode="center"
                style={{
                  width: 80,
                  height: 62,
                }}
              />
              {item.item.title !== 'New Task' && (
                <>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',

                      gap: 10,
                    }}>
                    <AntDesign
                      name="star"
                      size={18}
                      color={GStyles.primaryYellow}
                    />
                    <Text
                      style={{
                        fontSize: 14,
                        color: '#3D3D3D',
                        fontFamily: GStyles.Poppins,
                        lineHeight: 18,
                        fontWeight: '400',
                        letterSpacing: 0.8,
                      }}>
                      {item.item.rate}
                    </Text>
                  </View>
                  <TouchableOpacity
                    onPress={() =>
                      navigation?.navigate('EditTeacherCustomTask')
                    }
                    style={{
                      backgroundColor: GStyles.primaryPurple,

                      borderRadius: 100,
                      width: 76,
                      height: 33,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',

                        gap: 5,
                      }}>
                      <Text
                        style={{
                          fontSize: 14,
                          color: 'white',
                          fontFamily: GStyles.PoppinsSemiBold,
                        }}>
                        Edit
                      </Text>
                      <AntDesign name="edit" size={16} color="white" />
                    </View>
                  </TouchableOpacity>
                </>
              )}
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default TeacherCreateTask;

const styles = StyleSheet.create({});
