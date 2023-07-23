export interface IUsuario {
    id:        string;
    nombre:    string;
    apellPat:  string;
    apellMat:  null;
    rut:       null;
    fechaNac:  null;
    telefono:  null;
    direccion: null;
    genero:    null;
    correo:    string;
    isActive:  boolean;
    rol:       string;
    createdAd: Date;
    updatedAt: Date;
}