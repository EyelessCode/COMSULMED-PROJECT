import { PacienteAgeNegative, PacienteIdNegative, PacienteUnnamed } from "./util/paciente.validation";

function codigoAndEdadNegativo(codigoAndEdad:number) {
    if (codigoAndEdad<=0) {
        throw new PacienteIdNegative(`El ID/Código no puede ser negativo!`)
    }

    if (codigoAndEdad<=0) {
        throw new PacienteAgeNegative(`La Edad no puede ser negativo!`)
    }
}

function nombreAndApellidoValidator(nombresAndApellidos:string) {
    if (nombresAndApellidos.length<=0||!nombresAndApellidos||nombresAndApellidos.trim()==='') {
        throw new PacienteUnnamed(`El nombre no puede estar vacío!`)
    }

    if (nombresAndApellidos.length>30) {
        throw new PacienteUnnamed(`El nombre no puede exceder los 30 caracteres!`)
    }
}

export {codigoAndEdadNegativo,nombreAndApellidoValidator}
