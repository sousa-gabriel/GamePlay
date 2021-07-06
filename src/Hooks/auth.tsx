import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";
//lib usada para pegar o AuthToken do discord 
//expo install expo-auth-session expo-random
interface User {
    id: string;
    userName: string;
    firstName: string;
    avatar: string;
    email: string;
    token: string;
}

//auth Token
import * as AuthSession from 'expo-auth-session';
import { api } from "../services/api";
//importando o asyncstorage
import AsyncStorage from "@react-native-async-storage/async-storage";
import { COLLECTION_USERS } from '../configs/database';


const { SCOPE } = process.env
const { CLIENT_ID } = process.env
const { CDN_IMAGE } = process.env
const { REDIRECT_URI } = process.env
const { RESPONSE_TYPE } = process.env

interface AuthContextdata {
    user: User;
    loading: boolean;
    singIn: () => Promise<void>
    singOut: () => Promise<void>
}

interface AuthProviderProps {
    children: ReactNode;
}

type AuthotizationResponse = AuthSession.AuthSessionResult & {
    params: {
        access_token?: string;
        error?: string;
    }
}


export const AuthContext = createContext({} as AuthContextdata);

function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<User>({} as User);
    const [loading, setLoading] = useState(false);
    async function singIn() {
        try {
            setLoading(true);

            const authUrl = `${api.defaults.baseURL}/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`

            //Respostas vindas da api do Discord
            const { type, params } = await AuthSession
                .startAsync({ authUrl }) as AuthotizationResponse;

            //se for sucesso eu injeto o token nas minhas requisiçoes
            if (type === 'success' && !params.error) {
                api.defaults.headers.authorization = `Bearer ${params.access_token}`;
                const userInfo = await api.get('/users/@me');
                const firstName = userInfo.data.username.split(' ')[0];
                userInfo.data.avatar = `${CDN_IMAGE}/avatars/${userInfo.data.id}/${userInfo.data.avatar}.png`

                const userData = {
                    ...userInfo.data,
                    firstName,
                    token: params.access_token
                };
                await AsyncStorage.setItem(COLLECTION_USERS, JSON.stringify(userData));
                setUser(userData);
            }

        } catch {
            throw new Error('Não foi possivel autenticar')
        } finally {
            setLoading(false);
        }
    }

    async function singOut() {
        setUser({} as User);
        await AsyncStorage.removeItem(COLLECTION_USERS);
    }

    async function loadUserStorageData() {
        const storage = await AsyncStorage.getItem(COLLECTION_USERS);
        if(storage){
            //transformando minha resposta de texto para um objeto
            const userLogged = JSON.parse(storage) as User;
            api.defaults.headers.authorization = `Bearer ${userLogged.token}`;
            setUser(userLogged);
        }
    }

    useEffect(()=>{
        loadUserStorageData();
    },[]);

    return (
        < AuthContext.Provider value={{ user, loading, singIn, singOut }}>
            {children}
        </AuthContext.Provider >
    )
}

function useAuth() {
    const context = useContext(AuthContext);
    return context
}

export { AuthProvider, useAuth }
