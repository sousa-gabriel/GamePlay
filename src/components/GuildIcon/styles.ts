import {StyleSheet} from 'react-native';
import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
    container:{
        width: 66,
        height: 62,
        borderRadius:8,
        marginRight: 20,
        backgroundColor: theme.colors.discord,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
    },
    Image:{
        width: 66,
        height: 62,
    }

})