import {usuariosListaSimpleEnlazada,actoresArbolBinario,peliculasArbolAVL,comentariosLista} from "./variablesGlobales/variablesGlobales.js"

let vistaLogin = document.getElementById("formRegistrar")
vistaLogin.style.display="block";

let checkboxAdmin = document.getElementById("checkboxAdmin")


let usuarioActual;
function loginBotonFormulario(){   
    let username = document.getElementById("userNameInputLogin").value;
    let password = document.getElementById("passwordInputLogin").value;
    let buscando =usuariosListaSimpleEnlazada.buscar(username)
    //console.log(buscando)
    if(buscando!=null){
        if(buscando.contraseña ==password){
            if(checkboxAdmin.checked){
                console.log("Comprobando si es admin")
                if(buscando.admin==true){
                    usuarioActual=username
                    alert("Bienvenido admin: "+username)
                    console.log("es admin")
                    /*registrar.style.display ="none";
                    login.style.display ="none"; 
                    vistaAdmin.style.display ="block";*/
                }else{
                    alert("No eres admin")
                }
            }else{
                usuarioActual=username
                alert("Bienvenido: "+username)
               /* registrar.style.display ="none";
                login.style.display ="none"; 
                vistaUsuario.style.display ="block";
                vistaAmigosButton .style.display ="block";
                console.log("Entrando como usuario")*/
            }
        }else{
            alert("Nombre de usuario encontrado contraseña INCORRECTA")
        }
    }else{
        alert("No se encontro a NADIE")
    }
}
document.getElementById('buttonFormRegistrar').addEventListener('click', loginBotonFormulario);

export{
    usuarioActual
}