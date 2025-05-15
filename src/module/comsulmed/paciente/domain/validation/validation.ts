import { PacienteInvalidAddress, PacienteInvalidBloodType, PacienteInvalidDate, PacienteInvalidDocument,
    PacienteInvalidEmail, PacienteInvalidGenre, PacienteInvalidOccupation, PacienteNegativeNumber, PacienteUnnamed } from "./util/paciente.validation";

function codigoAndEdadNegativo(codigoAndEdad:number):any {
    if (codigoAndEdad<=0) {
        throw new PacienteNegativeNumber(`El dígito no puede ser negativo!`)
    }
}

function nombreApellidoAndCedulaValidator(nombresAndApellidos:string):any {
    if (nombresAndApellidos.length<=0||!nombresAndApellidos||nombresAndApellidos.trim()==='') {
        throw new PacienteUnnamed(`El nombre no puede estar vacío!`)
    }

    if (nombresAndApellidos.length>30) {
        throw new PacienteUnnamed(`El nombre no puede exceder los 30 caracteres!`)
    }
}

function cedulaValido(cedula:string):any {
    if (cedula.length!==10) {
        throw new PacienteInvalidDocument(`La cédula tiene que tener 10 dígitos!`)
    }
}

function fechaNoFutura(fecha:string):any {
    const f=new Date(fecha)
    const hoy=new Date() 
    if (isNaN(f.getTime())) {
        throw new PacienteInvalidDate(`Formato de Fecha inválido!`)
    }

    if (f>hoy) {
        throw new PacienteInvalidDate(`La fecha no puede ser futura`)
    }
}

function generoValido(genero:string):any {
    if (genero!=="masculino"||"femenino"||"MASCULINO"||"FEMENINO") {
        throw new PacienteInvalidGenre(`El género ingresado es inválido!`)
    }
}

function telefonoValido(telefono:string):any {
    if (telefono.length<=0) {
        throw new PacienteNegativeNumber(`El dígito no puede ser negativo!`)
    }

    if (telefono.length!==10) {
        throw new PacienteInvalidDocument(`El número de teléfono tiene que tener 10 dígitos!`)
    }
}

function tipoSangreValido(tipoSangre:string):any {
    if (tipoSangre!=="A+"||"A-"||"B+"||"B-"||"AB+"||"AB-"||"O+"||"O-") {
        throw new PacienteInvalidBloodType(`El tipo de sangre ingresado es inválido!`)
    }
}

function dirrecionValido(direccion:string):any {
    if (direccion.length>=50) {
        throw new PacienteInvalidAddress(`La dirreción excede a la cantidad de caractéres permitidos!`)
    }
}

function correoValido(correo:string):any {
    if (correo.length>=30) {
        throw new PacienteInvalidEmail(`El correo no puede exceder los 30 caracteres!`)
    }

    if (!correo.includes("@")) {
        throw new PacienteInvalidEmail(`Falta el '@' para un correo válido!`)
    }

    if (!correo.includes(".")) {
        throw new PacienteInvalidEmail(`Falta el '.' para un correo válido!`)
    }
}

function ocupacionValida(ocupacion:string):any {
    if (ocupacion.length>=30) {
        throw new PacienteInvalidOccupation(`Un tipo de ocupación no puede exceder los 30 caracteres!`)
    }
}

export {codigoAndEdadNegativo,nombreApellidoAndCedulaValidator,fechaNoFutura,
    generoValido,telefonoValido,cedulaValido,tipoSangreValido,dirrecionValido,
    correoValido,ocupacionValida
}
