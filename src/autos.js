class ChevroletCorsa {
    capacidad() {
        return 4
    }
    velocidadMaxima() {
        return 150
    }
    peso() {
       return 1300
    }
}
class AutosStandard {
    capicidad = 4
    velocidadMaxima = 120
    peso = 1200
    capacidad() {
        return this.capacidad
    }
    velocidadMaxima() {
        return this.velocidadMaxima
    }
    peso() {
        return this.peso
    }

}
class Trafic {
    interior
    motor
    peso = 4000
    constructor(interior, motor) {
        this.interior = interior
        this.motor = motor
    }
    capacidad() {
        return this.interior.capacidad()
    }
    velocidadMaxima() {
        return this.motor.velocidadMaxima()
    }
    peso() {
        return this.peso + this.motor.peso() + this.interior.peso()
    }
    color(){
        return "blanco"
    }
}
class Tanque {
    constructor(peso, velocidad) {
        this.velocidad = velocidad
        this.peso  = peso 
    }
}
class Interior {
    constructor(peso, capicidad) {
        this.capicidad = capicidad
        this.peso  = peso 
    }
}