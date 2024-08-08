// toastConfig.tsx
import React from 'react';
import { BaseToast, ErrorToast, ToastConfig,InfoToast } from 'react-native-toast-message';
import { View, Text } from 'react-native';
import { GStyles } from '../../../styles/GStyles';

import AntDesign from "react-native-vector-icons/AntDesign"

const ToasTConfig: ToastConfig = {
  success: (props) => (
    <BaseToast
      {...props}
      style={{ borderLeftWidth : 0, backgroundColor: "rgba(74,169,72,1)" ,width : "90%",paddingHorizontal : "4%",zIndex: +1000  }}
      contentContainerStyle={{ paddingHorizontal: 10 ,borderWidth : 0}}
      text1Style={{
        fontSize: 15,
        fontFamily : GStyles.Poppins,
        color : "white"
      }}
      text2Style={{
        fontSize: 15,
        fontFamily : GStyles.Poppins,
          color : "white"
      }}
      renderLeadingIcon={() => (
        <View style={{ justifyContent: 'center', alignItems: 'center'}}>
         <AntDesign name='checkcircleo' color={"white"} size={20} />
        </View>
      )}
    />
  ),
  info: (props) => (
    <InfoToast
    {...props}
      
    style={{borderLeftWidth : 0, borderWidth : 0, backgroundColor: "rgba(80,184,231,1)" ,width : "90%",paddingHorizontal : "4%",zIndex: +1000  }}
    contentContainerStyle={{ paddingHorizontal: 10 ,borderWidth : 0}}
    text1Style={{
      fontSize: 15,
      fontFamily : GStyles.Poppins,
      color : "white"
    }}
    text2Style={{
      fontSize: 15,
      fontFamily : GStyles.Poppins,
        color : "white"
    }}
    renderLeadingIcon={() => (
      <View style={{ justifyContent: 'center', alignItems: 'center'}}>
       <AntDesign name='infocirlceo' color={"white"} size={20} />
      </View>
    )}
    />
  ),
  error: (props) => (
    <ErrorToast
      {...props}
      
      style={{borderLeftWidth : 0, borderWidth : 0, backgroundColor: "rgba(230,95,118,1)" ,width : "90%",paddingHorizontal : "4%",zIndex: 1000  }}
      contentContainerStyle={{ paddingHorizontal: 10 ,borderWidth : 0}}
      text1Style={{
        fontSize: 15,
        fontFamily : GStyles.Poppins,
        color : "white"
      }}
      text2Style={{
        fontSize: 15,
        fontFamily : GStyles.Poppins,
          color : "gray"
      }}
      renderLeadingIcon={() => (
        <View style={{ justifyContent: 'center', alignItems: 'center'}}>
         <AntDesign name='warning' color={"white"} size={20} />
        </View>
      )}
    />
  ),
};

export default ToasTConfig;
