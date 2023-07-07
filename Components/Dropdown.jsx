import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Dropdown } from 'react-native-element-dropdown';
import { Icon } from '@rneui/base';
import Colors from '../Constants/Colors';

const DropDown = ({value,setValue}) => {
    const [isFocus, setIsFocus] = useState(false);
    const data = [
      {
        value: 1,
        label : "Cleaning"
        
      },
      {
        value: 2,
        label : "Hand care"
        
      },
      {
        value: 3,
        label : "Cooking"
        
      },
      {
        value: 4,
        label : "Driving"
        
      },
      {
        value: 5,
        label : "electricians"
        
      },
      {
        value: 6,
        label : "Repair"
        
      },
      {
        value: 7,
        label : "Carpenter"
        
      },
      {
        value: 8,
        label : "hair"
        
      },
     
    ]
    const renderLabel = () => {
      if (value || isFocus) {
        return (
          <Text style={[styles.label, isFocus && { color: 'blue' }]}>
            Dropdown label
          </Text>
        );
      }
      return null;
    };
  return (
    <View>
       <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: `${Colors.primaryColor}` }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={ 'select service' }
          searchPlaceholder="search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
          renderLeftIcon={() => (
            <Icon
            type='ionicon'
              
              style={styles.icon}
              color={isFocus ? `${Colors.secondaryColor}` : 'black'}
              name="caret-down"
              size={20}
            />
          )}
        />
    </View>
  )
  
}
const styles = StyleSheet.create({
  
    dropdown: {
      height: 50,
      width : "100%",
      borderColor: 'gray',
      borderWidth: 0.5,
      borderRadius: 8,
      margin : 0,
      paddingHorizontal: 8,
    },
    icon: {
      marginRight: 5,
    },
    label: {
      position: 'absolute',
      backgroundColor: 'white',
      left: 22,
      top: 8,
      zIndex: 999,
      paddingHorizontal: 8,
      fontSize: 14,
    },
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 16,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },

    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
  });

export default DropDown