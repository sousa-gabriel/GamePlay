import React from 'react';
import { View, Text, Image, Alert, ActivityIndicator } from 'react-native';
import { styles } from './styles';
import { ButtonIcon } from '../../components/buttonIcon';
import { Background } from '../../components/Background';
//consumindo nosso contexto
import { useAuth } from '../../Hooks/auth';

//importando Imagem
import IllustrationImg from '../../assets/illustration.png';
import { theme } from '../../global/theme';

export function SignIn() {
    const { loading, singIn } = useAuth();

    async function handleSignIn() {
        try {
            await singIn();
        } catch (error) {
            Alert.alert(error)
        }
    }
    return (
        <Background>
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
                    {
                        loading ? <ActivityIndicator color={theme.colors.primary} /> :
                            <ButtonIcon
                                title='Entrar com o Discord'
                                onPress={handleSignIn}
                            />}
                </View>
            </View>
        </Background>
    )
}