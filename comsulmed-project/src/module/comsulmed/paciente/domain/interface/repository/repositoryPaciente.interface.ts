import { paciente } from "@prisma/client"

export interface IRepositorioPaciente{
    getAll():Promise<paciente[]>
    getOneById(id:number):Promise<paciente|null>
    create(student:paciente):Promise<void>
    edit(student:paciente):Promise<void>
    delete(id:number):Promise<void>
}
