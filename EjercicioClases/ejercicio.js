class Libro{
    constructor(pTitulo, pAutor, pGenero, pLeido){
        this.titulo = pTitulo;
        this.autor = pAutor;
        this.genero = pGenero;
        this.leido = pLeido;
    }

    //metodos

    marcarComoLeido(){

        this.leido=true
        console.log("Este libro ya fue leido")
        return this.leido

    }
    
    marcarComoNoLeido(){
        this.leido=false
        console.log("Este libro no ha sido leido")
        return this.leido
    }

    informacion(){
        if ( this.leido==true){

        console.log("Título:" +[this.titulo]+ "\n Autor:" +[this.autor]+ "\n Género:" +[this.genero]+ "\n Leído:" +[this.leido])
        }else{
            console.log("Título:" + [this.titulo]+  "\n Autor:" +[this.autor]+ "\n Género:" +[this.genero]+ "\n Leído:" +[this.leido])

        }
    }


}

const libro1= new Libro("100 años de soledad", "Gabriel García Márquez", "Novela o realismo magico", false)
const libro2=new Libro("Don Quijote de la Mancha", "Miguel de Cervantes", "Novela", false)

libro1.marcarComoLeido()
libro1.informacion()
libro2.informacion()