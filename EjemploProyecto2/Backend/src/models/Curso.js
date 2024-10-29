class Curso {

    constructor(codigo, nombre, codigo_profesor) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.codigo_profesor = codigo_profesor;
        this.listaEstudiantes = []
        this.listaActividades = []
    }
}

module.exports = Curso