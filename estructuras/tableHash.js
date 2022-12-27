class Nodo{
    constructor(_value){
        this.value = _value
        this.next = null
    }
  }
  
  class Lista{
    constructor(){
        this.head = null
        this.size = 0;
    }
  
    //metodos de la lista
    //insertar
    insert(_value){
      this.size++;
      let tempo = new Nodo(_value)
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
      for(let i = 0;i < size ; i++){
        this.table.push(new Lista())
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
          this.table.push(new Lista())
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
  
        console.log(this.table,porcentaje);
      }else{
        console.log(this.table,porcentaje)
      }
  
    }
  
  }


// recorrerlo post orden
  export default TableHash;