// MIT License
// Copyright (c) 2021 Luis Espino

class DataNode {
	constructor(value) {
		this.value 	= value
	}
}

class HashNode {
  constructor(hash) {
    this.hash  = hash
    this.left  = null
    this.right = null
  }
}

class Merkle {
  constructor() {
    this.tophash = null
    this.datablock = []    
    this.dot = ''

    this.llenarvacio=10;

    this.id=0;
        this.nodosCajas="";
        this.conexiones="";
        this.stringFinal="";
  }

  clear(){
    this.tophash = null
    this.datablock = []  
  }

  add(value) {
    this.datablock.push(new DataNode(value))
  }

  createTree(exp) {
    this.tophash = new HashNode(0)
    this._createTree(this.tophash, exp )
  }

  _createTree(tmp, exp) {
    if (exp > 0) {
      tmp.left = new HashNode(0)
      tmp.right = new HashNode(0)
      this._createTree(tmp.left, exp - 1)
      this._createTree(tmp.right, exp - 1)
    }
  }

  genHash(tmp, n) { // postorder
    if (tmp != null) {
      this.genHash(tmp.left, n)
      this.genHash(tmp.right, n)
      
      if (tmp.left == null && tmp.right == null) {
        tmp.left = this.datablock[n-index--]
        
        //tmp.hash = (tmp.left.value*1000).toString(16)
        //!
        if(tmp.left==1){
          this.llenarvacio++;
          tmp.hash= CryptoJS.SHA256(this.llenarvacio.toString()).toString();
          //console.log(tmp.hash)
          //console.log(this.llenarvacio)
        }else{
          console.log(tmp.left.value)
          tmp.hash= CryptoJS.SHA256(tmp.left.value.usuario+"-"+tmp.left.value.pelicula).toString();
        }
        
        //console.log(tmp.hash)
        //tmp.hash = sha256(tmp.left.value)
      } else {
        //tmp.hash = (parseInt(tmp.left.hash, 16)+parseInt(tmp.right.hash, 16)).toString(16)
        tmp.hash = CryptoJS.SHA256(tmp.left.hash+tmp.right.hash).toString();
        //console.log(tmp.hash)
      }      
    }
  }

  preorder(tmp) {
    if (tmp != null) {
      //console.log(tmp)
      this.preorder(tmp.left)
      this.preorder(tmp.right)
    }
  }

  auth() {
    var exp = 1
    while (Math.pow(2, exp) < this.datablock.length) {
      exp += 1
    }
    for (var i = this.datablock.length; i < Math.pow(2, exp); i++) {
      //this.datablock.push(new DataNode(i*100))
      this.datablock.push(1)
    }
    index = Math.pow(2, exp)
    this.createTree(exp)
    this.genHash(this.tophash, Math.pow(2, exp))
    //this.preorder(this.tophash)    
  }

  show() {
    this.datablock.forEach(element => document.getElementById("log").innerHTML+=element.value+' ');
  }

  dotgen(tmp) {
    
    if (tmp != null) {
      //console.log(tmp)
      if (tmp.left != null){
        if (tmp.left instanceof DataNode) {
          //console.log(tmp)
          this.nodosCajas+=  "N" +tmp.hash + "[label=\"" + tmp.hash +"\" ];\n"
        }
      }
      if (tmp.left instanceof HashNode) {
        if (tmp.left != null) this.conexiones += "N" + tmp.left.hash + " -> N" + tmp.hash  + ";\n"
        if (tmp.right != null) this.conexiones += "N" + tmp.right.hash + " -> N" + tmp.hash + ";\n"
      }
  
      this.dotgen(tmp.left)
      this.dotgen(tmp.right)
    }
}


    graficar(){
      //this.datablock.forEach(element =>console.log(element));
      this.dotgen(this.tophash)
  

  
      let codigodot = "digraph G{\nlabel=\" Arbol Merkle\";\nnode [shape=box];\n graph [rankdir = BT];\n "; 
      this.stringFinal += this.nodosCajas +this.conexiones
      codigodot+= "{\n"+this.stringFinal+"\n}\n}"

      d3.select("#ArbolMerkleAdmin").graphviz() 
      .width(1000)
      .height(540)
      .renderDot(codigodot) 
      this.nodosCajas="";
        this.conexiones="";
        this.stringFinal="";
}
}


var index = 0






export default Merkle;