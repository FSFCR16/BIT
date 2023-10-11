/*// callback hell
function traerRick() {
    const rick = fetch("https://rickandmortyapi.com/api/character/134")
    .then(response => {
        response.json().then(data => {
            console.log(data)
        }).then(error => console.log(error)).catch(error => {

        })
    }).catch(error => console.log("Ups, hubo un error"))
}*/

let contenedorGeneral = document.querySelector(".contenedorPadre")
let botonTraer = document.querySelector(".traer")

async function traerAsyncRick(url) {
    console.log(url)
    const response = await fetch(url);
    data = await response.json();
    console.log(data)


    for (let i=0; i<data.length; i++){

        let contenedorFichas = document.createElement("article")
        contenedorGeneral.appendChild(contenedorFichas)
        contenedorFichas.classList.add("contenidoFichas")

        let contenedorImg = document.createElement("section")
        contenedorFichas.appendChild(contenedorImg)

        let contenedorInfo = document.createElement("section")
        contenedorFichas.appendChild(contenedorInfo)

        contenedorImg.innerHTML +=  `<img src=${data[i].image} class="estiloImg"></img>`
        contenedorInfo.innerHTML += `<p> Nombre: ${data[i].name} </p> <p> Status: ${data[i].status}</p> <p>Species: ${data[i].species}</p> <p>Gender: ${data[i].gender} </p>`
        contenedorInfo.classList.add("infoTexto")
    }    
}
botonTraer.addEventListener("click", function () {
    let contenidoInput = document.getElementById("escoger")
    console.log(contenidoInput.value)
    traerAsyncRick(`https://rickandmortyapi.com/api/character/,${contenidoInput.value}`);
});


