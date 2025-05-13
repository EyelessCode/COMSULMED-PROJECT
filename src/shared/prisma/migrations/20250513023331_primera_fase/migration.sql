-- CreateTable
CREATE TABLE "usuario" (
    "codigo" SERIAL NOT NULL,

    CONSTRAINT "usuario_pkey" PRIMARY KEY ("codigo")
);

-- CreateTable
CREATE TABLE "centroMedico" (
    "codigo" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "direccion" TEXT NOT NULL,
    "telefono" TEXT NOT NULL,
    "RUC" TEXT NOT NULL,

    CONSTRAINT "centroMedico_pkey" PRIMARY KEY ("codigo")
);

-- CreateTable
CREATE TABLE "paciente" (
    "codigo" SERIAL NOT NULL,
    "cedula" TEXT NOT NULL,
    "nombres" TEXT NOT NULL,
    "fechaNacimiento" TEXT NOT NULL,
    "apellidos" TEXT NOT NULL,
    "edad" INTEGER NOT NULL,
    "genero" TEXT NOT NULL,
    "telefono" TEXT NOT NULL,
    "tipoSangre" TEXT NOT NULL,
    "direccion" TEXT DEFAULT '',
    "correo" TEXT NOT NULL,
    "ocupacion" TEXT DEFAULT 'ninguno',

    CONSTRAINT "paciente_pkey" PRIMARY KEY ("codigo")
);

-- CreateTable
CREATE TABLE "enfermera" (
    "codigo" SERIAL NOT NULL,
    "cedula" TEXT NOT NULL,
    "nombres" TEXT NOT NULL,
    "apellidos" TEXT NOT NULL,
    "correo" TEXT NOT NULL,
    "especialidad" TEXT NOT NULL,

    CONSTRAINT "enfermera_pkey" PRIMARY KEY ("codigo")
);

-- CreateTable
CREATE TABLE "tipoSignos" (
    "codigo" SERIAL NOT NULL,
    "descripcion" TEXT NOT NULL,
    "unidad" TEXT NOT NULL,
    "valorMinimo" DOUBLE PRECISION NOT NULL,
    "valorMaximo" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "tipoSignos_pkey" PRIMARY KEY ("codigo")
);

-- CreateTable
CREATE TABLE "tomaSignos" (
    "numero" SERIAL NOT NULL,
    "fecha" TEXT NOT NULL,
    "centroMedicoId" INTEGER NOT NULL,
    "pacienteId" INTEGER NOT NULL,
    "enfermeraId" INTEGER NOT NULL,
    "observacion" TEXT NOT NULL,

    CONSTRAINT "tomaSignos_pkey" PRIMARY KEY ("numero")
);

-- CreateTable
CREATE TABLE "signosPacientes" (
    "linea" SERIAL NOT NULL,
    "valor" DOUBLE PRECISION NOT NULL,
    "tipoSignoId" INTEGER NOT NULL,
    "tomaSignosId" INTEGER NOT NULL,
    "fecha" TEXT NOT NULL,
    "comentario" TEXT DEFAULT '',

    CONSTRAINT "signosPacientes_pkey" PRIMARY KEY ("linea")
);

-- CreateIndex
CREATE UNIQUE INDEX "centroMedico_RUC_key" ON "centroMedico"("RUC");

-- CreateIndex
CREATE UNIQUE INDEX "paciente_cedula_key" ON "paciente"("cedula");

-- CreateIndex
CREATE UNIQUE INDEX "paciente_correo_key" ON "paciente"("correo");

-- CreateIndex
CREATE UNIQUE INDEX "enfermera_cedula_key" ON "enfermera"("cedula");

-- CreateIndex
CREATE UNIQUE INDEX "enfermera_correo_key" ON "enfermera"("correo");

-- AddForeignKey
ALTER TABLE "tomaSignos" ADD CONSTRAINT "tomaSignos_centroMedicoId_fkey" FOREIGN KEY ("centroMedicoId") REFERENCES "centroMedico"("codigo") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tomaSignos" ADD CONSTRAINT "tomaSignos_pacienteId_fkey" FOREIGN KEY ("pacienteId") REFERENCES "paciente"("codigo") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tomaSignos" ADD CONSTRAINT "tomaSignos_enfermeraId_fkey" FOREIGN KEY ("enfermeraId") REFERENCES "enfermera"("codigo") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "signosPacientes" ADD CONSTRAINT "signosPacientes_tipoSignoId_fkey" FOREIGN KEY ("tipoSignoId") REFERENCES "tipoSignos"("codigo") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "signosPacientes" ADD CONSTRAINT "signosPacientes_tomaSignosId_fkey" FOREIGN KEY ("tomaSignosId") REFERENCES "tomaSignos"("numero") ON DELETE RESTRICT ON UPDATE CASCADE;
