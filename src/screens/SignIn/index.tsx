import React from 'react';
import { View, Text, Image, StatusBar } from 'react-native';
import {styles} from './styles';
import IllustrationImg from '../../assets/illustration.png';
import {ButtonIcon} from '../../components/buttonIcon';

export function SignIn(){
    return(
        <View style={styles.constainer}>
            <Image source={IllustrationImg} style={styles.Image} resizeMode='stretch' />
            <View style={styles.content}>
                <Text style={styles.title}>
                    Conecte-se{`\n`}
                    e organize suas{`\n`}
                    jogatinas
                </Text>
                <Text style={styles.subTitle} >
                    Crie grupos para jogar seus games {`\n`}
                    favoritos com seus amigos
                </Text>
                <ButtonIcon
                    title='Entrar com o Discord'
                    activeOpacity={0.7}
                />
            </View>
        </View>
    )
}