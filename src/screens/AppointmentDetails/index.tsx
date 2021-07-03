import React from "react";
import { Background } from '../../components/Background';
import { Header } from "../../components/Header";
import { styles } from './styles';
import { theme } from "../../global/theme";
import { ListHeader } from "../../components/ListHeader";
import { ListDivider } from "../../components/ListDivider";
import { ButtonIcon } from "../../components/buttonIcon";

import { Fontisto } from '@expo/vector-icons'
import { ImageBackground, Text, View, FlatList } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

import BannerImg from '../../assets/banner.png';
import { Member } from "../../components/Member";

export function AppointmentDetails() {
    const members = [
        {
            id: '1',
            username: 'Gabriel',
            avatar_url :"https://github.com/sousa-gabriel.png",
            status: 'online'
        },
        {
            id: '2',
            username: 'João',
            avatar_url :"https://github.com/joao.png",
            status: 'offline'
        },
    ]
    return (
        <Background>
            <Header
                title='Detalhes'
                action={
                    <BorderlessButton>
                        <Fontisto name="share" size={24} color={theme.colors.primary} />
                    </BorderlessButton>
                }
            />
            <ImageBackground source={BannerImg} style={styles.banner} >
                <View style={styles.bannerContent}>
                    <Text style={styles.title}>
                        Lendários
                    </Text>
                    <Text style={styles.subtitle}>
                        É hoje que vamos chegar ao challenger sem perder uma partida da nd10
                    </Text>
                </View>
            </ImageBackground>
            <ListHeader title="Jogadores" subtitle="Total 3"/>
            <FlatList
                data={members}
                keyExtractor={item => item.id}
                ItemSeparatorComponent={()=> <ListDivider isCentered/>}
                style={styles.members}
                renderItem={({item})=>(
                    <Member 
                        data={item}
                    />
                )}
            />
            <View style={styles.footer}>
                <ButtonIcon title="Entrar na partida" />
            </View>
        </Background>
    )
}