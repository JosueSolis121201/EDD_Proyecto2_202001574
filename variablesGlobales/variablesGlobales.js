import ListaSimpleEnlazada from "../estructuras/listaSimpleEnlazada.js";
import ABB from "../estructuras/arbolBinario.js";
import AVL from "../estructuras/arbolAVL.js";

var usuariosListaSimpleEnlazada = new ListaSimpleEnlazada();
var actoresArbolBinario = new ABB();
var peliculasArbolAVL = new AVL();
//variables globales 
var comentariosLista =[];

let usuario={dpi:2354168452525, 
    nombre_completo:"Oscar Armin", 
    //nombre_usuario:"EDD", 
    nombre_usuario:"1", 
    correo:"",
    //contraseña:12345678,
    contraseña:1,
    telefono:12345678,
    admin:true}


    let usuario1={dpi:2354168452525, 
        nombre_completo:"Oscar Armin", 
        //nombre_usuario:"EDD", 
        nombre_usuario:"2", 
        correo:"",
        //contraseña:12345678,
        contraseña:2,
        telefono:12345678,
        admin:true}


        let pelicula1={id_pelicula:2, 
        nombre_pelicula:"pelicula0", 
        descripcion:"asdasdasdasdasdasdsalñjalskjclksajcklasjcklsaasdasdasdasdasdasdsalñjalskjclksajcklasjcklsa",
        puntuacion_star:1,
        precio_Q:2,
        paginas:20,
        categoria:"aña"}

            peliculasArbolAVL.insertar(pelicula1.id_pelicula,pelicula1)

            let pelicula={id_pelicula:1, 
                nombre_pelicula:"pelicula1", 
                descripcion:"asdasdasdasdasdasdsalñjalskjclksajcklasjcklsaasdasdasdasdasdasdsalñjalskjclksajcklasjcklsa",
                puntuacion_star:5,
                precio_Q:10,
                paginas:200,
                categoria:"sada"}
    
                peliculasArbolAVL.insertar(pelicula.id_pelicula,pelicula)

                let pelicula2={id_pelicula:9, 
                    nombre_pelicula:"pelicula2", 
                    descripcion:"asdasdasdasdasdasdsalñjalskjclksajcklasjcklsaasdasdasdasdasdasdsalñjalskjclksajcklasjcklsa",
                    puntuacion_star:2,
                    precio_Q:5,
                    paginas:150,
                    categoria:"asdas"}
        
                    peliculasArbolAVL.insertar(pelicula2.id_pelicula,pelicula2)

                    let pelicula3={id_pelicula:10, 
                        nombre_pelicula:"pelicula3", 
                        descripcion:"asdasdasdasdasdasdsalñjalskjclksajcklasjcklsaasdasdasdasdasdasdsalñjalskjclksajcklasjcklsa",
                        puntuacion_star:2,
                        precio_Q:5,
                        paginas:150,
                        categoria:"asdas"}
            
                        peliculasArbolAVL.insertar(pelicula3.id_pelicula,pelicula3)


    


usuariosListaSimpleEnlazada.agregar(usuario.nombre_usuario,usuario)
usuariosListaSimpleEnlazada.agregar(usuario1.nombre_usuario,usuario1)


export {
    usuariosListaSimpleEnlazada,
    actoresArbolBinario,
    peliculasArbolAVL,
    comentariosLista,
}