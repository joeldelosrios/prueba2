const {cursos,mostrarInformacionCurso} = require('./curso.js');

InformacionDeCursos=()=>cursos.forEach((key,index) => {
   espera=2000*(index+1)
   mostrarInformacionCurso(key.id,key.nombrecurso,key.duracion,key.valor,espera)
})

module.exports = {
    InformacionDeCursos
};