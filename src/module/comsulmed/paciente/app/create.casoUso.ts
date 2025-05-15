import { IRepositorioPaciente } from "../domain/interface/repository/repositoryPaciente.interface";
import { cedulaValido, codigoAndEdadNegativo, correoValido, dirrecionValido, fechaNoFutura, generoValido,
    nombreApellidoAndCedulaValidator, ocupacionValida, telefonoValido, tipoSangreValido } from "../domain/validation/validation";

export class CasoUsoCreatePaciente{
    constructor(private repositorio:IRepositorioPaciente){}

    async run(codigo:number,cedula:string,nombres:string,fechaNacimiento:string,
        apellidos:string,edad:number,genero:string,telefono:string,
        tipoSangre:string,direccion:string,correo:string,
        ocupacion:string
    ):Promise<void>{
        const paciente={
            codigo:codigoAndEdadNegativo(codigo),
            cedula:cedulaValido(cedula),
            nombres:nombreApellidoAndCedulaValidator(nombres),
            fechaNacimiento:fechaNoFutura(fechaNacimiento),
            apellidos:nombreApellidoAndCedulaValidator(apellidos),
            edad:codigoAndEdadNegativo(edad),
            genero:generoValido(genero),
            telefono:telefonoValido(telefono),
            tipoSangre:tipoSangreValido(tipoSangre),
            direccion:dirrecionValido(direccion),
            correo:correoValido(correo),
            ocupacion:ocupacionValida(ocupacion)
        }

        return await this.repositorio.create(paciente)
    }
}
