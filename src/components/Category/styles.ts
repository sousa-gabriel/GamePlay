import {StyleSheet} from 'react-native';
import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
    container:{
        width: 104,
        height: 120,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginRight: 8,
    },
    content:{
        width: 100,
        height: 116,
        alignItems: 'center',
        borderRadius: 8,
        paddingVertical: 20,
        justifyContent: 'space-between',
    },
    checked:{
        width: 15,
        height: 15,
        backgroundColor: theme.colors.primary,
        borderColor: theme.colors.secondary50,
        borderWidth: 1,
        borderRadius: 3,
        position: 'absolute',
        top: 8,
        right: 8,
    },
    check:{
        width: 15,
        height: 15,
        backgroundColor: theme.colors.secondary100,
        borderColor: theme.colors.secondary50,
        borderWidth: 1,
        borderRadius: 3,
        position: 'absolute',
        top: 8,
        right: 8,
    },
    title:{
        fontFamily: theme.fonts.title500,
        color: theme.colors.heading,
        fontSize: 15,
    },
})