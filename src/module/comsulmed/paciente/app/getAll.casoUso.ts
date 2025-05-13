import { Paciente } from "../domain/interface/paciente.interface";
import { IRepositorioPaciente } from "../domain/interface/repository/repositoryPaciente.interface";

export class CasoUsogetAllPaciente{
    constructor(private repositorio:IRepositorioPaciente){}
    
    async run():Promise<Paciente[]>{
        return this.repositorio.getAll()
    }
}
