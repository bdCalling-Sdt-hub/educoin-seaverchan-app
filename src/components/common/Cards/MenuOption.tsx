import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { GStyles } from '../../../styles/GStyles'

interface MenuOption {
    
    options : [
        {
            label?: string, 
            onPress?: () => void
        }
    ]
    indexNumber?: number,
    selectNumber?: number,
    itemGap ?: number
   
  
}

const MenuOption = ({options,indexNumber,selectNumber,itemGap} : MenuOption) => {
  return (
    <>
    {
            indexNumber === selectNumber && <Pressable  style={{
                position: 'absolute',
                top: 15,
                right: 30,
                padding: 10,
                zIndex: +1,
                backgroundColor : "white",
                elevation : 1,
                width : 70,
                height : 80,
                borderRadius : 8,
                justifyContent : "center",
                alignItems : "center",
                gap : itemGap ? itemGap: 8
              }}>
                {
                    options.map(({ label, onPress }) => (
                      <TouchableOpacity style={{
                        padding : 1,
                        marginVertical : 10
                      }} key={label} onPress={onPress}>
                        <Text style={{ fontSize: 13, color: GStyles.textColor['#3D3D3D'], textAlign: 'center' }}>
                          {label}
                        </Text>
                      </TouchableOpacity>
                    ))
                }
              
              </Pressable>
    }
    </>
  )
}

export default MenuOption

const styles = StyleSheet.create({})