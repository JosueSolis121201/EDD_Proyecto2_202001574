//crear la caja/nodo
class Nodo {
    //constructor con sus datos
    constructor(llave,data,sig,ant){
        //llave
        this.llave = llave
        //dato que tendra en nodo
        this.data = data;
        //puntero hacia siguiente
        this.sig = sig;
        //puntero anterior
        this.ant = ant;
    };
};


//clase para lista simple enlzada
class ListaSimpleEnlazada{
   
   constructor() {
        this.head = null;
   }

   agregar(llave,data){
        if(this.head == null){
            this.head = new Nodo(llave,data,null);
            return;
        }
        if(this.buscar(llave) != null){ 
            return ;
        }

        
        let nuevo = new Nodo(llave,data,null) 
        nuevo.sig = this.head;
        this.head = nuevo;
   }

   eliminar(llave){
        let actual = this.head;
        if(this.head == null){return}

        if(this.head.llave == llave){
            this.head = this.head.sig
            return;
        }
        

        while( actual.sig != null){
            if(actual.sig.llave == llave){
                actual.sig = actual.sig.sig
            }

            actual = actual.sig;
        }
   }

   buscar(llave){
        let actual = this.head;
        while( actual != null){
            if(actual.llave == llave){
                return actual.data
            }

            actual = actual.sig;
        }
        return null;
   }

   imprimir(){
    let actual = this.head;
    while( actual != null){
        console.log(actual)
        actual = actual.sig;
    }
}

graficar(){
    //dot
    let codigodot = "digraph G{\nlabel=\" Lista Simple \";\nnode [shape=box];\n graph [rankdir = RL];";
    let temporal = this.head
    let conexiones ="";
    let nodos ="";
    let numnodo= 0;
    //console.log(temporal.llave)
    while (temporal != null) {
        
        nodos+=  "N" + numnodo + "[label=\"" + temporal.llave + "\" ];\n"
        if(temporal.sig != null){
            let auxnum = numnodo+1
            conexiones += "N" + numnodo + " -> N" + auxnum + ";\n"
        }
        temporal = temporal.sig
        numnodo++;            
    }
    codigodot += "//agregando nodos\n"
    codigodot += nodos+"\n"
    codigodot += "//agregando conexiones o flechas\n"
    codigodot += "{\n"+conexiones+"\n}\n}"
    console.log(codigodot)
    d3.select("#liezoAdminGrafos").graphviz()
        .width(1000)
        .height(540)
        .renderDot(codigodot)
}
};


//exportando clase
export default ListaSimpleEnlazada;