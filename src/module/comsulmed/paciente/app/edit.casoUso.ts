import { IRepositorioPaciente } from "../domain/interface/repository/repositoryPaciente.interface";
import { PacienteNotFound } from "../domain/validation/util/paciente.validation";
import { codigoAndEdadNegativo, nombreApellidoAndCedulaValidator, fechaNoFutura } from "../domain/validation/validation";

export class CasoUsoEditPaciente{
    constructor(private repositorio:IRepositorioPaciente){}

    async run(codigo:number,cedula:string,nombres:string,fechaNacimiento:string,
        apellidos:string,edad:number,genero:string,telefono:string,
        tipoSangre:string,direccion:string,correo:string,
        ocupacion:string):Promise<void>{
        const paciente={
            codigo:codigoAndEdadNegativo(codigo),
            cedula:nombreApellidoAndCedulaValidator(cedula),
            nombres:nombreApellidoAndCedulaValidator(nombres),
            fechaNacimiento:fechaNoFutura(fechaNacimiento),
            apellidos:nombreApellidoAndCedulaValidator(apellidos),
            edad:codigoAndEdadNegativo(edad),
            genero,telefono,tipoSangre,direccion,correo,ocupacion
        }

        const existe=await this.repositorio.getOneById(paciente.codigo)
        if (!existe) {
            throw new PacienteNotFound(`No existe ese Paciente!`)
        }

        return this.repositorio.edit(paciente)
    }
}
