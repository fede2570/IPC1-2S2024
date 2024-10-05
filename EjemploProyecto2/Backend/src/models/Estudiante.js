class Estudiante {

    constructor(carnet, nombre, correo, password) {
        this.carnet = carnet;
        this.nombre = nombre;
        this.correo = correo;
        this.password = password;
    }

    getCarnet() {
        return this.carnet;
    }

    setCarnet(carnet) {
        this.carnet = carnet;
    }

    getPassword() {
        return this.password;
    }
}

module.exports = Estudiante;