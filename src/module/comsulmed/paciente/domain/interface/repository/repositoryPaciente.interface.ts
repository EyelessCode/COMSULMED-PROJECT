import { paciente } from "@prisma/client"
import { Paciente } from "../paciente.interface"

export interface IRepositorioPaciente{
    getAll():Promise<paciente[]>
    getOneById(id:number):Promise<paciente|null>
    create(student:paciente):Promise<void>
    edit(student:paciente):Promise<void>
    delete(id:number):Promise<void>
}

export interface IRepositorioTestPaciente{
    getAll():Promise<Paciente[]>
    getOneById(id:number):Promise<Paciente|null>
    create(student:Paciente):Promise<void>
    edit(student:Paciente):Promise<void>
    delete(id:number):Promise<void>
}
