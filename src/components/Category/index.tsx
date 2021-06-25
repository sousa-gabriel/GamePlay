import React from 'react';
import { View,Text } from 'react-native';
import { SvgProps } from 'react-native-svg';
import {RectButton, RectButtonProperties} from 'react-native-gesture-handler';
import {LinearGradient} from 'expo-linear-gradient';

import {styles} from './styles';
import { theme } from '../../global/theme';

interface Props extends RectButtonProperties{
    title: string;
    icon: React.FC<SvgProps>
    checked?: boolean;
    hasCheckBox?: boolean;
}

export function Category({title, icon:Icon, checked = false, hasCheckBox=false, ...rest}:Props){
    return(
        <RectButton {...rest}>
            <LinearGradient 
                style={styles.container} 
                colors={[theme.colors.secondary50, theme.colors.secondary70]}
             >
                 <LinearGradient 
                    style={[styles.content, {opacity: checked ? 1 : 0.5}]}
                    colors={[checked ? theme.colors.secondary85 
                        : theme.colors.secondary50, theme.colors.secondary40
                    ]}
                >
                    { hasCheckBox && <View style={checked ? styles.checked : styles.check }/>}
                    <Icon width={48} height={48} />
                        <Text style={styles.title}>
                            {title}
                        </Text>
                 </LinearGradient>
            </LinearGradient>
        </RectButton>
    )
}