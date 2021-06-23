import React from 'react';
//comando para importar libs do google (expo install expo-font @expo-google-fonts/inter)
import {useFonts} from 'expo-font';
import {Inter_400Regular, Inter_500Medium} from '@expo-google-fonts/inter';
import {Rajdhani_500Medium,Rajdhani_700Bold } from '@expo-google-fonts/rajdhani';
import AppLoading from 'expo-app-loading';
//comando para importar o loading (expo install expo-app-loading)
import { StatusBar } from 'react-native';
import { Background } from './src/components/Background';
import {SignIn} from './src/screens/SignIn';
import { Home } from './src/screens/Home';

export default function App() {
  const [fontLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold
  });
  if(!fontLoaded){
    return <AppLoading/>
  }
  return (
    <Background>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent/>
      <Home />
    </Background>
  );
}
