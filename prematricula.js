const { buscarCurso, mostrarInformacionCurso } = require('./curso.js');
const { crearArchivo } = require('./exportarcurso.js');
const { InformacionDeCursos } = require('./informacioncursos.js');
const opciones = {
    id_curso: {
        demand: true,
        alias: 'i'
    },
    nombre: {
        demand: true,
        alias: 'n'
    },
    cedula: {
        demand: true,
        alias: 'c'
    }
}
const argumento = require('yargs')
    .command('inscribir', 'Inscribir curso', opciones)
    .argv

if (argumento.id_curso) {
    curso = buscarCurso(argumento.id_curso)
    if (curso == 'curso no encontrado') {
        console.log("Curso no encontrado")
        console.log("A continuacion la lista  de cursos disponibles: ")
        InformacionDeCursos()
    }else {
        mostrarInformacionCurso(curso.id, curso.nombrecurso, curso.duracion, curso.valor)
        crearArchivo(curso, argumento.nombre, argumento.cedula)
    }
}
if (argumento._[0] != 'inscribir') {
    console.log("A continuación la lista  de cursos disponibles: ")
    InformacionDeCursos()
}
