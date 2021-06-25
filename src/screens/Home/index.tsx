import React from 'react';
import { styles } from './styles';
import { View, FlatList } from 'react-native';
import { Profile } from '../../components/Profile';
import { ButtonAdd } from '../../components/buttonAdd';
import { CategorySelect } from '../../components/CategorySelect';
import { useState } from 'react';
import { ListHeader } from '../../components/ListHeader';
import { Appointment } from '../../components/Appointment';
import { ListDivider } from '../../components/ListDivider';
import { Background } from '../../components/Background';

export function Home() {
    const [category, setCategory] = useState('');

    function handleCategorySelect(categoryId: string) {
        categoryId === category ? setCategory('') : setCategory(categoryId);
    }

    const appoinments = [
        {
            id: '1',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 às 20:40h',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida no md10'
        },
        {
            id: '2',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: false
            },
            category: '1',
            date: '22/06 às 20:40h',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida no md10'
        }
    ]

    return (
        <Background >
            <View style={styles.header}>
                <Profile />
                <ButtonAdd />
            </View>
            <CategorySelect
                categorySelected={category}
                setCategory={handleCategorySelect}
            />
            <View style={styles.content}>
                <ListHeader
                    title='Partidas Agendadas'
                    subtitle='Total 6'
                />
                <FlatList
                    data={appoinments}
                    keyExtractor={item => item.id}
                    style={styles.matche}
                    ItemSeparatorComponent={() => <ListDivider />}
                    renderItem={({ item }) => (
                        <Appointment
                            data={item}
                        />
                    )}
                />
            </View>
        </Background>
    )
}