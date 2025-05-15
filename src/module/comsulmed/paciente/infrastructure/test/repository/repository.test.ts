import { Paciente } from "../../../domain/interface/paciente.interface";
import { IRepositorioTestPaciente } from "../../../domain/interface/repository/repositoryPaciente.interface";
import { PacienteNotFound } from "../../../domain/validation/util/paciente.validation";

export class RepositorioTestPaciente implements IRepositorioTestPaciente{
    private pacientes:Paciente[]=[]

    async getAll(): Promise<Paciente[]> {
        // throw new Error("Method not implemented.");
        return this.pacientes
    }

    async getOneById(id: number): Promise<Paciente | null> {
        // throw new Error("Method not implemented.");
        return this.pacientes.find((pacienteId)=>pacienteId.codigo===id)||null
    }

    async create(paciente: Paciente): Promise<void> {
        // throw new Error("Method not implemented.");
        this.pacientes.push(paciente)
    }

    async edit(paciente: Paciente): Promise<void> {
        // throw new Error("Method not implemented.");
        if (!paciente.codigo) {
            throw new PacienteNotFound(`${paciente.codigo} no encontrado!`)
        }

        const index=this.pacientes.findIndex((i)=>i.codigo===Number(paciente.codigo))
        this.pacientes[index]=paciente
    }

    async delete(id: number): Promise<void> {
        // throw new Error("Method not implemented.");
        if (!id) {
            throw new PacienteNotFound(`${id} no encontrado!`)
        }

        this.pacientes=this.pacientes.filter((remove)=>remove.codigo!==id)
    }
}
