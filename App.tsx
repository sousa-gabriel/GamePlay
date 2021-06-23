import React from 'react';
//comando para importar libs do google (expo install expo-font @expo-google-fonts/inter)
import {useFonts} from 'expo-font';
import {Inter_400Regular, Inter_500Medium} from '@expo-google-fonts/inter';
import {Rajdhani_500Medium,Rajdhani_700Bold } from '@expo-google-fonts/rajdhani';
//comando para importar o loading (expo install expo-app-loading)
import AppLoading from 'expo-app-loading';
import {SignIn} from './src/screens/SignIn';
import { StatusBar } from 'react-native';
import { Background } from './src/components/Background';

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
      <SignIn />
    </Background>
  );
}
