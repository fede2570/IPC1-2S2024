class Profesor {

    constructor(codigo, nombre, password) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.password = password;
    }

    getCodigo() {
        return this.codigo;
    }

    getPassword() {
        return this.password;
    }

}

module.exports = Profesor