import React from 'react';
import {styles} from './styles';
import {View} from 'react-native';
import { Profile } from '../../components/Profile';
import { ButtonAdd } from '../../components/buttonAdd';
import { CategorySelect } from '../../components/CategorySelect';
import { useState } from 'react';

export function Home(){
    const [category, setCategory] = useState('');

    function handleCategorySelect(categoryId: string){
        categoryId === category ? setCategory('') : setCategory(categoryId);
    }
    
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Profile />
                <ButtonAdd />
            </View>
            <CategorySelect
                categorySelected={category}
                setCategory={handleCategorySelect}
            />
        </View>
    )
}