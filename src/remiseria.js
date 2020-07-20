class Remiseria {
    vehiculos = ArrayList()
    agregarFlota(vehiculo) {
        this.vehiculos.push(vehiculo)
    }
    quitarDeFlota(vehiculo) {
        var i = this.vehiculos.indexOf(vehiculo);
        arr.splice(i, vehiculo);
    }
    esRecomendable() {
        return this.tieneAlMenos3() && this.puedenIrA100()
    }
    tieneAlMenos3() {
        return vehiculos.lenght >= 3
    }
    puedenIrA100() {
        this.vehiculos.every(vehiculo => vehiculo.velocidadMaxima() >= 100)
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
}