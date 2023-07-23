import { IUsuario } from "../interfaces/IUsuario";


export interface AuthState{
    status: 'checking' | 'authenticated' | 'not-authenticated';
    token: string | null;
    errorMessage: string;
    user: IUsuario | null
}

type AuthAction = 
    | {type: 'signUp', payload: {user: IUsuario}}
    | {type: 'signIn', payload: {token: string, user: IUsuario}}
    | {type: 'addError', payload: string}
    | {type: 'removeError'}
    | {type: 'notAuthenticated'}
    | {type: 'logout'}

export const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case 'addError':
            return {
                ...state,
                user: null,
                status: 'not-authenticated',
                token: null,
                errorMessage: action.payload
            }
        
        case 'removeError':
            return {
                ...state,
                errorMessage: ''
            }
        case 'signUp':
            return {
                ...state,
                errorMessage: '',
                status: 'not-authenticated',
                user: action.payload.user,
            }
        case 'signIn':
            return {
                ...state,
                errorMessage: '',
                status: 'authenticated',
                token: action.payload.token,
                user: action.payload.user,
            }
        case 'logout':
        case 'notAuthenticated':
            return {
                ...state,
                status: 'not-authenticated',
                token: null,
                user: null
            }
    
        default:
            return state
    }
}