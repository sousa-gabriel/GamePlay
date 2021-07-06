import React, {useEffect} from 'react';
import { View, FlatList } from 'react-native';
import { Guild, GuildProps } from '../../components/Guild';
import { styles } from './styles';
import { ListDivider } from '../../components/ListDivider';
import { useState } from 'react';
import { Load } from '../../components/Load';
import { api } from '../../services/api';

interface Props {
    handleGuildSelect: (guild: GuildProps) => void;
}
export function Guilds({ handleGuildSelect }: Props) {
    const [guilds, setGuilds] = useState<GuildProps[]>([]);
    const [loading, setLoading] = useState(true);

    async function GetGuilds() {
        const response = await api.get('/users/@me/guilds');
        
        setGuilds(response.data);
        setLoading(false);
    }

    useEffect(()=>{
        GetGuilds();
    },[]);

    return (
        <View style={styles.constainer}>
            {loading ? <Load /> :
                <FlatList
                    data={guilds}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                    ItemSeparatorComponent={() => <ListDivider isCentered />}
                    contentContainerStyle={{ paddingBottom: 68, paddingTop: 103 }}
                    ListHeaderComponent={() => <ListDivider isCentered />}
                    style={styles.guilds}
                    renderItem={({ item }) => (
                        <Guild
                            data={item}
                            onPress={() => { handleGuildSelect(item) }}
                        />
                    )}
                />
            }
        </View>
    )
}