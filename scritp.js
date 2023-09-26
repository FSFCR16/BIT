let contador=0
document.querySelectorAll(".click").forEach(function funcion(idselector) {

    idselector.addEventListener("click", function id(e) {

        const iduno= e.target.getAttribute("id");
        acciones(iduno)
    
    })


})

function acciones(ida){
    let recuadroContador=window.document.querySelector(".inicio")
    
    if (ida=="sumar"){
        recuadroContador.innerHTML = parseInt(recuadroContador.innerHTML) + contador++ ;

    }else if (ida=="restar"){
        recuadroContador.innerHTML = parseInt(recuadroContador.innerHTML) + contador-- ;

    }else{
        recuadroContador.innerHTML = "0" ;
    }


}
