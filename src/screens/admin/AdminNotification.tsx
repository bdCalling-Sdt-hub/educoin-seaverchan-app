import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import HeaderBackground from '../../components/common/headerBackground/HeaderBackground';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {GStyles} from '../../styles/GStyles';
interface AdminRoutesProps {
  navigation: NavigationProp<ParamListBase>;
}

import Feather from 'react-native-vector-icons/Feather';

const AdminNotification = ({navigation}: AdminRoutesProps) => {
  return (
    <View>
      <HeaderBackground title="Notification" navigation={navigation} />
      <View
        style={{
          paddingHorizontal: '4%',
          paddingVertical: 20,
        }}>
        <View
          style={{
            paddingHorizontal: 20,
            paddingVertical: 10,
            borderBottomColor: '#E2E2E2',
            borderBottomWidth: 1,
            gap: 21,
          }}>
          <Text
            style={{
              fontFamily: GStyles.PoppinsMedium,
              fontSize: 14,
              color: '#3D3D3D',
              letterSpacing: 0.5,
              marginVertical: 18,
            }}>
            To Day’s
          </Text>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              //   alignItems: 'center',
              gap: 30,
            }}>
            <View
              style={{
                width: 46,
                height: 46,
                borderRadius: 100,
                backgroundColor: '#F6EFFD',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={{
                  uri: 'https://s3-alpha-sig.figma.com/img/b776/9f81/822a74a3a053f6a1e89dbc63e4672938?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p2gjKFS5s8HPirKcgq99P9ayKDLvpx08h8dOvw1wWB6lJAS3rVuiN5VniTK74RQyvRKEIOW4Rbb4LzJpX1m~322E7jw-b3XuC7lpN1QXLiRsbSNO-yrAlt~jUsTvDmc86a2Fdxg8k33aCHa9f2stZbfX5gQuz9bH-ccNDP4Z0HyG9l5FHAlblIWunLf5IApZlcgy0A0fuIO4~kv1qV0tgCQXpTTRNI4wwUWzvJBTiEXVEPACTSKh28ZVEpW5nJDYXqHyEqGNMJycaO9Wxq4QcFVkzHrTLpDpacgXDKe2LjiHvySHpCE6OnjHQa2iWshIkgYe9tTIbfOePValUNmCZw__',
                }}
                style={{
                  width: 30,
                  height: 30,
                }}
              />
            </View>
            <View
              style={{
                width: '80%',
              }}>
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: GStyles.PoppinsMedium,
                  color: '#3D3D3D',
                }}>
                You have a new homework's
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: GStyles.Poppins,
                  color: '#888888',
                }}>
                It is a long established fact that a reader will be distracted
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                }}>
                <Text
                  style={{
                    fontSize: 12,
                    fontFamily: GStyles.PoppinsMedium,
                    color: '#3D3D3D',
                  }}>
                  See Details...
                </Text>
                <Feather name="arrow-up-right" size={18} color="#3D3D3D" />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              //   alignItems: 'center',
              gap: 30,
            }}>
            <View
              style={{
                width: 46,
                height: 46,
                borderRadius: 100,
                backgroundColor: '#F6EFFD',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={{
                  uri: 'https://s3-alpha-sig.figma.com/img/2940/7587/fd39f03717f4b4665313f65aa079d4a7?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=epw1XlUUzK9kSa3FPclrOdSP1sPNj0YQn-IUxSfnB3grPhwE6ZGMO7aIorzRtLS3A96FSjlLNuE0C~zMZ8Y~SqwItHRvvvUsPbr8h75ZinML8tMNb7NqOscyoIr3z14mEy6u1ukXBb9TE9U49AavDzsTu7CDCk6rgK7NaV7xHyJq84p8tUMSC4DpHT3XYx2S6mi1dSeI6-3VUnA5ci6MaZ80Y6r-PLOmEeKyQkqGcC1GtbhJJWxgP-mvrWhE9ZV83Gg-fvg-iD9TS5UV7tb8~nS89qsrCnLyz0hAGwk3Dh08SJIT6jHN3EaPViVgIJ5jU8YpMaXwjnJ~O1O9ZRCM~w__',
                }}
                style={{
                  width: 30,
                  height: 30,
                }}
              />
            </View>
            <View
              style={{
                width: '80%',
              }}>
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: GStyles.PoppinsMedium,
                  color: '#3D3D3D',
                }}>
                New Rewards added your account
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: GStyles.Poppins,
                  color: '#888888',
                }}>
                It is a long established fact that a reader will be distracted
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            paddingHorizontal: 20,
            paddingVertical: 10,
            borderBottomColor: '#E2E2E2',
            borderBottomWidth: 1,
            gap: 21,
          }}>
          <Text
            style={{
              fontFamily: GStyles.PoppinsMedium,
              fontSize: 14,
              color: '#3D3D3D',
              letterSpacing: 0.5,
              marginVertical: 18,
            }}>
            Yesterday
          </Text>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              //   alignItems: 'center',
              gap: 30,
            }}>
            <View
              style={{
                width: 46,
                height: 46,
                borderRadius: 100,
                backgroundColor: '#F6EFFD',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={{
                  uri: 'https://s3-alpha-sig.figma.com/img/0b85/6f34/036ac8ba93209f7d9bc7e5a49d13636a?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FrwUFganuqaa0s~77MKY65URiImYxbYD~pZOe-5pxNGFtrrAXWIrgW9vL~oPR7Y7xO9CwD0Ncfhn5ZPYbJBJtofe~8FPW~wO0cxQWMgcujQaEqj2X9PopAgmkhP8t2e3mTndN5rd4IcQWSIxIvb5OzzLxLeF7Up0bfzbLAEp6es7bvpP4HQgO3Qo4hCUE--9uuTrhyC3dOyYxt-uBpC7NBki8QzXwTClYiEChmXeRmOJKUpSBOe1EGhtB~vm~iX25IGWTDMTwoGT0xKtuUB6U9AW8SAzm3dF2pJk7R7iCLtHR-ipiIpRRXZdf7uCINs-3Ud0O7kDnubMob0Mxt1zww__',
                }}
                style={{
                  width: 30,
                  height: 30,
                }}
              />
            </View>
            <View
              style={{
                width: '80%',
              }}>
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: GStyles.PoppinsMedium,
                  color: '#3D3D3D',
                }}>
                You have a new homework's
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: GStyles.Poppins,
                  color: '#888888',
                }}>
                It is a long established fact that a reader will be distracted
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                }}>
                <Text
                  style={{
                    fontSize: 12,
                    fontFamily: GStyles.PoppinsMedium,
                    color: '#3D3D3D',
                  }}>
                  See Details...
                </Text>
                <Feather name="arrow-up-right" size={18} color="#3D3D3D" />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              //   alignItems: 'center',
              gap: 30,
            }}>
            <View
              style={{
                width: 46,
                height: 46,
                borderRadius: 100,
                backgroundColor: '#F6EFFD',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={{
                  uri: 'https://s3-alpha-sig.figma.com/img/cb07/0221/40e57f711089e8a5eb1f7312dbaf7dbd?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IhOX30JPxBV-yv8s~PLp0pYUNbGTfIl994F20JHVq~cJ4WS~INy1N9v0z6d63JCFgxgQvat8kkfxfxnd90hE8lwqt5icX1FJgOtSgUb7d27sQNRaGI1zpoNYvLqo41FxjaNRr2NGxiz7QmsHBbh3X6aG4AgiL0HB7bUXWjVUfY8GANCDjiBhNp0MXCeqQBy5oL~EihOIEQQUVhgfWsO~io~jl8TA~UpnotTjqKuIXZhPjeP83RODocBHUpzYubpqid9Rfvl0s2zBOd14-25DJbbfmVOGHqVO4HUqDuo8o5-du1sMYTKW3ddtPq2FKkC-HKKovnkwCf9fZ8GzSxe8Dg__',
                }}
                style={{
                  width: 30,
                  height: 30,
                }}
              />
            </View>
            <View
              style={{
                width: '80%',
              }}>
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: GStyles.PoppinsMedium,
                  color: '#3D3D3D',
                }}>
                New Rewards added your account
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: GStyles.Poppins,
                  color: '#888888',
                }}>
                It is a long established fact that a reader will be distracted
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default AdminNotification;

const styles = StyleSheet.create({});
