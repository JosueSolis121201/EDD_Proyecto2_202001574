class Nodo{
    constructor(data,llave,id){
        this.llave=llave;
        this.valor=data;
        this.izquierda = null;
        this.derecha = null;
        this.id = id;
    }
}

class ABB{
    constructor(){
        //padre
        this.raiz = null;
        this.stringFinal ="";
        this.nodosCajas ="";
        this.conexiones ="";
        this.id =0;
    }
    //metodo insertar
    /*insertar(data){
        this.raiz = this.add(data, this.raiz);
    }*/

    agregarr(data,llave){
        if(this.raiz == null){
            this.raiz = new Nodo(data,llave,this.id++);
        }
        else{
            this.agregar(data,this.raiz,llave)
        }
    }

    compararString(izquierda,derecha){
        if(izquierda<derecha){
            return false
        }
        return true
    }

    agregar(data,nodo,llave){
       //console.log("nodo"+nodo)
        //console.log("llave"+llave)
        if(nodo == null){
            return new Nodo(data,llave,this.id++);
        }
        if(this.compararString(nodo.llave,llave)){
           nodo.izquierda = this.agregar(data,nodo.izquierda,llave)
        }else{
           nodo.derecha = this.agregar(data,nodo.derecha,llave)
        }
        return nodo
    }

   
    
    //preorden
    preorden(){
        this.pre_orden(this.raiz);
    }

    pre_orden(nodo){
        if(nodo!=null){ 
            if(nodo.id==0){
                this.nodosCajas+=  "N" + nodo.id + "[label=\"" + nodo.valor.nombre_actor + "\" ];\n"
            }
            //a = nodo.CAJAPROPIA//creo mi propia caja
            if(nodo.izquierda != null &&nodo.derecha != null){
                //crear
                this.nodosCajas+=  "N" + nodo.izquierda.id + "[label=\"" + nodo.izquierda.valor.nombre_actor + "\" ];\n"
                this.conexiones += "N" + nodo.id + " -> N" + nodo.izquierda.id  + ";\n"
                //conectar
                this.nodosCajas+=  "N" + nodo.derecha.id + "[label=\"" + nodo.derecha.valor.nombre_actor + "\" ];\n"
                this.conexiones += "N" + nodo.id  + " -> N" + nodo.derecha.id + ";\n"
            }else{
                if(nodo.izquierda != null){
                    this.nodosCajas+=  "N" + nodo.izquierda.id + "[label=\"" + nodo.izquierda.valor.nombre_actor + "\" ];\n"
                    this.conexiones += "N" + nodo.id + " -> N" + nodo.izquierda.id  + ";\n"
                }
                if(nodo.derecha != null){
                    this.nodosCajas+=  "N" + nodo.derecha.id + "[label=\"" + nodo.derecha.valor.nombre_actor + "\" ];\n"
                    this.conexiones += "N" + nodo.id + " -> N" + nodo.derecha.id + ";\n"
                }
        }
            this.pre_orden(nodo.izquierda);
            this.pre_orden(nodo.derecha);
        }
    }
    //inorden
    inorden(){
        this.in_orden(this.raiz);
    }
    
    in_orden(nodo){
        if(nodo!=null){
            this.in_orden(nodo.izquierda);
            console.log("Valor:",nodo.valor);
            this.in_orden(nodo.derecha);
        }
    }

    //postorden
    posorden(){
        this.pos_orden(this.raiz);
    }
    
    pos_orden(nodo){
        if(nodo!=null){
            this.pos_orden(nodo.izquierda);
            this.pos_orden(nodo.derecha);
            console.log("Valor:",nodo.valor);           
        }
    }


    graficar(){
        //dot
        let codigodot = "digraph G{\nlabel=\" Arbol Binario \";\nnode [shape=box];\n graph [rankdir = down];\n ";
        this.preorden()
        //console.log(this.nodosCajas)
        //console.log(this.conexiones)
        this.stringFinal += this.nodosCajas +this.conexiones 
        codigodot+= "{\n"+this.stringFinal+"\n}\n}"
        //console.log(codigodot)
        /*codigodot += "//agregando nodos\n"
        codigodot += nodos+"\n"
        codigodot += "//agregando conexiones o flechas\n"
        codigodot += "{\n"+conexiones+"\n}\n}"*/
        //console.log(codigodot)
        d3.select("#liezoAdminGrafos").graphviz() 
            .width(1000)
            .height(540)
            .renderDot(codigodot) 

            
            this.stringFinal="";
            this.nodosCajas ="";
            this.conexiones ="";
    }
}
 



export default ABB;