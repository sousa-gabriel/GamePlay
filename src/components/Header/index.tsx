import React, { ReactNode } from 'react';
import { View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { theme } from '../../global/theme';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons'
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

interface Props {
    title: string,
    action?: ReactNode
}
export function Header({ title, action }: Props) {
    const navigation = useNavigation();
    return (
        <LinearGradient 
            style={styles.container} 
            colors={[theme.colors.secondary100, theme.colors.secondary40]}
        >
            <BorderlessButton onPress={()=>{navigation.goBack()}}>
                <Feather name='arrow-left' size={24} color={theme.colors.heading}/>
            </BorderlessButton>
            <Text style={styles.title}>
                {title}
            </Text>
            {
                action ?
                <View>
                    {action}
                </View>
                : <View style={{width:24}}/>
            }
        </LinearGradient>
    )
}