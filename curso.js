let cursos = [
    { id: 555, nombrecurso: 'Python', duracion: 72, valor: 320000 },
    { id: 333, nombrecurso: 'Programación', duracion: 45, valor: 230000 },
    { id: 999, nombrecurso: 'Adobe Photoshop', duracion: 20, valor: 185000 }
]

setInformacionCurso = (id, nombre, duracion, valor) => {
    let curso = 'curso identificado con código: ' + id +
        ' y nombre: ' + nombre + ', el cual tiene una duración de: ' + duracion + ' horas' +
        ' y un valor de: ' + valor + ' pesos';
    return curso;

}
mostrarInformacionCurso = (id, nombre, duracion, valor, espera = 2000) => {
    setTimeout(function () {
        let resultado = setInformacionCurso(id, nombre, duracion, valor.toLocaleString());
        console.log(resultado)
    }, espera);
}

buscarCurso = (numero_curso) => {
    curso = cursos.find(curso => curso.id == numero_curso)
    if (typeof curso == 'undefined') {
        return 'curso no encontrado'
    } else {
        return curso
    }
}

module.exports = {
    cursos,
    mostrarInformacionCurso,
    buscarCurso,
    setInformacionCurso
};