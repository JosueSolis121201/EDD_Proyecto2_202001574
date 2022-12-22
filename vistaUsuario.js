
import {usuariosListaSimpleEnlazada,actoresArbolBinario,peliculasArbolAVL,comentariosLista} from "./variablesGlobales/variablesGlobales.js"

import {usuarioActual} from "./vistaRegister.js"

let vistaUsuario = document.getElementById("vistaUsuario")
vistaUsuario.style.display="none";
let vistaPeliculas = document.getElementById("vistaPelicula")
vistaPeliculas.style.display="none";
let vistaActores = document.getElementById("vistaActores")
vistaActores.style.display="block";
let vistaCategorias = document.getElementById("vistaCategoria")
vistaCategorias.style.display="none";


function selectText() {
    const input = document.getElementById('selectVistaUsuarioOrdenamiento');
    input.focus();
    if(input.value=="A-Z"){
        buscarPeliculas();
    }else{
        buscarPeliculas();
    }
}
document.getElementById('selectVistaUsuarioOrdenamiento').addEventListener('change', selectText);
function recorrerarbolAVL(actual){
    let contador=0
    if(actual!=null){ 
        let usuario = actual;
        console.log(usuario.data)
        contador++
        //generando divs
        //!div Contenedor de TODO PARA CADA PELICULA
        let nuevoDiv = document.createElement("div");
        nuevoDiv.classList.add("contenedorPeliculaIndividualVistaUsuario")
        nuevoDiv.setAttribute("id","contenedorPeliculaIndividualVistaUsuario"+contador);
        document.getElementById("ContenedorGenerarVistaPeliculasid").appendChild(nuevoDiv);
        //! LABELS- TITULO PELICULA------------------------------------------------
       let labelTituloPelicula = document.createElement("label");
       labelTituloPelicula.classList.add("labelBase")
       nuevoDiv.appendChild(labelTituloPelicula);
       let textoTituloPelicula = document.createTextNode(usuario.data.nombre_pelicula);
       labelTituloPelicula.appendChild(textoTituloPelicula);
       //! Conteneodr PARA DESCRIPCION------------------------------------------------
       let divDescripcion = document.createElement("div");
       divDescripcion.classList.add("divDescripcion")
       nuevoDiv.appendChild(divDescripcion);
       let textoDescripcion = document.createTextNode(usuario.data.descripcion);
       divDescripcion.appendChild(textoDescripcion);
        //! Contenedor INFORMACION------------------------------------------------
        let divInformacion = document.createElement("div");
        divInformacion.classList.add("contenedorPeliculaIndividualInformacion")
        
       nuevoDiv.appendChild(divInformacion);
       //insertando igmaen
       let imagenInformaciondiv = document.createElement("div");
       imagenInformaciondiv.classList.add("imgInformacion")
       divInformacion.appendChild(imagenInformaciondiv);
       imagenInformaciondiv.addEventListener("click",(e)=>{
        InformacionPelicula(usuario);
    })
       let textoInformacion = document.createTextNode("Informacion");
       divInformacion.appendChild(textoInformacion);
       //! Contenedor Alquilar------------------------------------------------
       let divAlquilar = document.createElement("div");
       divAlquilar.classList.add("contenedorPeliculaIndividualAlquilar")
       nuevoDiv.appendChild(divAlquilar);
       //insertando igmaen
       let imagenAlquilardiv = document.createElement("div");
       imagenAlquilardiv.classList.add("imgAlquilar")
       divAlquilar.appendChild(imagenAlquilardiv);
       let textoAlquilar = document.createTextNode("Alquilar");
       divAlquilar.appendChild(textoAlquilar);
        //! Contenedor PRECIO------------------------------------------------
        let labelPrecio= document.createElement("label");
        labelPrecio.classList.add("labelBase")
       nuevoDiv.appendChild(labelPrecio);
       let textoPrecio = document.createTextNode(usuario.data.precio_Q);
       labelPrecio.appendChild(textoPrecio);

        recorrerarbolAVL(actual.izquierda);
        recorrerarbolAVL(actual.derecha);
    }
}
function buscarPeliculas(){
    document.getElementById("ContenedorGenerarVistaPeliculasid").innerHTML = '';
    console.log(peliculasArbolAVL)
    let actual = peliculasArbolAVL.raiz; 
    recorrerarbolAVL(actual);
} 
//! Vista Usuario------------------------------------------------
//! Vista Usuario------------------------------------------------
//! Vista Usuario------------------------------------------------

function InformacionPelicula(usuario){
    document.getElementById("contenedorVistaUsuariosPeliculas").innerHTML = '';
    //!Titulo Pelicula
    let labelTituloPeliculaVistaUsuario = document.createElement("label");
    labelTituloPeliculaVistaUsuario.classList.add("labelBase")
    let textoTituloPelicula = document.createTextNode(usuario.data.nombre_pelicula);
    labelTituloPeliculaVistaUsuario.appendChild(textoTituloPelicula);
    document.getElementById("contenedorVistaUsuariosPeliculas").appendChild(labelTituloPeliculaVistaUsuario);
     //!Descripccion
    let divDescripcionPeliculaVistaUsuario = document.createElement("div");
    divDescripcionPeliculaVistaUsuario.classList.add("divDescripcion")
    let textoDescripcionPelicula = document.createTextNode(usuario.data.descripcion);
    divDescripcionPeliculaVistaUsuario.appendChild(textoDescripcionPelicula);
    document.getElementById("contenedorVistaUsuariosPeliculas").appendChild(divDescripcionPeliculaVistaUsuario);
    //! Puntuacion
    //modificar Puntucaiones
    let ContenedormodPuntuacion = document.createElement("div");
    ContenedormodPuntuacion.classList.add("modPuntuacion")
    document.getElementById("contenedorVistaUsuariosPeliculas").appendChild(ContenedormodPuntuacion);
    //bttn
    let bttnPuntuacion = document.createElement("button");
    bttnPuntuacion.setAttribute("type", "button");
    bttnPuntuacion.innerHTML = "Modificar Puntuacion";
    bttnPuntuacion.classList.add("buttonBase")
    bttnPuntuacion.addEventListener("click",(e)=>{
        modPuntuacionbttn(usuario);
    })
    ContenedormodPuntuacion.appendChild(bttnPuntuacion);
    //label get cambio putuacion
    let inputGetCambio = document.createElement("INPUT");
    inputGetCambio.setAttribute("type", "text");
    inputGetCambio.classList.add("inputBase1")
    inputGetCambio.setAttribute("id","getInputPelicula");
    ContenedormodPuntuacion.appendChild(inputGetCambio);
    //Div Contenedor estrellas Puntuacion
    let cantidadEstrellas =1;
    let ConteneEstrellas= document.createElement("div");
    ConteneEstrellas.classList.add("contenedorEstrellas")
    ConteneEstrellas.setAttribute("id","ContenedorEstrellas");
    ContenedormodPuntuacion.appendChild(ConteneEstrellas);
    console.log(usuario.data.puntuacion_star)
    while (cantidadEstrellas<=parseInt(usuario.data.puntuacion_star)){
        let estrella = document.createElement("div");
        estrella.classList.add("imgEstrella")
        ConteneEstrellas.appendChild(estrella);
        cantidadEstrellas++;
    }
    //! Contenedor Alquilar y precio 00.00Q
    //imagen texto alquilar
    let divContenedorAlquilar= document.createElement("div");
    divContenedorAlquilar.classList.add("divContenedorPresio")
    document.getElementById("contenedorVistaUsuariosPeliculas").appendChild(divContenedorAlquilar);
    let divAlquilar = document.createElement("div");
       divAlquilar.classList.add("contenedorPeliculaIndividualAlquilar")
       divContenedorAlquilar.appendChild(divAlquilar);
       //insertando igmaen
       let imagenAlquilardiv = document.createElement("div");
       imagenAlquilardiv.classList.add("imgAlquilar")
       divAlquilar.appendChild(imagenAlquilardiv);
       let textoAlquilar = document.createTextNode("Alquilar");
       divAlquilar.appendChild(textoAlquilar);
    //precio
    let labelPrecio= document.createElement("label");
    labelPrecio.classList.add("labelBase")
    let textoPreciolabel = document.createTextNode("Precio: "+usuario.data.precio_Q+"Q");
    labelPrecio.appendChild(textoPreciolabel);
    divContenedorAlquilar.appendChild(labelPrecio);
    //!Comentarios
    let labelTituloComentarioo= document.createElement("label");
    labelTituloComentarioo.classList.add("labelBase")
    let textoTituloComentario= document.createTextNode("Comentarios");
    labelTituloComentarioo.appendChild(textoTituloComentario);
    document.getElementById("contenedorVistaUsuariosPeliculas").appendChild(labelTituloComentarioo);
    //contenedor head comentarios (boton y input para nuevo comentario)
    let contenedorHeadComentariosVustaPelicula=document.createElement("div");
    contenedorHeadComentariosVustaPelicula.classList.add("divContenedorPresio")
    document.getElementById("contenedorVistaUsuariosPeliculas").appendChild(contenedorHeadComentariosVustaPelicula);
    let inputGetComentario = document.createElement("INPUT");
    // input
    inputGetComentario.setAttribute("type", "text");
    inputGetComentario.classList.add("inputBase")
    inputGetComentario.setAttribute("id","getComentario");
    contenedorHeadComentariosVustaPelicula.appendChild(inputGetComentario);
    //bttn
    let bttnPublicarComentario = document.createElement("button");
    bttnPublicarComentario.setAttribute("type", "button");
    bttnPublicarComentario.innerHTML = "Publicar Comentario";
    bttnPublicarComentario.classList.add("buttonBase")
    bttnPublicarComentario.addEventListener("click",(e)=>{
        alert("Publicando Comentario")
        publicarComentario(usuario);
    })
    contenedorHeadComentariosVustaPelicula.appendChild(bttnPublicarComentario);
    //bloque para comentario
    let contenedorContenidoComentariosVistaPelicula=document.createElement("div");
    contenedorContenidoComentariosVistaPelicula.setAttribute("id","postComentario");
    contenedorContenidoComentariosVistaPelicula.classList.add("postComentario")
    document.getElementById("contenedorVistaUsuariosPeliculas").appendChild(contenedorContenidoComentariosVistaPelicula);
    
}
//! modificacion de estrellas
function modPuntuacionbttn(usuario){
    console.log("puntuacion antigua: "+usuario.data.puntuacion_star)
    document.getElementById("ContenedorEstrellas").innerHTML = '';
    let nuevasEstrellas=document.getElementById("getInputPelicula").value
    let cantidadEstrellas=1;
    if(nuevasEstrellas!=""||nuevasEstrellas!=null){
        usuario.data.puntuacion_star =parseInt(nuevasEstrellas)
    }
    while (cantidadEstrellas<=nuevasEstrellas){
        let estrellaNuevas = document.createElement("div");
        estrellaNuevas.classList.add("imgEstrella")
        document.getElementById("ContenedorEstrellas").appendChild(estrellaNuevas);
        cantidadEstrellas++;
    }
    console.log("puntuacion nueva: "+usuario.data.puntuacion_star)
}


function publicarComentario(usuario){
    document.getElementById("postComentario").innerHTML = '';
    let nuevoComentario=document.getElementById("getComentario").value
    let lista=[]
    //TODO COMENTARIO INCOMPLETOS GUARDAR EL NOMBRE DE ACTUAL USUARIO EN EL OBJETO DE LA LISTAS COMO NUEVO ELEMENTO DEL OBJETO NO DE LA LISTA QUE TEXTO TAN LANGO PERO ES PARA QUE NO SE ME PIERDA :D--------------------------------------------------------------------------------------------------------------------
    let nuevoObjetoComentario ={llave:usuario.data.id_pelicula, 
        lista:lista}
        //objeto con la llave y los comentarios
        nuevoObjetoComentario.lista.push(nuevoComentario)
    //guardando objeto como tal en lista global
    comentariosLista.push(nuevoObjetoComentario)
    //TODO---------------LEENDO LISTA ACTUAL PARA PUBLUCAR EN COMENTARIO
    //buscando elemento en ls lista global
    for(let listaGlobalelemnt of comentariosLista){
        //buscando llave
        if(listaGlobalelemnt.llave==usuario.data.id_pelicula){
            //encontrando sus comentarios
            for(let listaComentariosObjeto of listaGlobalelemnt.lista){
                //creando label como post comentarios
                let labelComentario= document.createElement("label");
                labelComentario.classList.add("labelBase")
                let textoTituloComentario= document.createTextNode(usuarioActual+": "+listaComentariosObjeto);
                labelComentario.appendChild(textoTituloComentario);
                document.getElementById("postComentario").appendChild(labelComentario);
            }
        }
    }
}


//! Vista Pelicula------------------------------------------------
//! Vista Pelicula------------------------------------------------
//! Vista Pelicula------------------------------------------------

function recorrerarbolBinario(actual){
    let contador=0
    if(actual!=null){ 
        let usuario = actual;
        console.log(usuario.data)
        contador++
        //generando divs
        //!div Contenedor de TODO PARA CADA PELICULA
        let nuevoDiv = document.createElement("div");
        nuevoDiv.classList.add("contenedorPeliculaIndividualVistaUsuario")
        nuevoDiv.setAttribute("id","contenedorPeliculaIndividualVistaUsuario"+contador);
        document.getElementById("ContenedorGenerarVistaPeliculasid").appendChild(nuevoDiv);
        //! LABELS- TITULO PELICULA------------------------------------------------
       let labelTituloPelicula = document.createElement("label");
       labelTituloPelicula.classList.add("labelBase")
       nuevoDiv.appendChild(labelTituloPelicula);
       let textoTituloPelicula = document.createTextNode(usuario.data.nombre_pelicula);
       labelTituloPelicula.appendChild(textoTituloPelicula);
       //! Conteneodr PARA DESCRIPCION------------------------------------------------
       let divDescripcion = document.createElement("div");
       divDescripcion.classList.add("divDescripcion")
       nuevoDiv.appendChild(divDescripcion);
       let textoDescripcion = document.createTextNode(usuario.data.descripcion);
       divDescripcion.appendChild(textoDescripcion);
        //! Contenedor INFORMACION------------------------------------------------
        let divInformacion = document.createElement("div");
        divInformacion.classList.add("contenedorPeliculaIndividualInformacion")
        
       nuevoDiv.appendChild(divInformacion);
       //insertando igmaen
       let imagenInformaciondiv = document.createElement("div");
       imagenInformaciondiv.classList.add("imgInformacion")
       divInformacion.appendChild(imagenInformaciondiv);
       imagenInformaciondiv.addEventListener("click",(e)=>{
        InformacionPelicula(usuario);
    })
       let textoInformacion = document.createTextNode("Informacion");
       divInformacion.appendChild(textoInformacion);
       //! Contenedor Alquilar------------------------------------------------
       let divAlquilar = document.createElement("div");
       divAlquilar.classList.add("contenedorPeliculaIndividualAlquilar")
       nuevoDiv.appendChild(divAlquilar);
       //insertando igmaen
       let imagenAlquilardiv = document.createElement("div");
       imagenAlquilardiv.classList.add("imgAlquilar")
       divAlquilar.appendChild(imagenAlquilardiv);
       let textoAlquilar = document.createTextNode("Alquilar");
       divAlquilar.appendChild(textoAlquilar);
        //! Contenedor PRECIO------------------------------------------------
        let labelPrecio= document.createElement("label");
        labelPrecio.classList.add("labelBase")
       nuevoDiv.appendChild(labelPrecio);
       let textoPrecio = document.createTextNode(usuario.data.precio_Q);
       labelPrecio.appendChild(textoPrecio);

       recorrerarbolBinario(actual.izquierda);
       recorrerarbolBinario(actual.derecha);
    }
}
function buscarActores(){
    document.getElementById("contenedorCuerpoActoresVistaUsuario").innerHTML = '';
    console.log(actoresArbolBinario)
    let actual = actoresArbolBinario.raiz; 
    //recorrerarbolBinario(actual);
    if(checkboxAdminInorden.checked){
        console.log("inorden")
    }
    if(checkboxAdminPreorden.checked){
        console.log("Preorden")
    }
    if(checkboxAdminPostorden.checked){
        console.log("Postorden")
    }
}

let checkboxAdminInorden = document.getElementById("checkBoxIndorden")
let checkboxAdminPreorden = document.getElementById("checkBoxPreorden")
let checkboxAdminPostorden = document.getElementById("checkBoxPostorden")
document.getElementById("buscarOrdenUsuarioSeleccionar").addEventListener("click",buscarActores)



//! Vista Actores------------------------------------------------
//! Vista Actores------------------------------------------------
//! Vista Actores------------------------------------------------
