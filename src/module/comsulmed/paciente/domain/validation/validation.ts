import { PacienteAgeNegative, PacienteDate, PacienteDocument, PacienteIdNegative, PacienteUnnamed } from "./util/paciente.validation";

function codigoAndEdadNegativo(codigoAndEdad:number):any {
    if (codigoAndEdad<=0) {
        throw new PacienteIdNegative(`El ID/Código no puede ser negativo!`)
    }

    if (codigoAndEdad<=0) {
        throw new PacienteAgeNegative(`La Edad no puede ser negativo!`)
    }

}

function nombreApellidoAndCedulaValidator(nombresAndApellidos:string):any {
    if (nombresAndApellidos.length<=0||!nombresAndApellidos||nombresAndApellidos.trim()==='') {
        throw new PacienteUnnamed(`El nombre no puede estar vacío!`)
    }

    if (nombresAndApellidos.length>30) {
        throw new PacienteUnnamed(`El nombre no puede exceder los 30 caracteres!`)
    }

    if (nombresAndApellidos.length===10) {
        throw new PacienteDocument(`La cédula tiene que tener 10 dígitos!`)
    }

}

function fechaNoFutura(fecha:string):any {
    const f=new Date(fecha)
    const hoy=new Date() 
    if (isNaN(f.getTime())) {
        throw new PacienteDate(`Formato de Fecha inválido!`)
    }

    if (f>hoy) {
        throw new PacienteDate(`La fecha no puede ser futura`)
    }

}

export {codigoAndEdadNegativo,nombreApellidoAndCedulaValidator,fechaNoFutura}
