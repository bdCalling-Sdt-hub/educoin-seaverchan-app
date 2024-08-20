import React, {
    forwardRef,
    useImperativeHandle,
    useState,
    ReactNode,
  } from 'react';
  import { View, StyleSheet, Text, TouchableOpacity, Dimensions } from 'react-native';
  import { Dialog } from 'react-native-ui-lib';
  import { GStyles } from '../../styles/GStyles';
import { FontSize } from '../../utils/utils';
  
  // Define the ref object type
  export interface SlideModalRef {
    open: (data: SlideModalProps) => void;
    close: () => void;
  }
  
  // Define the component's props type
  interface SlideModalProps {
    title?: string;
    content?: string;
    buttonColor?: string;
    buttonText?: string;
    fullWidth ?: boolean;
    fullHeight ?: boolean;
    direction?: "bottom" | "up" | "left" | "right";
  }
  const {width} = Dimensions.get("window");
  const SlideModal = forwardRef<SlideModalRef, SlideModalProps>(({direction}, ref) => {
    const [visible, setVisible] = useState(false);
    const [modalContent, setModalContent] = useState<SlideModalProps>();
  
    useImperativeHandle(ref, () => ({
      open(data) {
        setModalContent(data);
        setVisible(true);
      },
      close() {
        setVisible(false);
      },
    }));
  
    return (
      <Dialog
        visible={visible}
        onDismiss={() => setVisible(false)}
        width={ modalContent?.fullWidth ? "100%" : "90%"  }
        // panDirection={}
        // bottom={modalContent?.direction === "bottom"}
        // top={modalContent?.direction === "up"}
        // left={modalContent?.direction === "left"}
        // right={modalContent?.direction === "right"}
        panDirection={direction || "down"}
      >
        <View
          style={{
            padding: 20,
            gap: 20,
            justifyContent: 'center',
             width: '100%',
             backgroundColor : "white",
             borderRadius: 10
          }}
        >
          {modalContent?.title && (
            <Text
              style={{
                  fontSize: FontSize(18),
                fontFamily: GStyles.PoppinsMedium,
                textAlign: 'center',
                color: GStyles.textColor['#3D3D3D'],
                marginTop: 10,
              }}
            >
              {modalContent.title}
            </Text>
          )}
          {modalContent?.content && (
            <Text
              style={{
                fontFamily: GStyles.Poppins,
                fontSize: FontSize(16),
                textAlign: 'center',
              }}
            >
              {modalContent.content}
            </Text>
          )}
  
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 20,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                setVisible(false);
              }}
              style={{
                backgroundColor:
                  modalContent?.buttonColor || GStyles.primaryPurple,
                width: '30%',
                paddingVertical: 10,
                paddingHorizontal: 10,
                borderRadius: 100,
                alignSelf: 'center',
              }}
            >
              <Text
                style={{
                  color: 'white',
                  fontFamily: GStyles.Poppins,
                  textAlign: 'center',
                     fontSize: FontSize(15),
                  fontWeight: '400',
                }}
              >
                {modalContent?.buttonText || 'Exit'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Dialog>
    );
  });
  
  const styles = StyleSheet.create({
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
      width: 300,
      padding: 20,
      backgroundColor: 'white',
      borderRadius: 10,
    },
  });
  
  export default SlideModal;
  