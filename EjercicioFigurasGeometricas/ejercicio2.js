class FigurasGeometricas{
    constructor(pNombre){
        this.nombre=pNombre

    }

    area(){
        console.log("Esta figura tiene un area y es:")
    }
    perimetro(){
        console.log("Esta figura tiene un perimetro y es:")
    }


}

class Circulo extends FigurasGeometricas{
    constructor(pNombre, pPi, pRadio){
        super(pNombre)
        this.pi=parseFloat(pPi)
        this.radio=parseInt(pRadio)
    }
    area(){

        let resultadoAreaCir=this.pi*Math.pow(this.radio, 2)
        return resultadoAreaCir

    }

    perimetro(){

        let resultadoPerimetroCir= 2*this.pi*this.radio
        return resultadoPerimetroCir

    }

    areaYperimetro(){
        
        console.log("El area es: " + this.area()+ " \n El perimetro es: "+ this.perimetro() )
    }
}
class Rectangulo extends FigurasGeometricas{
    constructor(pNombre, pLargo, pAncho){
        super(pNombre)
        this.largo=parseInt(pLargo)
        this.ancho=parseInt(pAncho)
    }
    area(){

        let resultadoAreaRectangulo=this.largo*this.ancho
        return resultadoAreaRectangulo

    }

    perimetro(){

        let resultadoPerimetroRectangulo= (2*this.largo)+(2*this.ancho)
        return resultadoPerimetroRectangulo

    }

    areaYperimetro(){
        
        console.log("El area es: " + this.area() + "\n  El perimetro es: "+ this.perimetro() )
    }
}
class Cuadrado extends FigurasGeometricas{

    constructor(pNombre, pLados){
        super(pNombre)
        this.lados=parseInt(pLados)
    }
    area(){

        let resultadoAreaCuadrado=2*this.lados

        return resultadoAreaCuadrado

    }

    perimetro(){

        let resultadoPerimetroCuadrado= 4*this.lados
        return resultadoPerimetroCuadrado

    }

    areaYperimetro(){
        
        console.log("El area es: " + this.area()+ "\n  El perimetro es: "+ this.perimetro() )
    }
}

cir= new Circulo("circulo", 3.14, 34)
cir.areaYperimetro()
rec= new Rectangulo("Rectangulo", 23, 3)
rec.areaYperimetro()
cua= new Cuadrado("Cuadrado",43) 
cua.areaYperimetro()