import {alquilerMerkle} from "../variablesGlobales/variablesGlobales.js"


class Bloque{
	constructor(index,date,data,nonce,prevHash,rootmerkle,hash){
		this.index = index
		this.date = date;
		this.data = data;
		this.nonce = nonce;
		this.prevHash = prevHash;
		this.rootmerkle = rootmerkle;
		this.hash = hash;
	}
}

class Node{
  constructor(_value){
    this.value = _value;
    this.next = null;
    this.before = null;
  }
}

class BlockChain{
  constructor(){
    this.head = null;
    this.tail = null;
		this.size = 0;
  }

	generarBloque(){
		var date = new Date();
        let stringFecha = date.getDate()+"-"+ (parseInt(date.getMonth())+1)+"-"+date.getFullYear()+"::"+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()
		var prevHash = "";
		if(this.isEmpty()){
			prevHash = "00"
		}else{
			prevHash = this.tail.value.hash
		}
		alquilerMerkle.auth()
		var rootmerkle = alquilerMerkle.tophash.hash
		var nonce = 0;
		var hash = "";


		//prueba de trabajo
		while(!hash.startsWith("00")){	
			hash =CryptoJS.SHA256(this.size+stringFecha+prevHash+rootmerkle+nonce).toString();
			nonce += 1;
		} 
		var data = new Bloque(this.size,stringFecha,"alquileres",nonce,prevHash,rootmerkle,hash);
		this.insert(data)
	}	

	isEmpty(){
		return this.head === null
	}

  insert(_value){
    var newNode = new Node(_value);
		this.size++;

    if( this.head != null){
      newNode.before = this.tail
      this.tail.next = newNode;
      this.tail = newNode;
    }else{
      this.head = newNode;
      this.tail = newNode;
    }
  }

  delete(_value){
    var temporal = this.head;
    if(temporal.value == _value){
      this.head = temporal.next;
      if(this.head != null){
        this.head.before = null;
      }
    }else{
      while(temporal != null){
        if(temporal.value == _value){
          var anterior = temporal.before;
          anterior.next = temporal.next
          if(temporal.next != null){
            temporal.next.before = anterior; 
          }
          if(this.tail == temporal){
            this.tail = temporal.before 
          }
          break;
        }
        temporal = temporal.next;
      }
    }
  }

  print(){
    var temporal = this.head;
    while(temporal != null){
      //console.log(temporal.value);
      temporal = temporal.next;
    }
  }

  print2(){
    var temporal = this.tail;
    while(temporal != null){
      //console.log(temporal.value);
      temporal = temporal.before;
    }
  }
}


var blockChain = new BlockChain();
//var time = 300000
var time = 300000
let contador=0;

var as = setInterval(()=>{

	blockChain.generarBloque();  
	
},time)



function Tiempo(){
    let nuevoTiempo =document.getElementById("inputTimepoBlockchain").value
    time=parseInt(nuevoTiempo)*1000
    clearInterval(as)
    as = setInterval(()=>{
        blockChain.generarBloque();  
        generarDivsBlockchain(contador);
        contador++
        alquilerMerkle.clear();
    },time)
    
}

function GenerarAhora(){
    blockChain.generarBloque(); 
    generarDivsBlockchain(contador)
    contador++
    alquilerMerkle.clear()
}
document.getElementById("bttnModificarTiempoBlockchain").addEventListener("click",Tiempo)
document.getElementById("generarBloqueBlockchain").addEventListener("click",GenerarAhora)


function generarDivsBlockchain(){
  console.log("bloqueaasjkdlasjdklasjdaslkd")
    //document.getElementById("BlockchainData").innerHTML = '';

    var temporal = blockChain.head;
      let bloque= temporal.value
      //console.log(bloque)
      //div para cada blockcahin
    let nuevoDiv = document.createElement("div");
    nuevoDiv.classList.add("Blockchain")
    nuevoDiv.setAttribute("id","Blockchain"+contador);
    document.getElementById("BlockchainData").appendChild(nuevoDiv);
    //num Bloque
    let labelnoBloque= document.createElement("label");
    labelnoBloque.classList.add("labelBase")
   nuevoDiv.appendChild(labelnoBloque);
   let textonoBloque = document.createTextNode("Bloque: "+bloque.index);
   labelnoBloque.appendChild(textonoBloque);
        /// hash
    let labelnohash= document.createElement("label");
    labelnohash.classList.add("labelBase")
   nuevoDiv.appendChild(labelnohash);
   let textonohash= document.createTextNode("hash: "+bloque.hash);
   labelnohash.appendChild(textonohash);
   //prev hash
   let labelnoprev= document.createElement("label");
   labelnoprev.classList.add("labelBase")
   nuevoDiv.appendChild(labelnoprev);
   let textonoprev= document.createTextNode("prebHash: "+bloque.prevHash);
   labelnoprev.appendChild(textonoprev);
   // rootmerckle
   let labelrootmerkle= document.createElement("label");
   labelrootmerkle.classList.add("labelBase")
   nuevoDiv.appendChild(labelrootmerkle);
   let textonoroomerkle= document.createTextNode("rootmerkle: "+bloque.rootmerkle);
   labelrootmerkle.appendChild(textonoroomerkle);
   // transacciones
    let stringTransacciones="";
    
   for(let element of alquilerMerkle.datablock){
    if (element!=1){
        console.log(element.value)
    stringTransacciones += "{ " +element.value.usuario +" - "+ element.value.pelicula+" - " +element.value.precio+"}     "
    }
   }
   let labelrotransacciones= document.createElement("label");
   labelrotransacciones.classList.add("labelBase")
   nuevoDiv.appendChild(labelrotransacciones);
   let textonotransacciones= document.createTextNode("transacciones: "+stringTransacciones);
   labelrotransacciones.appendChild(textonotransacciones);
   // fecha
   let labelfecha= document.createElement("label");
   labelfecha.classList.add("labelBase")
   nuevoDiv.appendChild(labelfecha);
   let textonofecha= document.createTextNode("fecha: "+bloque.date);
   labelfecha.appendChild(textonofecha);








  
    

}



export default BlockChain;

