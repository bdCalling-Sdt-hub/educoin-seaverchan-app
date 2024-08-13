import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import HeaderBackground from '../../components/common/headerBackground/HeaderBackground';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {GStyles, HEIGHT} from '../../styles/GStyles';
import CustomModal from '../../components/common/CustomModal/CustomModal';
import { useContextApi } from '../../context/ContextApi';
import { useSendFeedBackMutation } from '../../redux/apiSlices/setings/setingsSlices';
import Toast from 'react-native-toast-message';
import PopUpModal, { PopUpModalRef } from '../../components/modals/PopUpModal';
interface AdminRoutesProps {
  navigation: NavigationProp<ParamListBase>;
}
const StudentFeedback = ({navigation}: AdminRoutesProps) => {
  const popRef = React.useRef<PopUpModalRef>()
  const {user} = useContextApi()
  const [modalVisible, setModalVisible] = React.useState(false);
  const [feedback, setFeedback] = React.useState('');
  const [sendFeedBack,feedbackResults] = useSendFeedBackMutation();

  const handleSendFeedback = React.useCallback((UFeedback : string)=>{
    
    // setModalVisible(true);
    // console.log(UFeedback);
    sendFeedBack({token :user.token , data: {feedback : UFeedback}})
     .then((res) => {
      //  console.log(res);
       if(res.error){
        popRef.current?.open({
          buttonColor : GStyles?.primaryOrange,
          title : "Please enter your feedback",
            buttonText : "Ok"
        })
       }
       if (res.data.success) {
          setModalVisible(true);
          setFeedback('');
        } else {
       
        }
      })
     .catch((error) => {
        setModalVisible(false);
    
      });
  },[feedback])


  return (
    <View
      style={{
        height: '100%',
        backgroundColor: 'white',
      }}>
      <HeaderBackground
        title="Feedback"
        backgroundColor={GStyles.primaryOrange}
        ringColor={GStyles.orange.normalHover}
        navigation={navigation}
      />
       <View
        style={{
          paddingHorizontal: '4%',
          paddingVertical: '8%',
        }}>
        {/* <View>
          <Text
            style={{
              fontFamily: 'Poppins',
              fontSize: 14,
              color: '#555656',
              marginBottom: 10,
              lineHeight: 20,
            }}>
            Name
          </Text>
          <TextInput
            placeholder="type.."
            style={{
              borderWidth: 1,
              borderColor: '#EEEEEE',
              padding: 13,
              marginBottom: 10,
              borderRadius: 10,
              width: '100%',
              color: '#6E6E6F',
            }}
            // value="khushi"
          />
        </View> */}

        <View>
          <Text
            style={{
              fontFamily: 'Poppins',
              fontSize: 14,
              color: '#555656',
              marginBottom: 10,
              lineHeight: 20,
            }}>
            Description
          </Text>
          <TextInput
            placeholder="Ex. what is the feedback about us. "

            onChangeText={(text)=>setFeedback(text)}
            style={{
              borderWidth: 1,
              borderColor: '#EEEEEE',
              padding: 13,
              marginBottom: 10,
              borderRadius: 10,
              width: '100%',
              color: '#6E6E6F',
              height: HEIGHT * .3,
            }}
            multiline={true}
            value={feedback}
            textAlign="left"
            textAlignVertical="top"
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          gap: 18,
          justifyContent: 'flex-end',
          paddingHorizontal: '4%',
        }}>
        {/* <TouchableOpacity
          style={{
            borderColor: GStyles.primaryPurple,
            borderWidth: 1,
            padding: 15,
            borderRadius: 100,
            width: '30%',
            marginTop: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: GStyles.primaryPurple,
              fontSize: 16,
              fontWeight: 'bold',
            }}>
            Cancel
          </Text>
        </TouchableOpacity> */}
        <TouchableOpacity
          onPress={() => {
            handleSendFeedback(feedback);
          }}
          style={{
            backgroundColor: GStyles.primaryOrange,
            padding: 15,
            borderRadius: 100,
            width: '30%',
            marginTop: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 16,
              fontWeight: 'bold',
            }}>
            Submit
          </Text>
        </TouchableOpacity>
      </View>
      <CustomModal
        modalVisible={modalVisible}
        // backButton
        setModalVisible={setModalVisible}
        height={'20%'}
        width={'85%'}
        Radius={10}>
        <View
          style={{
            padding: 20,
            gap: 20,
            justifyContent: 'center',
            flex: 1,
          }}>
          <Text
            style={{
              fontSize: 18,
              fontFamily: GStyles.PoppinsMedium,
              textAlign: 'center',
              color: GStyles.textColor['#3D3D3D'],
              marginTop: 10,
            }}>
            Your Feedback Send Successfully
          </Text>
          {/* <Text
            style={{
              fontFamily: GStyles.Poppins,
              fontSize: 16,
              textAlign: 'center',
            }}>
            simply dummy text of the printing and typesetting industry
          </Text> */}

          <View>
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={{
                backgroundColor: GStyles.primaryOrange,
                width: '30%',
                paddingVertical: 10,
                paddingHorizontal: 15,
                borderRadius: 100,
                alignSelf: 'center',
              }}>
              <Text
                style={{
                  color: 'white',
                  fontFamily: GStyles.Poppins,
                  textAlign: 'center',
                  fontSize: 16,
                  fontWeight: '400',
                }}>
                OK
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </CustomModal>
      <PopUpModal ref={popRef} />
    </View>
  );
};

export default StudentFeedback;

const styles = StyleSheet.create({});
