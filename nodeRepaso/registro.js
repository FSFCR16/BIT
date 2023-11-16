const fs = require ("fs")
const path = require("path");
let users = []

const registro = (nombre, edad) => {
   console.log("creando registro", nombre)
    users.push({"name": nombre, "age":edad})
}

const escribirInformacion = () => {

       fs.writeFile("usuarios.json", JSON.stringify(users), err => {
        if (err) {
            console.error(err)
        }
     });
    }

const buscarUsuario = (nombre) => {
    const usuarios = JSON.parse(
        fs.readFileSync(path.join(__dirname, "usuarios.json"), "utf8")
      );
      console.log(usuarios)
      const usuario = usuarios.find(u=> u.name==nombre);
      console.log(usuario)
      if (usuario) {
        console.log(`Usuario encontrado: ${usuario.name}, Edad: ${usuario.age}`);
      } else {
        console.log("Usuario no encontrado.");
    }
 
   }
   
module.exports = {
    registro, 
    escribirInformacion,
    buscarUsuario
}