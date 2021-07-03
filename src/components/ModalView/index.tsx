import React, { ReactNode } from 'react';
import { View, Text, ModalProps, Modal, TouchableWithoutFeedback } from 'react-native';
import { styles } from './styles';
import { Background } from '../Background';

interface Props extends ModalProps {
    children: ReactNode;
    closeModal: () => void;
}


export function ModalView({ children, closeModal, ...rest }: Props) {
    return (
        <Modal transparent animationType='slide' {...rest} statusBarTranslucent>
            <TouchableWithoutFeedback onPress={closeModal}>
                <View style={styles.overlay}>
                    <View style={styles.constainer}>
                        <Background>
                            <View style={styles.bar} />
                            {children}
                        </Background>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    )
}