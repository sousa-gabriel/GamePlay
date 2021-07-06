import React from 'react';
import { Image, View } from 'react-native';
import { styles } from './styles';
import DiscordSvg from '../../assets/discord.svg'

const { CDN_IMAGE } = process.env;

interface Props {
    guildId: string;
    iconId: null | string;
}

export function GuildIcon({ guildId, iconId }: Props) {

    const uri = `${CDN_IMAGE}/icons/${guildId}/${iconId}.png`;

    return (
        <View style={styles.container}>
            {
                iconId ?
                    <Image
                        style={styles.Image}
                        source={{ uri }}
                        resizeMode='cover'
                    />
                : 
                <DiscordSvg width={40} height={40} />
            }
        </View>


    )
}