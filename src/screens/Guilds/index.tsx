import React from 'react';
import { View, FlatList } from 'react-native';
import { Guild, GuildProps } from '../../components/Guild';
import { styles } from './styles';
import { ListDivider } from '../../components/ListDivider';

interface Props {
    handleGuildSelect: (guild: GuildProps) => void;
}
export function Guilds({ handleGuildSelect }: Props) {
    const guilds = [
        {
            id: '1',
            name: 'Lendários',
            icon: 'teste',
            owner: true
        },
        {
            id: '2',
            name: 'Mercenarios',
            icon: 'teste',
            owner: true
        }
    ]

    return (
        <View style={styles.constainer}>
            <FlatList
                data={guilds}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={() => <ListDivider isCentered/>}
                contentContainerStyle={{ paddingBottom: 68, paddingTop: 103 }}
                ListHeaderComponent={() => <ListDivider isCentered/>}
                style={styles.guilds}
                renderItem={({ item }) => (
                    <Guild
                        data={item}
                        onPress={() => { handleGuildSelect(item) }}
                    />
                )}
            />
        </View>
    )
}