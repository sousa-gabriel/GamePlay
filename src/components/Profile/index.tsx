import React from 'react';
import {styles} from './styles';
import {View, Text} from 'react-native';
import { Avatar } from '../Avatar';

export function Profile(){
    return(
        <View style={styles.container}>
            <Avatar
                urlImage="https://github.com/sousa-gabriel.png"
            />
            <View>
                <View style={styles.user}>
                    <Text style={styles.greeting}>
                        Olá
                    </Text>
                    <Text style={styles.username}>
                        Gabriel
                    </Text>
                </View>
                <Text style={styles.message}>
                    Hoje é dia de vitória
                </Text>
          </View>
        </View>
    )
}