import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

import React from 'react'
import { Image } from 'react-native'
import AntDesign from "react-native-vector-icons/AntDesign"
import Feather from "react-native-vector-icons/Feather"
import { NavigProps } from '../../../interfaces/NavigationPros'
import { GStyles } from '../../../styles/GStyles'
import { FontSize } from '../../../utils/utils'

interface HomeTopHeaderProps extends NavigProps<null> {
    backgroundColor?: string,
    userDetails?: {
        name?: string,
        image?: string,
        rewardsTotal?: number,
        pendingPoints?: number,
        points?: number
    }
    profileStyle?: "teacher" | "student",
    ringColor?: string,
    ringColorOpacity?: number,
    notifyRoute? : string,
    notifyRouteData? : any,
    setSearchValue?: React.Dispatch<React.SetStateAction<string>>,
    searchValue? : string,
    containerGap ?: number,
    imgAssets? : any,
    isNotification ?: boolean;
    profileNavigate ? : string
}

const HomeTopHeader = ({drawerNavigation,navigation,profileStyle,backgroundColor,notifyRoute,userDetails,ringColor,notifyRouteData,searchValue,setSearchValue,ringColorOpacity,containerGap,isNotification,profileNavigate} : HomeTopHeaderProps) => {
  return (
    <View
    style={{
      height: 170,
      backgroundColor: backgroundColor ?backgroundColor : GStyles.primaryBlue,
      borderBottomLeftRadius: 24,
      borderBottomRightRadius: 24,
      position: 'relative',
      paddingHorizontal: '4%',
      gap:containerGap? containerGap: 30,
      paddingVertical: 17,
       elevation : 2
    }}>
    <View
      style={{
        position: 'absolute',
        top: -30,
        left: -20,
        width: 153,
        height: 90,
        borderColor: ringColor ? ringColor :'#349EE6',
        borderWidth: 15,
        borderRadius: 100,
        opacity: ringColorOpacity ? ringColorOpacity :0.4,
      }}></View>
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
     
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 10,
        }}>

    
       <TouchableOpacity onPress={()=>{
       profileNavigate &&  navigation?.navigate(profileNavigate)
       }}>
       {
          userDetails?.image && <Image
          style={{
            height: 46,
            width: 46,
            borderRadius: 100,
            //   alignSelf: 'center',
          }}
          source={{
            uri:userDetails?.image 
          }}
        />
        }
       </TouchableOpacity>
        
        {
            profileStyle === "teacher" &&  <View>
            <Text
              style={{
                color: 'white',
                fontSize: FontSize(16),
                fontWeight: '800',
                fontFamily: GStyles.Poppins,
                //lineHeight: 22,
                letterSpacing: 1.4,
              }}>
              Welcome back
            </Text>
            <Text
              style={{
                color: 'white',
                   fontSize: FontSize(20),
                fontFamily: GStyles.Poppins,
                fontWeight: '800',
                letterSpacing: 0.8,
                //lineHeight: 27,
              }}>
            {userDetails?.name ? userDetails.name : ""} 
            </Text>
          </View>
        }
        
       {
        profileStyle === "student" &&<View style={{
          gap : 5
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: FontSize(16),
            fontWeight: '800',
            fontFamily: GStyles.Poppins,
            //lineHeight: 22,
            letterSpacing: 1.4,
          }}>
   {userDetails?.name ? userDetails.name : ""} 
        </Text>
        <View 
          style={{
            backgroundColor : "white",
            height : 30,
            borderRadius : 8,
            flexDirection : "row",
            alignItems : "center",
            paddingHorizontal : 5,
            gap :10,
            // marginTop : 5
          }}>
         <View style={{
          flexDirection : "row",
          gap : 5
         }}> 
          <AntDesign name='star' size={15} color={GStyles.primaryOrange}/>
          <Text style={{
            fontSize: FontSize(12),
            fontFamily : GStyles.PoppinsSemiBold,
            color : GStyles.primaryOrange
          }}>{userDetails?.points}</Text>
         </View>
         <View style={{
          flexDirection : "row",
          gap : 5
         }}> 
          <AntDesign name='staro' size={15} color={GStyles.primaryOrange}/>
          <Text style={{
            fontSize: FontSize(12),
            fontFamily : GStyles.PoppinsSemiBold,
            color : GStyles.primaryOrange
          }}>{userDetails?.pendingPoints}</Text>
         </View>
         <View style={{
          flexDirection : "row",
          gap : 5
         }}> 
          <AntDesign name='staro' size={15} color={GStyles.gray.lightActive}/>
          <Text style={{
            fontSize: FontSize(12),
            fontFamily : GStyles.PoppinsSemiBold,
            color : GStyles.gray.lightActive
          }}>{userDetails?.rewardsTotal}</Text>
         </View>
        </View>
      </View>
       }
        
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 28,
        }}>
        <TouchableOpacity
          onPress={() => notifyRoute && navigation?.navigate(notifyRoute)}>
          <View
            style={{
              position: 'relative',
            }}>
            <Feather name="bell" color="white" size={24} />
            {
              isNotification && 
            <View
              style={{
                width: 10,
                height: 10,
                position: 'absolute',
                top: 0,
                right: 0,
                backgroundColor: '#B0000B',
                borderRadius: 100,
                opacity: 0.8,
                zIndex: 999,
              }}></View>
            }
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => drawerNavigation?.openDrawer()}>
          <Feather name="menu" color="white" size={24} />
        </TouchableOpacity>
      </View>
    </View>
    <View>
      <View
        style={{
          backgroundColor: 'white',
          height: 48,
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          borderRadius: 100,
        }}>
        <TextInput
          placeholder="Search here...."
          placeholderTextColor="#858585" style={{
            flex: 1,
            // paddingHorizontal: 10,
          }}
          onChangeText={(text : string)=> setSearchValue && setSearchValue(text as string)}
          value={searchValue}
        />
        <Feather name="search" color="#858585" size={24} />
      </View>
    </View>
  </View>
  )
}

export default HomeTopHeader

const styles = StyleSheet.create({})