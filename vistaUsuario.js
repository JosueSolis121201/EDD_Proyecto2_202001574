
import {usuariosListaSimpleEnlazada,actoresArbolBinario,peliculasArbolAVL,comentariosLista, categoriasHash,alquilerMerkle} from "./variablesGlobales/variablesGlobales.js"

import {usuarioActual} from "./vistaRegister.js"

let vistaUsuario = document.getElementById("vistaUsuario");
vistaUsuario.style.display="none";
let vistaPeliculas = document.getElementById("vistaPelicula");
vistaPeliculas.style.display="none";
let vistaActores = document.getElementById("vistaActores");
vistaActores.style.display="none";
let vistaCategorias = document.getElementById("vistaCategoria");
vistaCategorias.style.display="none";

let vistaRegister= document.getElementById("formRegistrar") ;



function selectText() {
    const input = document.getElementById('selectVistaUsuarioOrdenamiento');
    input.focus();
    if(input.value=="A-Z"){
        buscarPeliculasAZ();
    }else{
        buscarPeliculasZA();
    }
}
function cambio2(){
    vistaUsuario.style.display="none";
    vistaCategorias.style.display="block";

}
function cambio3(){
    vistaUsuario.style.display="none";
    vistaRegister.style.display="block";
}



document.getElementById('btnnheaderlogout').addEventListener('click', cambio3);
document.getElementById('bttnCategoriaUsuario').addEventListener('click', cambio2);
document.getElementById('selectVistaUsuarioOrdenamiento').addEventListener('change', selectText);
function recorrerarbolAVL(actual){
    let contador=0
    if(actual!=null){ 
        recorrerarbolAVL(actual.izquierda);
        let usuario = actual;
        console.log(usuario)
        //console.log(usuario.data)
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
        vistaPeliculas.style.display="block";
        vistaUsuario.style.display="none";
        
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
       //! Accion ed alquilar++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
       imagenAlquilardiv.addEventListener("click",(e)=>{
        let objetoMerkle={usuario:usuarioActual,
            pelicula:usuario.data.nombre_pelicula,
            precio:usuario.data.precio_Q
        }
        alquilerMerkle.add(objetoMerkle)
        console.log(alquilerMerkle)
    })
        //! Contenedor PRECIO------------------------------------------------
        let labelPrecio= document.createElement("label");
        labelPrecio.classList.add("labelBase")
       nuevoDiv.appendChild(labelPrecio);
       
       let textoPrecio = document.createTextNode(usuario.data.precio_Q);
       labelPrecio.appendChild(textoPrecio);

        
        recorrerarbolAVL(actual.derecha);
    }
}
function buscarPeliculasAZ(){
    document.getElementById("ContenedorGenerarVistaPeliculasid").innerHTML = '';
    console.log(peliculasArbolAVL)
    let actual = peliculasArbolAVL.raiz; 
    recorrerarbolAVL(actual);
} 

function recorrerarbolAVLZA(actual){
    let contador=0
    if(actual!=null){ 
        recorrerarbolAVLZA(actual.derecha);
        
        let usuario = actual;
        //console.log(usuario.data)
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
        vistaPeliculas.style.display="block";
        vistaUsuario.style.display="none";
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
       //! Accion ed alquilar++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
       imagenAlquilardiv.addEventListener("click",(e)=>{
        let objetoMerkle={usuario:usuarioActual,
            pelicula:usuario.data.nombre_pelicula,
            precio:usuario.data.precio_Q
        }
        alquilerMerkle.add(objetoMerkle)
        console.log(alquilerMerkle)
    })
        //! Contenedor PRECIO------------------------------------------------
        let labelPrecio= document.createElement("label");
        labelPrecio.classList.add("labelBase")
       nuevoDiv.appendChild(labelPrecio);
       let textoPrecio = document.createTextNode(usuario.data.precion_Q);
       labelPrecio.appendChild(textoPrecio);

       recorrerarbolAVLZA(actual.izquierda);
        
    }
}
function buscarPeliculasZA(){
    document.getElementById("ContenedorGenerarVistaPeliculasid").innerHTML = '';
    console.log(peliculasArbolAVL)
    let actual = peliculasArbolAVL.raiz; 
    recorrerarbolAVLZA(actual);
} 

function CambiodeVista1(){
    
vistaUsuario.style.display="none";
vistaActores.style.display="block";

}

document.getElementById('btnnVerActoresUsuario').addEventListener('click', CambiodeVista1);

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
       imagenAlquilardiv.addEventListener("click",(e)=>{
        let objetoMerkle={usuario:usuarioActual,
            pelicula:usuario.data.nombre_pelicula,
            precio:usuario.data.precio_Q
        }
        alquilerMerkle.add(objetoMerkle)
        console.log(alquilerMerkle)
    })
       divAlquilar.appendChild(imagenAlquilardiv);
       let textoAlquilar = document.createTextNode("Alquilar");
       divAlquilar.appendChild(textoAlquilar);
    //precio
    let labelPrecio= document.createElement("label");
    labelPrecio.classList.add("labelBase")
    let textoPreciolabel = document.createTextNode("Precio: "+usuario.data.precion_Q+"Q");
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
    let listaNombres=[]
        //TODO COMENTARIO INCOMPLETOS GUARDAR EL NOMBRE DE ACTUAL USUARIO EN EL OBJETO DE LA LISTAS COMO NUEVO ELEMENTO DEL OBJETO NO DE LA LISTA QUE TEXTO TAN LANGO PERO ES PARA QUE NO SE ME PIERDA :D--------------------------------------------------------------------------------------------------------------------
    let nuevoObjetoComentario ={llave:usuario.data.id_pelicula, 
        lista:lista,
        listaNombres:listaNombres}
        //objeto con la llave y los comentarios
        listaNombres.push(usuarioActual)
        nuevoObjetoComentario.lista.push(nuevoComentario)
    //guardando objeto como tal en lista global
    comentariosLista.push(nuevoObjetoComentario)
    //TODO---------------LEENDO LISTA ACTUAL PARA PUBLUCAR EN COMENTARIO
    //buscando elemento en ls lista global
    for(let listaGlobalelemnt of comentariosLista){
        //buscando llave
        if(listaGlobalelemnt.llave==usuario.data.id_pelicula){
            //encontrando sus comentarios
            let buscandoIndiceNombre =0;
            for(let listaComentariosObjeto of listaGlobalelemnt.lista){
                //creando label como post comentarios
                let labelComentario= document.createElement("label");
                labelComentario.classList.add("labelBase")
                let textoTituloComentario= document.createTextNode(listaGlobalelemnt.listaNombres[buscandoIndiceNombre]+": "+listaComentariosObjeto);
                labelComentario.appendChild(textoTituloComentario);
                document.getElementById("postComentario").appendChild(labelComentario);
                buscandoIndiceNombre++
            }
        }
    }
}

function cambio4(){
    vistaUsuario.style.display="block";
    vistaPeliculas.style.display="none";
}
document.getElementById('bttnHomePelicula').addEventListener('click', cambio4);

//! Vista Pelicula------------------------------------------------
//! Vista Pelicula------------------------------------------------
//! Vista Pelicula------------------------------------------------

function recorrerarbolBinarioPreorden(actual){
    
    if(actual!=null){ 
        let usuario = actual;
        let textoDescripcionActor = document.createTextNode("Artista: "+usuario.valor.nombre_actor+"\n Descripcion: "+usuario.valor.descripcion+ "\n\n" );
        document.getElementById("w3review").appendChild(textoDescripcionActor);
        recorrerarbolBinarioPreorden(actual.izquierda);
        recorrerarbolBinarioPreorden(actual.derecha);

        console.log(actual.id)
    }
}


function recorrerarbolBinarioInorden(actual){
    
    if(actual!=null){ 
        recorrerarbolBinarioInorden(actual.izquierda);
        let usuario = actual;
        let textoDescripcionActor = document.createTextNode("Artista: "+usuario.valor.nombre_actor+"\n Descripcion: "+usuario.valor.descripcion+ "\n\n" );
        document.getElementById("w3review").appendChild(textoDescripcionActor);
        recorrerarbolBinarioInorden(actual.derecha);

        console.log(actual.id)
    }
}


function recorrerarbolBinarioPostorden(actual){
    
    if(actual!=null){ 
        recorrerarbolBinarioPostorden(actual.izquierda);
        recorrerarbolBinarioPostorden(actual.derecha);
        let usuario = actual;
        let textoDescripcionActor = document.createTextNode("Artista: "+usuario.valor.nombre_actor+"\n Descripcion: "+usuario.valor.descripcion+ "\n\n" );
        document.getElementById("w3review").appendChild(textoDescripcionActor);

        console.log(actual.id)
    }
}
function buscarActores(){
    document.getElementById("w3review").innerHTML = '';
    let actual = actoresArbolBinario.raiz; 
    if(checkboxAdminInorden.checked){
        console.log("In orden ID")
        recorrerarbolBinarioInorden(actual)
    }
    if(checkboxAdminPreorden.checked){
        console.log("Pre orden ID")
        recorrerarbolBinarioPreorden(actual)
    }
    if(checkboxAdminPostorden.checked){
        console.log("Post Orden ID")
        recorrerarbolBinarioPostorden(actual)
    }
}

let checkboxAdminInorden = document.getElementById("checkBoxIndorden")
let checkboxAdminPreorden = document.getElementById("checkBoxPreorden")
let checkboxAdminPostorden = document.getElementById("checkBoxPostorden")
document.getElementById("buscarOrdenUsuarioSeleccionar").addEventListener("click",buscarActores)

function cambio5(){
    vistaUsuario.style.display="block";
    vistaActores.style.display="none";
}
document.getElementById('bttnHomeActores').addEventListener('click', cambio5);

//! Vista Actores------------------------------------------------
//! Vista Actores------------------------------------------------
//! Vista Actores------------------------------------------------
// insertar desde admin
//recorrer aqui
//colocarlo visual html


function verCategorias(){
    document.getElementById("contenedorVistaCategoriaDatos").innerHTML = '';
    let contador=0;
    for(let listaofLista of categoriasHash.table){
        let temp = listaofLista.head
        
            while(temp!=null){
                //dato = temp.value.company
        //console.log(temp.value.company)
        //!div Contenedor de TODO PARA CADA categoria
        let nuevoDiv = document.createElement("div");
        nuevoDiv.classList.add("contenedorCategoriaIndividualVistaUsuario")
        nuevoDiv.setAttribute("id","contenedorCategoriaIndividualVistaUsuario"+contador);
        document.getElementById("contenedorVistaCategoriaDatos").appendChild(nuevoDiv);
        //!comentario
        let labelTituloCategoria= document.createElement("label");
        labelTituloCategoria.classList.add("labelBase")
        let textoTituloCategoria= document.createTextNode(temp.value.company);
        labelTituloCategoria.appendChild(textoTituloCategoria);
        nuevoDiv.appendChild(labelTituloCategoria);
        temp = temp.next
        }
            
        
    }
} 

document.getElementById("actualizarCategoriasVistaCategoria").addEventListener("click",verCategorias)

function cambio6(){
    vistaUsuario.style.display="block";
    vistaCategorias.style.display="none";
}
document.getElementById('bttnHomeCategoria').addEventListener('click', cambio6);

//! Vista Categoria------------------------------------------------
//! Vista Categoria------------------------------------------------
//! Vista Categoria------------------------------------------------