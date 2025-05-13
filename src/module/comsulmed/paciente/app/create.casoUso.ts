import { IRepositorioPaciente } from "../domain/interface/repository/repositoryPaciente.interface";
import { codigoAndEdadNegativo, fechaNoFutura, nombreApellidoAndCedulaValidator } from "../domain/validation/validation";

export class CasoUsoCreatePaciente{
    constructor(private repositorio:IRepositorioPaciente){}

    async run(codigo:number,cedula:string,nombres:string,fechaNacimiento:string,
        apellidos:string,edad:number,genero:string,telefono:string,
        tipoSangre:string,direccion:string,correo:string,
        ocupacion:string
    ):Promise<void>{
        const paciente={
            codigo:codigoAndEdadNegativo(codigo),
            cedula:nombreApellidoAndCedulaValidator(cedula),
            nombres:nombreApellidoAndCedulaValidator(nombres),
            fechaNacimiento:fechaNoFutura(fechaNacimiento),
            apellidos:nombreApellidoAndCedulaValidator(apellidos),
            edad:codigoAndEdadNegativo(edad),
            genero,telefono,tipoSangre,direccion,correo,ocupacion
        }

        return await this.repositorio.create(paciente)
    }
}
