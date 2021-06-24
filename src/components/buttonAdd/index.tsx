import React from 'react';
import {styles} from './styles';
import {RectButton, RectButtonProperties} from 'react-native-gesture-handler';
//inserindo icones no meu projeto
import {MaterialCommunityIcons} from '@expo/vector-icons';
import { theme } from '../../global/theme';

export function ButtonAdd({...rest}:RectButtonProperties){
    return(
        <RectButton style={styles.container}  {...rest}>
            <MaterialCommunityIcons
                name='plus'
                color={theme.colors.heading}
                size={24}
            />
        </RectButton>
    );
}