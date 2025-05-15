import { Paciente } from "../interface/paciente.interface";

function mapToDomain(objeto:any):Paciente {
    return{
        codigo:objeto.codigo,
        cedula:objeto.cedula,
        nombres:objeto.nombres,
        apellidos:objeto.apellidos,
        edad:objeto.edad,
        fechaNacimiento:objeto.fechaNacimiento,
        genero:objeto.genero,
        telefono:objeto.telefono,
        tipoSangre:objeto.tipoSangre,
        direccion:objeto.direccion,
        correo:objeto.correo,
        ocupacion:objeto.ocupacion
    }
}

export{mapToDomain}
