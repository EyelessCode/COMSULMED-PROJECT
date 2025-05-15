import { Paciente } from "../../../domain/interface/paciente.interface";
import { IRepositorioTestPaciente } from "../../../domain/interface/repository/repositoryPaciente.interface";

export class RepositorioTestPaciente implements IRepositorioTestPaciente{
    private paciente:Paciente[]=[]

    async getAll(): Promise<Paciente[]> {
        throw new Error("Method not implemented.");
    }

    async getOneById(id: number): Promise<Paciente | null> {
        throw new Error("Method not implemented.");
    }

    async create(student: Paciente): Promise<void> {
        throw new Error("Method not implemented.");
    }

    async edit(student: Paciente): Promise<void> {
        throw new Error("Method not implemented.");
    }

    async delete(id: number): Promise<void> {
        throw new Error("Method not implemented.");
    }
}
