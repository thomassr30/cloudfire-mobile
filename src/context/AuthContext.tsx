import {createContext, useEffect, useReducer} from 'react';
import {AuthState, authReducer} from './authReducer';
import cfApi from '../api/cloudFireApi';
import {ILoginData, IResponseData} from '../interfaces/ILoginData';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Vibration} from 'react-native';
import {IUsuario} from '../interfaces/IUsuario';

type AuthContextProps = {
  errorMessage: string;
  token: string | null;
  user: IUsuario | null;
  status: 'checking' | 'authenticated' | 'not-authenticated';
  signUp: (registerData: any) => void;
  signIn: (loginData: any) => void;
  logOut: () => void;
  removeError: () => void;
};

const AuthInitialState: AuthState = {
  status: 'checking',
  token: null,
  user: null,
  errorMessage: '',
};

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({children}: any) => {
  const [state, dispatch] = useReducer(authReducer, AuthInitialState);

  useEffect(() => {
    checkToken();
  }, []);

  const checkToken = async () => {
    const token = await AsyncStorage.getItem('token');
    if (!token) return dispatch({type: 'notAuthenticated'});

    const resp = await cfApi.get('/auth/check-token');
    if (resp.status !== 200) {
      return dispatch({type: 'notAuthenticated'});
    }

    await AsyncStorage.setItem('token', resp.data.token);

    dispatch({
      type: 'signIn',
      payload: {
        token: resp.data.token,
        user: resp.data.Data,
      },
    });
  };

  const signUp = async ({nombre, apellPat, correo, contrasena}: any) => {
    try {
      nombre = nombre.trim();
      apellPat = apellPat.trim();
      correo = correo.trim();
      contrasena = contrasena.trim();
      const {data} = await cfApi.post<any>('/auth/register', {
        correo,
        apellPat,
        contrasena,
        nombre,
      });
      dispatch({
        type: 'signUp',
        payload: {
          user: data.usuario,
        },
      });
    } catch (error: any) {
      console.log(error);
      //   dispatch({
      //       type: 'addError',
      //       payload: error.response.data.errors[0].msg || 'Revise la información'
      //   })
    }
  };

  const signIn = async ({correo, contrasena}: ILoginData) => {
    try {
      correo = correo.trim();
      contrasena = contrasena.trim();
      const {data} = await cfApi.post<IResponseData>('/auth/login', {
        correo: correo,
        contrasena: contrasena,
      });
      if (data.ok) {
        dispatch({
          type: 'signIn',
          payload: {
            token: data?.token,
            user: data?.Data,
          },
        });
        await AsyncStorage.setItem('token', data.token);
        Vibration.vibrate(500);
      } else {
        dispatch({
          type: 'addError',
          payload: data.msg || 'Información incorrecta',
        });
      }
    } catch (error: any) {
      dispatch({
        type: 'addError',
        payload: error.response.data.message || 'Información incorrecta',
      });
    }
  };

  const logOut = async () => {
    await AsyncStorage.removeItem('token');
    dispatch({type: 'logout'});
  };

  const removeError = () => {
    dispatch({
      type: 'removeError',
    });
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        signUp,
        signIn,
        logOut,
        removeError,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
