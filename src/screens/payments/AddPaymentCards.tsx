import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import HeaderBackground from '../../components/common/headerBackground/HeaderBackground';
import { GStyles } from '../../styles/GStyles';
import { NavigProps } from '../../interfaces/NavigationPros';
import { RadioButton, RadioGroup } from 'react-native-ui-lib';
import NormalButtons from '../../components/common/Buttons/NormalButtons';

const AddPaymentCards = ({navigation} : NavigProps<null>) => {

  const [selectedCardType, setSelectedCardType] = React.useState('credit');
  const [selectedCardNumber, setSelectedCardNumber] = React.useState('');
  const [selectedExpiryDate, setSelectedExpiryDate] = React.useState('');
  const [selectedCVC, setSelectedCVC] = React.useState('');
  const [showSecureEntry, setShowSecureEntry] = React.useState(false);
  const [showCVC, setShowCVC] = React.useState(false);
  const [showExpiryDate, setShowExpiryDate] = React.useState(false);
  const [showCardNumber, setShowCardNumber] = React.useState(false);
  const [showAddCard, setShowAddCard] = React.useState(false);
  const [showDeleteCard, setShowDeleteCard] = React.useState(false);
  const [showUpdateCard, setShowUpdateCard] = React.useState(false);
   
  const [selectCard, setSelectCard] = React.useState< "card" | "cash">();

  return (
    <View style={{
      height: '100%',
      backgroundColor: 'white',
    }}>
   <HeaderBackground
        title="Add Card"
        ringColor={GStyles.purple.normalHover}
        opacity={0.02}
        backgroundColor={GStyles.primaryPurple}
        navigation={navigation}
      />
      <ScrollView contentContainerStyle={{
        paddingHorizontal: '4%',
        paddingVertical: 20,
        gap: 30,
      }}>
        <View style={{
          gap : 10,
       
        }}>
          <Text style={{
            fontSize: 18,
           fontFamily : GStyles.PoppinsMedium,
           color : GStyles.textColor['#3D3D3D']
            
          }}>Credit & Debit Card</Text>
          <TouchableOpacity onPress={()=>{
            setSelectCard("card")
          }} style={{
            borderWidth : 1,
            borderColor : GStyles.borderColor['#ECECEC'],
            borderRadius : 100,
            paddingHorizontal : 20,
            paddingVertical : 15,
     
           flexDirection : "row",
           justifyContent : "space-between"
          }}>
         <View style={{
            flexDirection : "row",
            gap : 10
         }}>
         <Image source={require("../../assets/extraicons/cadit_card.png")} style={{
            width : 24,
            aspectRatio : 1,
            
            }}/>
            <Text style={{
              fontSize : 16,
              fontFamily : GStyles.Poppins,
              color : GStyles.textColor['#3D3D3D']
            }}>Add new card</Text>
         </View>

         <View style={{
          width : 24,
          height : 24,
          borderRadius : 200,
          borderWidth : 1,
          borderColor : selectCard === "card" ? GStyles.primaryPurple :  GStyles.borderColor['#ECECEC'],
          justifyContent : "center",
          alignItems : "center"
         }}>
          <View style={{
             width : 16,
             height : 16,
            backgroundColor :selectCard === "card" ? GStyles.primaryPurple : "white",
            borderRadius : 200,
          }}></View>
         </View>
          </TouchableOpacity>
        </View>
        <View style={{
          gap : 10,
       
        }}>
          <Text style={{
            fontSize: 18,
           fontFamily : GStyles.PoppinsMedium,
           color : GStyles.textColor['#3D3D3D']
            
          }}>More Payment Options</Text>
          <TouchableOpacity onPress={()=>{
            setSelectCard("cash")
          }} style={{
            borderWidth : 1,
            borderColor : GStyles.borderColor['#ECECEC'],
            borderRadius : 100,
            paddingHorizontal : 20,
            paddingVertical : 15,
     
           flexDirection : "row",
           justifyContent : "space-between"
          }}>
         <View style={{
            flexDirection : "row",
            gap : 10
         }}>
         <Image source={require("../../assets/extraicons/cash_payment.png")} style={{
            width : 24,
            aspectRatio : 1,
            
            }}/>
            <Text style={{
              fontSize : 16,
              fontFamily : GStyles.Poppins,
              color : GStyles.textColor['#3D3D3D']
            }}>Cash</Text>
         </View>

         <View style={{
          width : 24,
          height : 24,
          borderRadius : 200,
          borderWidth : 1,
          borderColor : selectCard === "cash" ? GStyles.primaryPurple :  GStyles.borderColor['#ECECEC'],
          justifyContent : "center",
          alignItems : "center"
         }}>
          <View style={{
             width : 16,
             height : 16,
            backgroundColor :selectCard === "cash" ? GStyles.primaryPurple : "white",
            borderRadius : 200,
          }}></View>
         </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <NormalButtons title='Continue' onPress={()=>{
        navigation?.navigate("Payment")
      }} />
    </View>
  );
};

export default AddPaymentCards;

const styles = StyleSheet.create({});
