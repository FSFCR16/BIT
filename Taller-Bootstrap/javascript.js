let imagenSvg= document.querySelector(".imagenSvg")
let contenedorSvg= document.querySelector(".contenedorSvg")
let añadirCarrito= document.querySelectorAll(".añadir-carrito")
let informacionC= document.querySelectorAll(".contenidoInformacion")
let modalBody=document.querySelector(".infoModal")

let contador=0
function contadorF(){
    for(let i = 0 ; i<añadirCarrito.length; i++){
        añadirCarrito[i].addEventListener("click", ()=>{
            contador+=1
            contenedorSvg.style.setProperty('--content-pseudo', `"${contador}"`)
            contenedorSvg.style.setProperty('--display-psaudo', 'flex' )
        })
    }
}
contadorF()



let perspective= document.querySelectorAll(".contenedorPerspective")

for(let i= 0; i<perspective.length; i++){
    perspective[i].addEventListener("mouseenter", ()=>{
        for (let j=0; j<perspective.length; j++){
            perspective[j].classList.remove("cardRotateDos")
            perspective[j].classList.remove("cardRotate")
            perspective[j].classList.remove("card-inner")
        }
        perspective[i].classList.add("cardRotate")
        perspective[i].classList.add("card-inner")
    })
    perspective[i].addEventListener("mouseleave", ()=>{
        for (let j=0; j<perspective.length; j++){
            perspective[i].classList.add("cardRotateDos")
            perspective[i].classList.add("card-inner")
        }


    })
}
for(let i = 0; i < añadirCarrito.length; i++){
    añadirCarrito[i].addEventListener("click", ()=>{
        event.stopPropagation();
    })
}

let section= document.createElement("section")
let listaElemento=[]

for(let i= 0; i<añadirCarrito.length;i++){
    añadirCarrito[i].addEventListener("click", ()=>{
        let botonAtributo = añadirCarrito[i].getAttribute("id")

        for(let j=0; j<informacionC.length;j++){
            let info=informacionC[j].getAttribute("id")

            if(info==botonAtributo){
                
                let innerHtml=informacionC[j].innerHTML

                let temArticle=document.createElement("article")
                temArticle.innerHTML=innerHtml
                temArticle.classList.add("carts")
                listaElemento.push(temArticle)

                let hCinco=temArticle.querySelector("h5")
                hCinco.style.justifySelf="start"

                let botonQuitar=document.createElement("button")
                botonQuitar.innerHTML="Quitar producto"
                botonQuitar.classList.add("botonQuitar")
                temArticle.appendChild(botonQuitar)



                let imagen=temArticle.querySelector("img")
                imagen.style.height="70px"
                imagen.style.width="80px"
                imagen.classList.add("imgPopUp")



                modalBody.appendChild(section)
                section.classList.add("cartasDiseño")
                section.appendChild(temArticle)

                if(listaElemento.length>0){
                    let btnQuitar=document.querySelectorAll(".botonQuitar")
                    let elemntos=document.querySelectorAll(".carts")
                    for(let x=0 ; x<btnQuitar.length;x--){
                        btnQuitar[x].addEventListener("click", ()=>{
                            elemntos[x].remove() 
                        })
                    }
                }
            }
        }
    })
}

