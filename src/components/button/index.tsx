import React from 'react';
import { styles } from './styles';
import { RectButton, RectButtonProperties } from 'react-native-gesture-handler';
import { Text } from 'react-native';

interface Props extends RectButtonProperties {
    title: string;
}

export function Button({ title, ...rest }: Props) {
    return (
        <RectButton style={styles.container}  {...rest}>
            <Text style={styles.title}>
                {title}
            </Text>
        </RectButton>
    );
}
