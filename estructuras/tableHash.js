class Nodo{
    constructor(_value,id){
        this.value = _value
        this.next = null
        this.id=id
    }
  }
  
  class Lista{
    constructor(indice){
        this.head = null
        this.size = 0;
        this.indice=indice
        this.id=0
    }
  
    //metodos de la lista
    //insertar
    insert(_value){
      this.size++;
      let tempo = new Nodo(_value,this.id++)
      tempo.next = this.head
      this.head = tempo
    }
    //mostrar 
    printList(){
      let temporal = this.head
      while(temporal!=null){
          console.log(temporal.value)
          temporal = temporal.next
      }
    }
  
    getSize(){
      return this.size;
    }
  
    isEmpty(){
      return this.head === null ; 
    }
  }
  
  class TableHash{
    constructor(size){
      this.amount =0;
      this.size =  size
      this.table = [];

      this.indice=0

      for(let i = 0;i < size ; i++){
        this.table.push(new Lista(this.indice++))
      }
    }
  
    insert(data){
      let index = this.functionHash(data);
      if(this.table[index].isEmpty()){
        this.amount++;
      }
      this.table[index].insert(data);
      this.rehashing()
    }
  
    functionHash(data){
      return data.id_categoria % this.size;
    }
  
    rehashing(){
      let porcentaje =this.amount/this.size
      if(porcentaje>0.75){
        let temp =this.table;
        let tempSize = this.size
        this.size = this.amount*5
        this.table = []
        for(let i = 0;i < this.size ; i++){
          this.table.push(new Lista(this.indice++))
        }
  
        for(let i = 0;i < tempSize ; i++){
          if(!temp[i].isEmpty()){
            let nodo = temp[i].head;
            while(nodo!=null){
              this.insert(nodo.value);
              nodo = nodo.next
          }
          }
        }
  
        //console.log(this.table,porcentaje);
        this.indice=0;
      }else{
        //console.log(this.table,porcentaje)
      }
  
    }


    graficar(){
       //dot
       let codigodot = "digraph G{\nlabel=\"Categorias \";\nnode [shape=box style=filled];\ngraph [rankdir = down];\n";
       let conexiones ="";
       let nodos ="";
       let contador=0;

       for(let listaofLista of this.table){
        console.log(listaofLista)
        let temporal = listaofLista.head
        //indices
        nodos+=  "I" + listaofLista.indice + "[label=\"" + listaofLista.indice + "\" ];\n"


      while(temporal!=null){
        if(temporal==listaofLista.head){
          nodos+=  "N" + temporal.id+temporal.value.id_categoria + "[label=\"" + temporal.value.company + "\" ];\n"
          conexiones += "I" + contador + " -> N" + temporal.id+temporal.value.id_categoria + ";\n"
          if(temporal.next!=null){
            conexiones += "N" + temporal.id+temporal.value.id_categoria + " -> N" + temporal.next.id+temporal.next.value.id_categoria + ";\n"
          }
        }else{
          nodos+=  "N" + temporal.id+temporal.value.id_categoria + "[label=\"" + temporal.value.company + "\" ];\n"
          if(temporal.next!=null){
            conexiones += "N" + temporal.id+temporal.value.id_categoria + " -> N" + temporal.next.id+temporal.next.value.id_categoria + ";\n"
          }
          
        }
          temporal = temporal.next
      }
      contador++;
      }
      //conexiones
      for(let contador=0;contador<this.size-1;contador++){
        let futuro=contador+1
          conexiones += "I" + contador + " -> I" + futuro + ";\n"
      }

       //console.log("nodos: "+nodos)
       //console.log("Conbexions: "+conexiones)
       codigodot += "//agregando nodos\n"
       codigodot += nodos+"\n"
       codigodot += "//agregando conexiones o flechas\n"
       codigodot += "{\n"+conexiones+"\n}\n}"
       console.log(codigodot)
       d3.select("#liezoAdminGrafos").graphviz()
           .width(1000)
           .height(1000)
           .renderDot(codigodot)
   }

  }
  
 


// recorrerlo post orden
  export default TableHash;