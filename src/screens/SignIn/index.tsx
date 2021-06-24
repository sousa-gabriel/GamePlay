import React from 'react';
import { View, Text, Image, StatusBar } from 'react-native';
import {styles} from './styles';
import {ButtonIcon} from '../../components/buttonIcon';
import { useNavigation } from '@react-navigation/native';

//importando Imagem
import IllustrationImg from '../../assets/illustration.png';

export function SignIn(){
    const navigation = useNavigation();

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
                    onPress={()=>{navigation.navigate('Home')}}
                />
            </View>
        </View>
    )
}