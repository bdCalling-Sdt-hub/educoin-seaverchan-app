import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import HeaderBackground from '../../components/common/headerBackground/HeaderBackground'
import { GStyles } from '../../styles/GStyles'
import { NavigProps } from '../../interfaces/NavigationPros'
import { FontSize } from '../../utils/utils'

const PaymentScreen = ({navigation} : NavigProps<null>) => {
  return (
    <View style={{
      height: '100%',
      backgroundColor: 'white',
    
    }}>
     <HeaderBackground
        title="Payment"
        ringColor={GStyles.purple.normalHover}
        opacity={0.02}
        backgroundColor={GStyles.primaryPurple}
        navigation={navigation}
      />
         <View style={{
          paddingHorizontal: '4%',
          paddingVertical: 20,
        gap : 20
        }}>
        
        <View style={{
          gap :4
        }}>
        <Text style={{
            fontSize: FontSize(16),
           fontFamily : GStyles.Poppins,
           color : GStyles.textColor['#3D3D3D']
            
          }}>Card holder name</Text>
        <TextInput 
         style={{
            borderWidth : 1,
            borderColor : GStyles.borderColor['#ECECEC'],
            borderRadius : 100,
            paddingHorizontal : 20,
            paddingVertical : 12,
     
           flexDirection : "row",
           justifyContent : "space-between"
          }}
          placeholderTextColor={GStyles.textColor['#929394']}
          placeholder='Omar Almutairi'
          />
        </View>
        <View style={{
          gap :4
        }}>
        <Text style={{
            fontSize: FontSize(16),
           fontFamily : GStyles.Poppins,
           color : GStyles.textColor['#3D3D3D']
            
          }}>Card number</Text>
        <TextInput 
         style={{
            borderWidth : 1,
            borderColor : GStyles.borderColor['#ECECEC'],
            borderRadius : 100,
            paddingHorizontal : 20,
            paddingVertical : 12,
     
           flexDirection : "row",
           justifyContent : "space-between"
          }}
          placeholderTextColor={GStyles.textColor['#929394']}
          placeholder='0124157254'
          />
        </View>
       <View style={{
        flexDirection : "row",
        justifyContent : "space-between",
        gap : 10
       }}>
 <View style={{
          gap :4,
          flex : 1
        }}>
        <Text style={{
            fontSize: FontSize(16),
           fontFamily : GStyles.Poppins,
           color : GStyles.textColor['#3D3D3D']
            
          }}>Expire date</Text>
        <TextInput 
         style={{
            borderWidth : 1,
            borderColor : GStyles.borderColor['#ECECEC'],
            borderRadius : 100,
            paddingHorizontal : 20,
            paddingVertical : 12,
     
           flexDirection : "row",
           justifyContent : "space-between"
          }}
          placeholderTextColor={GStyles.textColor['#929394']}
          placeholder='20/30'
          />
        </View>
        <View style={{
          gap :4,
          flex : 1
        }}>
        <Text style={{
            fontSize: FontSize(16),
           fontFamily : GStyles.Poppins,
           color : GStyles.textColor['#3D3D3D']
            
          }}>CVV</Text>
        <TextInput 
         style={{
            borderWidth : 1,
            borderColor : GStyles.borderColor['#ECECEC'],
            borderRadius : 100,
            paddingHorizontal : 20,
            paddingVertical : 12,
     
           flexDirection : "row",
           justifyContent : "space-between"
          }}
          placeholderTextColor={GStyles.textColor['#929394']}
          placeholder='000'
          />
        </View>
       </View>
      
       

        </View>
    </View>
  )
}

export default PaymentScreen

const styles = StyleSheet.create({})