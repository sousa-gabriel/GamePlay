// comando para instalar o core do expo (yarn add @react-navigation/native) 
// comando para instalar a lib do expo (expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view)
//comando para instalar a lib do expo stack(yarn add @react-navigation/stack)
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//para auth 
import { Home } from '../screens/Home';
import { SignIn } from '../screens/SignIn';

const {Navigator, Screen } = createStackNavigator();

export function AuthRoutes(){
    return(
        <Navigator
            headerMode='none'
            screenOptions={{
                cardStyle:{
                    backgroundColor: 'transparent'
                }
            }}
        >
            <Screen
                name="SignIn"
                component={SignIn}
            />
            <Screen
                name="Home"
                component={Home}
            />
        </Navigator>
    )
}