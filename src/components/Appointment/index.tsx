import React from 'react';
import { RectButton, RectButtonProperties } from 'react-native-gesture-handler';
import { categories } from '../../utils/categories';
import CalendarSVG from '../../assets/calendar.svg';
import PlayerSVG from '../../assets/player.svg';
import { theme } from '../../global/theme';
import { View, Text } from 'react-native';
import { GuildIcon } from '../GuildIcon';
import { GuildProps } from '../Guild';
import { styles } from './styles';
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