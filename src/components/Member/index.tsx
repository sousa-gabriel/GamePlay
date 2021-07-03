import React from 'react';
import { Avatar } from '../Avatar';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { theme } from '../../global/theme';
export interface MemberProps {
    id: string;
    username: string;
    avatar_url: string;
    status: string;
}

interface Props {
    data: MemberProps;
}

export function Member({ data }: Props) {
    const isOnline = data.status === 'online'
    return (
        <View style={styles.container}>
            <Avatar urlImage={data.avatar_url} />
            <View>
                <Text style={styles.title}>
                    {data.username}
                </Text>
                <View style={styles.status}>
                    {<View 
                        style={
                            [styles.bulletStatus, 
                                { backgroundColor: isOnline ? 
                                    theme.colors.on : theme.colors.primary 
                                }
                            ]}
                    />}
                    <Text style={styles.nameStatus}>
                        {isOnline ? 'Disponivel' : 'Ocupado'}
                    </Text>
                </View>
            </View>
        </View>
    )
}