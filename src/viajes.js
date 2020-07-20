export class Viaje {
    kilometros
    tiempoMaximo
    cantPasajeros
    coloresInconpatibles
    _vehiculo
    constructor(km, tiempoMaximo, cantPasajeros, coloresInconpatibles) {
        this.kilometros = km
        this.tiempoMaximo = tiempoMaximo
        this.cantPasajeros = cantPasajeros
        this.coloresInconpatibles = coloresInconpatibles
    }
    asignarVehiculo(vehiculo){
      this._vehiculo = vehiculo
    }
    vehiculo(){
      return this._vehiculo
    }
    velocidadPromedio() {
        return this.kilometros / this.tiempoMaximo
    }
    noEsColorEsIncopatible(vehiculo) {
        return !this.coloresInconpatibles.some(color == vehiculo.color())
    }
    puedeHacerElViaje(vehiculo) {
        return this.esMayorOIgualALaVelocidadPromedio(vehiculo) && this.noEsColorEsIncopatible() 
        && this.tieneCapacidad()
    }
    esMayorOIgualALaVelocidadPromedio(vehiculo) {

        var velocidad = vehiculo.velocidadMaxima() + 10
        return velocidad > this.velocidadPromedio()
    }
    tieneCapacidad(vehiculo){
        return cantPasajeros >=  vehiculo.capacidad()
    }
    lugaresLibres(){
      return this._vehiculo.capacidad() - this.cantPasajeros 
    }
}