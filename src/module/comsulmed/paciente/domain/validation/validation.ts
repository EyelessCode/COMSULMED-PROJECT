import { PacienteIdNegative, PacienteUnnamed } from "./util/paciente.validation";

function codigoNegativo(codigo:number) {
    if (codigo<=0) {
        throw new PacienteIdNegative(`El ID/Código no puede ser negativo!`)
    }
}

function nombreVacioAndMayor(nombres:string) {
    if (nombres.length<=0||!nombres||nombres.trim()==='') {
        throw new PacienteUnnamed(`El nombre no puede estar vacío!`)
    }

    if (nombres.length>30) {
        throw new PacienteUnnamed(`El nombre no puede exceder los 30 caracteres!`)
    }
}

export {codigoNegativo,nombreVacioAndMayor}
