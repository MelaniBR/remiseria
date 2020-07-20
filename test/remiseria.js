import { expect } from "chai"
import { describe, beforeEach } from "mocha"
import { Remiseria } from "../src/remiseria"
import { ChevroletCorsa, AutoStandard, Trafic, Interior, Motor, AutoDistinto } from "../src/autos"

describe("Remiseria ", function () {

    var remiseria
    var popular
    var trafic
    var autoStandard
    var chevrolet
    var pulenta
    var autoDistinto

    beforeEach(() => {

        remiseria = new Remiseria()
        popular = new Interior(12, 1000)
        autoStandard = new AutoStandard()
        pulenta = new Motor(130, 800)
        autoStandard.agregarTanqueAdicional()
        trafic = new Trafic(popular, pulenta)
        chevrolet = new ChevroletCorsa("rojo")
        autoDistinto = new AutoDistinto("beige", 1000, 3, 80)
    })

    it("agregar vehiculo", () => {
        remiseria.agregarFlota(trafic)
        expect(remiseria.cantVehiculos()).to.equal(1)

    })

    it("Remiseria no es recomendable porque no tiene mas de 3 autos ", () => {
        remiseria.agregarFlota(trafic)
        expect(remiseria.esRecomendable()).to.be.false;

    })

    it("Remiseria no es recomendable porque no tiene mas de 3 autos ", () => {
        remiseria.agregarFlota(trafic)
        expect(remiseria.esRecomendable()).to.be.false;

    })

    it("Remiseria no es recomendable porque trafic no supera la velocidad de 100 ", () => {
        remiseria.agregarFlota(autoDistinto)
        remiseria.agregarFlota(chevrolet)
        remiseria.agregarFlota(autoStandard)
        expect(remiseria.esRecomendable()).to.be.false;

    })

    it("Remiseria  es recomendable ", () => {
        remiseria.agregarFlota(trafic)
        remiseria.agregarFlota(chevrolet)
        remiseria.agregarFlota(autoStandard)
        expect(remiseria.esRecomendable()).to.be.true;

    })

    it("Capacidad total , con una velocidad de 100", () => {
        remiseria.agregarFlota(autoDistinto) // no cuenta 
        remiseria.agregarFlota(chevrolet) // 4
        remiseria.agregarFlota(autoStandard) //3
        expect(remiseria.capacidadTotalYendoA(100)).to.equal(7)

    })

    it("el color del auto mas rapido es rojo ", () => {
        remiseria.agregarFlota(autoDistinto)
        remiseria.agregarFlota(chevrolet)

        expect(remiseria.colorDelAutoMasRapido()).to.equal("rojo")

    })
})