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
    title: 'Do Homework',
    img: 'https://s3-alpha-sig.figma.com/img/2c10/16f6/4bff687cf7a8a14534f53fbb4a8f2736?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=esICk8ImHQOgCcWIWD145fsTNQlxiBAdm3DAu6--wPkisu~aQ23TwPEVHXhr1BOWtXPcIkBUYgibF6NC3c6dYwGLSz08jY9~x9a6fSumaUEypSxaFSLmETl3qjHGt9bOulIfszeRQ6kIopzPyAI44iFu66vGCgKLT17LyqeJtAipvbMm0-vRmL952WcE4HvDWtVz5SbFdaKdhwVV8Yl1SjzQ17Xr6B5u1H80OI-7BgesgahIJwPq5PMdP2xW-ossCxn5Wla9owBAlkPySlrcWT~OtEwNcCGCqv6mCqPQmLJOMJ50PoAZoyFWDeNte-SgsfhtJcpcj7cmLP6hJ0-HeA__',
    rate: '+5',
  },
  {
    title: 'Participate in Class',
    img: 'https://s3-alpha-sig.figma.com/img/d320/8cf3/64e7a16a5427f405523f8de3a7f27a2a?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ckvoykQMe8XA5JvLRIUC8BzKM01tb7G8hoCFD8ZzNoIjmS2b~N797OfBYtOjvb1J2i8WNPAIeZaB8~qsat~Q1Z49scsPCJU3ipFmm5NIOS3jM9Vy8ogJWwf04tHAvDJj7h5LgqRPu6prvTquJxfi9mqYFsE~kR2lqgfKQv-8NdtykMPOm9v0rrkf8q3MYBg9u9l1vq8xx~A2fQJLESPqW1b-TQ9lOR17eiU5VjdociubyuuDfIC4eSt~v0Coa12U5LBnztYE7CCzjDh-XI2HgidTMpP9AgPcO1f2ZjhVX8h16MfPL4QGG1Zbb~lpwFTN6vA7wV8bma2V18k35LIwDg__',
    rate: '+5',
  },
  {
    title: 'Organize School Bag',
    img: 'https://s3-alpha-sig.figma.com/img/fde7/a17f/e21274fa20896e7dae728d8c6cfd4433?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qm2toWS48F~FN~SSY8SF2xMry7NCgSI9jWcLVxMZ~I-tF8zRQma7iEfqlObGOBC5XVMjlGnCoQXYONvHL4QYybpbeNZbFny4mNKb72FbAUyE57~BRzrO~~IQGnLMJEsZEXjuso7vWe9fZPssmfXr2CPc0NuvFNvk6wsujfkBw2BzMdsttRNrzTI2mG1eUWD6ts~3~SsyF5WgroNhjbot6Qmj0CiFhZ9Q-BfgYQBNYe6rHjKZNLOZvkFvNodY~KmHYawikT87poJu5yl1SJr602fw88D3Q5LVrXha6nhOe7IO46Ep9SZ~XtrqZgnpa5-WDnomQwbolpm6OowD~ZwcHw__',
    rate: '+10',
  },
  {
    title: 'Read a Book',
    img: 'https://s3-alpha-sig.figma.com/img/0b06/6cc6/1bca87f5d4616311568348a53424358d?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hwmM4-QIlwkSEeUpvPZrVyXkLV8QZbDSzC8W8fMhOl-13nFIeJscoSXJW6fVUYqaQPUF9uOfSpsOGK8vME1SKZXZxOZBtJ0KXqQq1cqZsOkB45wPsF1fvEq1EDdlL0VIe8eWKcyAK5RvLRMXmYp-qgAAQ57JbLbGvQYq4wLxIy9KiDMeOOyE0gowqP5OG-eJUmqMs1gHXQEslYTnDlOD2-re5XkZ28y4bYc9sRWeBoZjsIxaHezq513AQgrI7wkq-LqXurBRTEoow47HPStcoSWWi~2uIDKuhEmWg0BqYo60BKzakCXob4tIIB-TRYIGAcKQH6XOY~wqr9CTpbIbPQ__',
    rate: '+5',
  },
  {
    title: 'Group Study Session',
    img: 'https://s3-alpha-sig.figma.com/img/2d97/acf6/3e2dabe322790fab9c39fccc095f58a7?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=h16cYdOyo3A1f~dgY564FTmisZcGiaLR-9yBuT4xjZqMiiVOYWQbjxeSj3qbh1Ueb~7cFLR9AZDZsdsj59w0glWiZNBQqMXaRVRL~oiVSND4FfV5IB77iyIy6HjAstoftQsxBdg6cXw~FFRlpHWW3YN2LQxJZkKmgSAjXcbtiBnqjQkq7VXidZOy~Uu6ewXCGw3RDOaioQXD9H4-QcjDBNwjrxPNxW79JZttw3~EpVj9a-XI8A5jJQGl4CHsiTX5NVTDtdUA7QEyerrznpu7B47BjKaIxiXaM1AsSuieINcQcg6HHePmN0IDaRf3rdYOQVKTiKt5CledkokEPOXtpQ__',
    rate: '+5',
  },
  {
    title: 'School Project Work',
    img: 'https://s3-alpha-sig.figma.com/img/1f2c/08e4/71b983882ad7d5bfe39ce6bd929d7bc8?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=grC2ZhhgTw8V8rPLyKgJPhY1625rp5XMLGQQQlzQb5Ivx9lwnDWo8uv~Dw6fjhMA9CTFKDmtYAuXLKb834EPDHQkzNRQQkNXv51LpGBjBMvs-L7w72T1YpHWaggzStYYpxUv1GsZ9m1~dAR0AcSgK7cStBcAra8L8TRxhQjBYmiBkI8vkSZ9DTLKmWuzJNNpuBJMMCwE8zBxa-lIZlCWDLlIITbbmoDnn9nEFXv2W7Ue1rftP3H0-k1PFceCeq4ajfiNdIR5JGfA7BsgvmYIwZBiAAjpCRyIQLKA6AWlWrH4ji~-piCXqQ4pBZqE8ObM~vBgQQHx4JCB1GIif6xeAw__',
    rate: '+5',
  },
  {
    title: 'Help a Classmate',
    img: 'https://s3-alpha-sig.figma.com/img/052e/dc18/51f142695af7865e484b342551aa8f6d?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fZnhym4~y~a66ZA3aLY13TcGJe~6yBksMjXdOmRW~uSbN0gcnF9UK~3~6v-KXx0R19ggxX6zHreN7NqrJ8Phc~s4zRnFqoURZPFsntMN3M57beR5PlSoXiRIgj0z2irm2nBc-Wek6yMp21Gbjni1PlxfyMI9ngbLr6KTMpUJOjGvPg2lOBU2o~nd9HVMI6TCL5yE6B-DR74SsgorrJ-vtxLTVEiUotRmfBLFCScqDY6Qeg2Re0JJYykG5TmLTvyrPEinUN7xQkIoxadHBBSCnJ5ZBFd~kbTxkbX9qqu3ScnulOr1oUzpLtLA2O-S7Bcb1B7GSK7jcC203ChRYnQwhg__',
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
                  width: 153,
                  height: 84,
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
