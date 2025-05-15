import { IRepositorioPaciente } from "../domain/interface/repository/repositoryPaciente.interface";
import { PacienteNotFound } from "../domain/validation/util/paciente.validation";
import { codigoAndEdadNegativo } from "../domain/validation/validation";

export class CasoUsoDeletePaciente{
    constructor(private repositorio:IRepositorioPaciente){}

    async run(codigo:number):Promise<void>{
        const paciente={
            codigo:codigoAndEdadNegativo(codigo)
        }

        const existe=await this.repositorio.getOneById(paciente.codigo)
        if (!existe) {
            throw new PacienteNotFound(`No existe ese Paciente!`)
        }

        return this.repositorio.delete(paciente.codigo)
    }
}
