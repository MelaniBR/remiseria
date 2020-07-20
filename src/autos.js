class Auto {

    _color
    _peso
    _capacidad
    _velocidadMaxima

    constructor(color, peso, capacidad, velocidadMaxima) {
        this._color = color
        this._peso = peso
        this._capacidad = capacidad
        this._velocidadMaxima = velocidadMaxima
    }

    capacidad() {
        return this._capacidad
    }

    velocidadMaxima() {
        return this._velocidadMaxima
    }

    peso() {
        return this._peso
    }

    color() {
        return this._color
    }
}


export class ChevroletCorsa extends Auto {

    constructor(color) {
        super(color, 1300, 4, 150)
    }

}
export class AutoStandard extends Auto {

    _tanqueAdicional = new NullTanque()

    constructor(color) {
        super(color, 1200)
    }

    agregarTanqueAdicional() {
        this._tanqueAdicional = new Tanque()
    }

    capacidad() {
        return this._tanqueAdicional.capacidad()
    }

    peso() {
        return this._peso + this._tanqueAdicional.peso()
    }

    color() {
        return this._color
    }

    velocidadMaxima() {
        return this._tanqueAdicional.velocidadMaxima()
    }
}

export class Trafic extends Auto {
    _interior
    _motor

    constructor(interior, motor) {
        super("blanco", 4000)
        this._interior = interior
        this._motor = motor
    }

    capacidad() {
        return this._interior.capacidad()
    }

    velocidadMaxima() {
        return this._motor.velocidadMaxima()
    }

    peso() {
        return super.peso() + this._motor.peso() + this._interior.peso()
    }

}

export class Motor {

    constructor(velocidad, peso) {
        this._velocidadMaxima = velocidad
        this._peso = peso
    }

    velocidadMaxima() {
        return this._velocidadMaxima
    }

    peso() {
        return this._peso
    }
}

export class Interior {

    constructor(capacidad, peso) {
        this._capacidad = capacidad
        this._peso = peso
    }

    capacidad() {
        return this._capacidad
    }

    peso() {
        return this._peso
    }
}

export class NullTanque {
  
    capacidad() {
        return 4
    }
  
    velocidadMaxima() {
        return 120
    }
  
    peso() {
        return 0
    }
}
export class Tanque {

    capacidad() {
        return 3
    }
  
    velocidadMaxima() {
        return 110
    }

    peso() {
        return 150
    }
}
export class AutoDistinto extends Auto {

}
