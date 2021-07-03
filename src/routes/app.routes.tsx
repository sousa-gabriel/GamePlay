// comando para instalar o core do expo (yarn add @react-navigation/native) 
// comando para instalar a lib do expo (expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view)
//comando para instalar a lib do expo stack(yarn add @react-navigation/stack)
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//para auth 
import { Home } from '../screens/Home';
import { theme } from '../global/theme';
import { AppointmentDetails } from '../screens/AppointmentDetails';
import { AppointmentCreate } from '../screens/AppointmentCreate';

const { Navigator, Screen } = createStackNavigator();

export function AppRoutes() {
    return (
        <Navigator
            headerMode='none'
            screenOptions={{
                cardStyle: {
                    backgroundColor: theme.colors.secondary100
                }
            }}
        >
            <Screen
                name="Home"
                component={Home}
            />
            <Screen
                name="AppointmentDetails"
                component={AppointmentDetails}
            />
            <Screen
                name="AppointmentCreate"
                component={AppointmentCreate}
            />
        </Navigator>
    )
}