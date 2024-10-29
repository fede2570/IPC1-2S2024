class Actividad {
    constructor(nombre, descripcion, ponderacion, profesor) {
        this.nombre = nombre
        this.descripcion = descripcion
        this.ponderacion = ponderacion
        this.profesor = profesor
        this.listaNotas = []
    }
}

module.exports = Actividad