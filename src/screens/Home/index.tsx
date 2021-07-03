import React from 'react';
import { CategorySelect } from '../../components/CategorySelect';
import { Appointment } from '../../components/Appointment';
import { ListDivider } from '../../components/ListDivider';
import { ListHeader } from '../../components/ListHeader';
import { Background } from '../../components/Background';
import { useNavigation } from '@react-navigation/native';
import { ButtonAdd } from '../../components/buttonAdd';
import { Profile } from '../../components/Profile';
import { View, FlatList } from 'react-native';
import { styles } from './styles';
import { useState } from 'react';

export function Home() {
    const navigation = useNavigation();
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
                <ButtonAdd onPress={() => { navigation.navigate('AppointmentCreate') }} />
            </View>
            <CategorySelect
                categorySelected={category}
                setCategory={handleCategorySelect}
            />
            <ListHeader
                title='Partidas Agendadas'
                subtitle='Total 6'
            />
            <FlatList
                data={appoinments}
                keyExtractor={item => item.id}
                style={styles.matche}
                ItemSeparatorComponent={() => <ListDivider  isCentered/>}
                contentContainerStyle={{paddingBottom: 69}}
                renderItem={({ item }) => (
                    <Appointment
                        data={item}
                        onPress={() => { navigation.navigate('AppointmentDetails') }}
                    />
                )}
            />
        </Background>
    )
}