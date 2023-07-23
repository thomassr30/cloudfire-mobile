import { IUsuario } from "./IUsuario";

export interface IResponseData {
    Data:  IUsuario;
    ok:    boolean;
    token: string;
    msg?: string;
}

export interface ILoginData{
    correo: string;
    contrasena: string;
}