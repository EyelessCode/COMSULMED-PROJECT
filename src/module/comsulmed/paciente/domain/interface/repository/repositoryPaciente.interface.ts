import { paciente } from "@prisma/client"
import { Paciente } from "../paciente.interface"

export interface IRepositorioPaciente{
    getAll():Promise<paciente[]>
    getOneById(id:number):Promise<paciente|null>
    create(paciente:paciente):Promise<void>
    edit(paciente:paciente):Promise<void>
    delete(id:number):Promise<void>
}

export interface IRepositorioTestPaciente{
    getAll():Promise<Paciente[]>
    getOneById(id:number):Promise<Paciente|null>
    create(paciente:Paciente):Promise<void>
    edit(paciente:Paciente):Promise<void>
    delete(id:number):Promise<void>
}
