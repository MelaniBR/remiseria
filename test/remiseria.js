import { expect,assert} from "chai"
import { describe,beforeEach } from "mocha"
import {Remiseria } from "../src/remiseria"
import {ChevroletCorsa,AutoStandard,Trafic,Tanque,Interior, Motor,AutoDistinto} from "../src/autos"
  

describe("Remiseria ", function () {
  var remiseria 
  var popular 
  var bataton 
  var trafic 
  var autoStandard 
  var chevrolet
  var pulenta
  var trafic2
  
  beforeEach(() =>  {
  remiseria = new Remiseria()
  trafic2 = new Trafic(popular ,bataton)
  bataton = new Motor ( 80, 500)
  popular = new Interior (12, 1000)
  autoStandard = new AutoStandard()
  pulenta = new Motor ( 130,800)
  autoStandard.agregarTanqueAdicional()
  trafic = new Trafic(popular,pulenta)
  chevrolet = new ChevroletCorsa("rojo")
  
  })




  it("agregar vehiculo",() => {
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
      remiseria.agregarFlota(trafic2)
      remiseria.agregarFlota(chevrolet)
      remiseria.agregarFlota(autoStandard)
      expect(remiseria.esRecomendable()).to.be.false;
    
      })
  it("Remiseria  es recomendable ", () =>  {
      remiseria.agregarFlota(trafic)
      remiseria.agregarFlota(chevrolet)
      remiseria.agregarFlota(autoStandard)
      expect(remiseria.esRecomendable()).to.be.true;
    
      })
   
})