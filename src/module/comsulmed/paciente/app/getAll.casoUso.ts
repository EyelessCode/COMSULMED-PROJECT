import { Paciente } from "../domain/interface/paciente.interface";
import { IRepositorioPaciente } from "../domain/interface/repository/repositoryPaciente.interface";
import { mapToDomain } from "../domain/map/paciente.map";

export class CasoUsogetAllPaciente{
    constructor(private repositorio:IRepositorioPaciente){}
    
    async run():Promise<Paciente[]>{
        const pacientes=await this.repositorio.getAll()
        return pacientes.map(mapToDomain)
    }
}
