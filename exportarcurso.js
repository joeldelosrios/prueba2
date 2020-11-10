const { setInformacionCurso } = require('./curso.js');
const fs = require('fs');

let crearArchivo = (curso, nombre, cedula) => {
    let { id, nombrecurso, duracion, valor } = curso
    candidato = 'El(La) estudiante: ' + nombre + ' con número de identificación: ' + cedula + ' ha inscrito el '
    infocurso = setInformacionCurso(id, nombrecurso, duracion, valor)
    texto = candidato + infocurso
    fs.writeFile('prematriculacurso' + nombrecurso + '.txt', texto, (err) => {
        if (err) throw (err);
        console.log('Se generó documento con información de la prematricula para el curso: ' + nombrecurso)
    });
}

module.exports = {
    crearArchivo
};