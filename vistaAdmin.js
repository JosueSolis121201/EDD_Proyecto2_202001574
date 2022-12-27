import { sha256 } from "./sha256.js";
import {usuariosListaSimpleEnlazada,actoresArbolBinario,peliculasArbolAVL,comentariosLista,categoriasHash} from "./variablesGlobales/variablesGlobales.js"


let vistaAdmin = document.getElementById("vistaAdmin")
vistaAdmin.style.display="block";
let blockchain = document.getElementById("vistaBlockchain")
blockchain.style.display="none";




function cargaMasivaUsuarios(event) {
    let reader = new FileReader();
    reader.onload = leercargaMasivaUsuarios;
    reader.readAsText(event.target.files[0]);
}
function leercargaMasivaUsuarios(event){
    let obj = JSON.parse(event.target.result);
    for (let data of obj) { 
        let usuario={dpi:data.dpi, 
            nombre_completo:data.nombre_completo, 
            nombre_usuario:data.nombre_usuario, 
            correo:data.correo,
            contraseña:data.contraseña,
            telefono:data.telefono,
            admin:false}

            usuariosListaSimpleEnlazada.agregar(usuario.nombre_usuario,usuario) ;
      }
      usuariosListaSimpleEnlazada.imprimir();
}
function graficarUsiarioAdminm(){
    usuariosListaSimpleEnlazada.graficar()
}

document.getElementById('buttonGraficarUsuarioAdmin').addEventListener('click', graficarUsiarioAdminm);
document.getElementById('inputAdminCargaMasivaClientes').addEventListener('change', cargaMasivaUsuarios);
////! USUARIO-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
////! USUARIO-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
////! USUARIO-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function cargaMasivaPeliculas(event) {
    let reader = new FileReader();
    reader.onload = leercargaMasivaPeliculas;
    reader.readAsText(event.target.files[0]);
}
function leercargaMasivaPeliculas(event){
    let obj = JSON.parse(event.target.result);
    for (let data of obj) { 
        let pelicula={id_pelicula:data.id_pelicula, 
            nombre_pelicula:data.nombre_pelicula, 
            descripcion:data.descripcion, 
            puntuacion_star:data.puntuacion_star,
            precio_Q:data.precio_Q,
            paginas:data.paginas,
            categoria:data.categoria}

            peliculasArbolAVL.insertar(pelicula.id_pelicula,pelicula)

      }
     // peliculasArbolAVL.preorden()
}
function graficarPeliculaAdmin(){
    peliculasArbolAVL.graficar()
    //peliculasArbolAVL.graficar()
}
document.getElementById('buttonGraficarPeliculaAdmin').addEventListener('click', graficarPeliculaAdmin);
document.getElementById('inputAdminCargaMasivaPeliculas').addEventListener('change', cargaMasivaPeliculas);
////! Peliculas-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
////! Peliculas-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
////! Peliculas-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function cargaMasivaActores(event) {
    let reader = new FileReader();
    reader.onload = leercargaMasivaActores;
    reader.readAsText(event.target.files[0]);
}
function leercargaMasivaActores(event){
    let obj = JSON.parse(event.target.result);
    for (let data of obj) {
        let actores={dni:data.dni, 
            nombre_actor:data.nombre_actor, 
            correo:data.correo, 
            descripcion:data.descripcion}

            actoresArbolBinario.agregarr(actores,data.dni);
      }
      //actoresArbolBinario.inorden();
}

function graficarActoresAdmin(){
    actoresArbolBinario.graficar()
}

document.getElementById('buttonGraficarActoresAdmin').addEventListener('click', graficarActoresAdmin);
document.getElementById('inputAdminCargaMasivaActores').addEventListener('change', cargaMasivaActores);
////! Actores-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
////! Actores-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
////! Actores-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function cargaMasivaCategorias(event) {
    let reader = new FileReader();
    reader.onload = leercargaMasivaCategorias;
    reader.readAsText(event.target.files[0]);
}
sha256(10)
function leercargaMasivaCategorias(event){
    let obj = JSON.parse(event.target.result);
    for (let data of obj) { 

        let categorias={id_categoria:data.id_categoria, 
            company:data.company}

            categoriasHash.insert(categorias);
      }
     // usuariosListaSimpleEnlazada.imprimir();
}
document.getElementById('inputAdminCargaMasivaCategorias').addEventListener('change', cargaMasivaCategorias);
////! Categorias-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
////! Categorias-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
////! Categorias-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


