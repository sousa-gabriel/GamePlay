import React from 'react';
import { View, Text } from 'react-native';
import { RectButton, RectButtonProperties } from 'react-native-gesture-handler';
import { categories } from '../../utils/categories';
import { GuildIcon } from '../GuildIcon';

import { styles } from './styles';
import PlayerSVG from '../../assets/player.svg';
import CalendarSVG from '../../assets/calendar.svg';
import { theme } from '../../global/theme';

interface GuildProps {
    id: string,
    name: string,
    icon: null,
    owner: boolean,
}

interface AppointmentProps {
    id: string;
    guild: GuildProps;
    category: string;
    date: string;
    description: string;
}

interface Props extends RectButtonProperties {
    data: AppointmentProps;
}
export function Appointment({ data, ...rest }: Props) {
    const [category] = categories.filter(item => item.id === data.category)
    const { owner } = data.guild;
    return (
        <RectButton  {...rest}>
            <View style={styles.container}>
                <GuildIcon />
                <View style={styles.content}>
                    <View style={styles.header}>
                        <Text style={styles.title}>
                            {data.guild.name}
                        </Text>
                        <Text style={styles.category}>
                            {category.title}
                        </Text>
                    </View>
                    <View style={styles.footer}>
                        <View style={styles.dateInfo}>
                            <CalendarSVG />
                            <Text style={styles.date}>
                                {data.date}
                            </Text>
                        </View>
                        <View style={styles.playerInfo}>
                            <PlayerSVG fill={owner ? theme.colors.primary : theme.colors.on} />
                            <Text style={[
                                styles.player,
                                {
                                    color: owner ? theme.colors.primary : theme.colors.on
                                }]}>
                                {owner ? 'Anfitrião' : 'Visitante'}
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </RectButton>
    )
}