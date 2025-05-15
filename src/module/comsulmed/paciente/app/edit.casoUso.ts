import { IRepositorioPaciente } from "../domain/interface/repository/repositoryPaciente.interface";
import { PacienteNotFound } from "../domain/validation/util/paciente.validation";
import { codigoAndEdadNegativo, nombreApellidoAndCedulaValidator, fechaNoFutura, generoValido, telefonoValido,
    cedulaValido, tipoSangreValido, dirrecionValido, correoValido, ocupacionValida } from "../domain/validation/validation";

export class CasoUsoEditPaciente{
    constructor(private repositorio:IRepositorioPaciente){}

    async run(codigo:number,cedula:string,nombres:string,fechaNacimiento:string,
        apellidos:string,edad:number,genero:string,telefono:string,
        tipoSangre:string,direccion:string,correo:string,
        ocupacion:string):Promise<void>{
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

        const existe=await this.repositorio.getOneById(paciente.codigo)
        if (!existe) {
            throw new PacienteNotFound(`No existe ese Paciente!`)
        }

        return this.repositorio.edit(paciente)
    }
}
