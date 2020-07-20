import { expect } from "chai"
import { describe } from "mocha"
import {ChevroletCorsa,AutoStandard,Trafic,Tanque,Interior,Motor,NullTanque,AutoDistinto } from "../src/autos"

describe("vehiculos - configuraciones", () => {

    it("configuracion de Chevrolet Corsa ", () => {
        var chevrolet = new ChevroletCorsa("rosa")
        
        expect(chevrolet.velocidadMaxima()).to.equal(150)
        expect(chevrolet.capacidad()).to.equal(4)
        expect(chevrolet.peso()).to.equal(1300)


    })
    it("configuracion de Auto Standard  ", () => {
       var autoStandard = new AutoStandard()
        
      expect(autoStandard.velocidadMaxima()).to.equal(120)
      expect(autoStandard.capacidad()).to.equal(4)
      expect(autoStandard.peso()).to.equal(1200)


    })
   it("configuracion de Auto Standard con Tanque Adicional  ", () => {         
       
        var autoStandard = new AutoStandard()
        autoStandard.agregarTanqueAdicional()
        expect(autoStandard.velocidadMaxima()).to.equal(110)
        expect(autoStandard.capacidad()).to.equal(3)
        expect(autoStandard.peso()).to.equal(1350)


    })
    it("configuracion de Trafic comoda y pulenta ", () => {
       
        var comodo =  new Interior (5, 700)
        var pulenta = new Motor ( 130,800)
        var trafic = new Trafic(comodo, pulenta)

        expect(trafic.velocidadMaxima()).to.equal(130)
        expect(trafic.capacidad()).to.equal(5)
        expect(trafic.peso()).to.equal(5500)


    })
     it("configuracion de Trafic popular y bataton ", () => {
       
        var popular = new Interior (12, 1000)
        var bataton = new Motor ( 80, 500)
        var trafic = new Trafic(popular,bataton)
        expect(trafic.velocidadMaxima()).to.equal(80)
        expect(trafic.capacidad()).to.equal(12)
        expect(trafic.peso()).to.equal(5500)


    })
    it("configuracion de autoDistinto ", () => {
       
        
        var autoDistinto = new AutoDistinto("beige",4,100,1200)
        expect(autoDistinto.velocidadMaxima()).to.equal(100)
        expect(autoDistinto.capacidad()).to.equal(4)
        expect(autoDistinto.peso()).to.equal(1200)


    })

});