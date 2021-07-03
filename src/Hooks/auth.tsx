import React, { createContext, useContext, useState, ReactNode } from "react";
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
// import {SCOPE, CLIENT_ID, CDN_IMAGE, REDIRECT_URI, RESPONSE_TYPE} from '../configs';
import { api } from "../services/api";

const {SCOPE} = process.env
const {CLIENT_ID} = process.env
const {CDN_IMAGE} = process.env
const {REDIRECT_URI} = process.env
const {RESPONSE_TYPE} = process.env

interface AuthContextdata {
    user: User;
    loading: boolean;
    singIn: ()=>Promise<void>
}

interface AuthProviderProps {
    children: ReactNode;
}

type AuthotizationResponse =  AuthSession.AuthSessionResult & {
    params:{
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
            const {type, params } = await AuthSession
            .startAsync({ authUrl }) as AuthotizationResponse;

            //se for sucesso eu injeto o token nas minhas requisiçoes
            if(type === 'success' && !params.error){
                api.defaults.headers.authorization = `Bearer ${params.access_token}`;
                const userInfo = await api.get('/users/@me');
                const firstName = userInfo.data.username.split(' ')[0];
                userInfo.data.avatar = `${CDN_IMAGE}/avatars/${userInfo.data.id}/${userInfo.data.avatar}.png`
                
                setUser({
                    ...userInfo.data, 
                    firstName, 
                    token: params.access_token
                })
            }

        } catch {
            throw new Error('Não foi possivel autenticar')
        } finally{
            setLoading(false);
        }
    }

    return (
        < AuthContext.Provider value={{ user, loading, singIn }}>
            {children}
        </AuthContext.Provider >
    )
}

function useAuth() {
    const context = useContext(AuthContext);
    return context
}

export { AuthProvider, useAuth }
