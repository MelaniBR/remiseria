export class ChevroletCorsa {
    _color
    constructor (color){
      this._color = color
    }
    capacidad() {
        return 4
    }
    velocidadMaxima() {
        return 150
    }
    peso() {
       return 1300
    }
    color(){
      return this._color
    }
}
export class AutoStandard {
    _tanqueAdicional = new NullTanque()
    _peso = 1200
    _color = "gris"
   agregarTanqueAdicional(){
     this._tanqueAdicional = new Tanque() 
   }

    capacidad() {
        return this._tanqueAdicional.capacidad()
    }
    peso() {
        return this._peso + this._tanqueAdicional.peso()
    }
    color(){
      return this._color
    }
  velocidadMaxima() {
        return this._tanqueAdicional.velocidadMaxima()
    }
}

export class Trafic {
    _interior
    _motor
    _peso = 4000
    constructor(interior, motor) {
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
        return this._peso + this._motor.peso() + this._interior.peso()
    }
    color(){
        return "blanco"
    }
}
export class Motor {
    constructor(velocidad,peso) {
        this._velocidadMaxima = velocidad
        this._peso  = peso 
    }
   
    velocidadMaxima() {
        return this._velocidadMaxima
    }
    peso() {
        return this._peso
    }
}

export class Interior {
    constructor(capacidad , peso) {
        this._capacidad = capacidad
        this._peso  = peso 
    }
    capacidad() {
        return this._capacidad 
    }
   
    peso() {
        return this._peso
    }
}
export class NullTanque{
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
      return  3 
    }
    velocidadMaxima() {
        return 110
    }
    peso() {
        return 150
    }
}
export class AutoDistinto {
    
    constructor (color,capacidad,velocidadMaxima,peso){
      this._color = color
      this._capacidad = capacidad
      this._peso = peso
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
    color(){
      return this._color
    }
}
