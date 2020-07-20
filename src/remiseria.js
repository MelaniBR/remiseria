export class Remiseria {
    vehiculos = []
    viajes = []
    minimoDeViaje = 30
    
    agregarFlota(vehiculo) {
        this.vehiculos.push(vehiculo)
    }
    quitarDeFlota(vehiculo) {
        var i = this.vehiculos.indexOf(vehiculo);
       this.vehiculos.splice(i, vehiculo);
    }
    esRecomendable() {
        return this.tieneAlMenos3()  &&this.puedenIrA100()
    }
    tieneAlMenos3() {
        return this.cantVehiculos() >= 3
    }
    puedenIrA100() {
      return  this.vehiculos.every(vehiculo => vehiculo.velocidadMaxima() >= 100)
    }
    capacidadTotalYendoA(velocidad) {
        capacidadTotal = 0
        lista = this.velocidadMaximaMayorOIgual(velocidad)
        lista.forEach(vehiculo => { capacidadTotal = + vehiculo.capacidad() });
        return capacidadTotal

    }
    velocidadMaximaMayorOIgual(velocidad) {
        return this.vehiculos.filter(vehiculo => vehiculo.velocidadMaxima() >= velocidad)

    }
    colorDelAutoMasRapido() {
        var maxValue = this.vehiculos[0]
        for (var i = 1; i < myArray.length; i++) {
            var currentValue = myArray[i];
            if (currentValue.velocidadMaxima() > maxValue.velocidadMaxima()) {
                maxValue = currentValue;
            }
        }
    }
    
    cantVehiculos(){
      return this.vehiculos.length
    }
    puedeHacerElViaje(viaje,vehiculo){
      return viaje.puedeHacerElViaje(vehiculo)
    }
	
  cantDeViajesHechosConMas(kilometros) {
		return  this.viajesHechosConMasDe(kilometros).length
	}
	
	 viajesHechosConMas(km) {
		return this.viajes.filter(viaje => viaje.kilometros() > km) 
	}
  precioPorViaje(viaje){
    return Math.max(this.valorPorKilometro(viaje), this.minimoDeViaje)
  }

	 pagaTotalA(vehiculo) {
		return this.precioTotalDeViajes(this.viajesHechosCon(vehiculo))
	}
	
	 precioTotalDeViajes(viajes) {
     total = 0 
     viajes.forEach(viaje => total =+ this.precioPorViaje(viaje))
		return total
	}
	
	cantViajes(vehiculo){
     return this.viajesHechosCon(vehiculo).length
    }
    viajesHechosCon(vehiculo){
      return viajes.filter(viaje => viaje.vehiculo() == vehiculo)
    }

	
  valorPorKilometros(viaje) {
		return  this.valorPorKm * viaje.kilometros() 
	}
  registrarViaje(viaje,vehiculo){
      viaje.asignarVehiculo(vehiculo)
      viajes.push(viaje)
    }
    
    
    lugaresLibres(){
      var lugaresLibresTotal = 0
      viajes.forEach(viaje => lugaresLibresTotal += viaje.lugaresLibres() )
    }
}