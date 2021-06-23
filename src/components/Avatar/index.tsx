import React from "react";
import {LinearGradient} from 'expo-linear-gradient';
import { styles } from "./styles";
import { theme } from "../../global/theme";
import {Image} from 'react-native';

interface Props {
    urlImage: string;
}

export function Avatar({urlImage}: Props){
    return(
        <LinearGradient 
        style={styles.container} 
        colors={[theme.colors.secondary50, theme.colors.secondary70]}
    >
        <Image
            source={{uri: urlImage}}
            style={styles.avatar}
            resizeMode='contain'
        />
    </LinearGradient>
    )
}