import { CasoUsoCreatePaciente } from "../../module/comsulmed/paciente/app/create.casoUso";
import { CasoUsoDeletePaciente } from "../../module/comsulmed/paciente/app/delete.casoUso";
import { CasoUsoEditPaciente } from "../../module/comsulmed/paciente/app/edit.casoUso";
import { CasoUsogetAllPaciente } from "../../module/comsulmed/paciente/app/getAll.casoUso";
import { CasoUsoGetOnePaciente } from "../../module/comsulmed/paciente/app/getOne.casoUso";
import { RepositorioTestPaciente } from "../../module/comsulmed/paciente/infrastructure/test/repository/repository.test";

const repositorio=new RepositorioTestPaciente()
// const repositorio=new RepositorioTestPaciente()

const ContenedorServicio={
    paciente:{
        getAll:new CasoUsogetAllPaciente(repositorio),
        getOne:new CasoUsoGetOnePaciente(repositorio),
        create:new CasoUsoCreatePaciente(repositorio),
        edit:new CasoUsoEditPaciente(repositorio),
        delete:new CasoUsoDeletePaciente(repositorio)
    }
}

export{ContenedorServicio}
