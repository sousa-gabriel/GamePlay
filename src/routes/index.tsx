import React  from "react";
import {NavigationContainer} from '@react-navigation/native';
import { SignIn } from "../screens/SignIn";
import { AppRoutes } from "./app.routes"; 
import { useAuth } from "../Hooks/auth";

//usando um gerenciador de rotas, caso tenha um usuario conectado vai para todas as rotas 
//caso não tenha um usuario conectado fica somente na roda de signIn
export function Router(){
    const {user} = useAuth();
    // console.log(user.id)
    return(
        <NavigationContainer>
            {user.id ? <AppRoutes/> : <SignIn/>}
        </NavigationContainer>
    )
}