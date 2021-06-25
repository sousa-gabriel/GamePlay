import React from 'react';
import { Image } from 'react-native';

import {styles} from './styles';

export function GuildIcon(){
    const uri = 'data:image/jpeg;base64,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'
    return(
        <Image 
            style={styles.Image} 
            source={{uri}}
            resizeMode='cover'
        />
        
    )
}