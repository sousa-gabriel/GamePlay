import {StyleSheet} from 'react-native';
import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
    constainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Image:{
        width: '100%',
        height: 360,
    },
    content:{
        marginTop: -40,
        padding: 50,
    },
    title:{
        color: theme.colors.heading,
        textAlign: 'center',
        fontSize: 40,
        marginBottom: 16,
        fontFamily: theme.fonts.title700,
        lineHeight: 40,
    },
    subTitle:{
        color: theme.colors.heading,
        fontSize: 15,
        textAlign:'center',
        marginBottom: 64,
        fontFamily: theme.fonts.title500,
        lineHeight: 25,
    }
});