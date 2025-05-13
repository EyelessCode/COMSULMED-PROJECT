import { Paciente } from "../domain/interface/paciente.interface";
import { IRepositorioPaciente } from "../domain/interface/repository/repositoryPaciente.interface";
import { PacienteNotFound } from "../domain/validation/util/paciente.validation";

export class CasoUsoGetOnePaciente{
    constructor(private repositorio:IRepositorioPaciente){}

    async run(id:number):Promise<Paciente>{
        const paciente=await this.repositorio.getOneById(id)

        if (!paciente) {
            throw new PacienteNotFound(`${id} no encontrado!`)
        }

        return paciente
    }
}
