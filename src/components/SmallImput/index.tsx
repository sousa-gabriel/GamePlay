import React from 'react';
import {styles} from './styles';
import {TextInput, TextInputProps} from 'react-native';

export function SmallImput({...rest}:TextInputProps){
    return(
        <TextInput 
            style={styles.container}
            {...rest}
            keyboardType="numeric"
        />
    )
}