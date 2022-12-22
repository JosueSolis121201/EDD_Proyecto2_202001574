class Nodo{
    constructor(_valor,data,id){
        this.valor=_valor;
        this.izquierda = null;
        this.derecha = null;
        this.altura = 0;

        this.data=data;
        this.id=id;

    }
}

class AVL{
    constructor(){
        this.raiz = null;

        this.id=0;
        this.nodosCajas;
        this.conexiones;
        this.stringFinal;
    }
    //maximo
    MAXIMO(valor1,valor2){
        if(valor1>valor2) return valor1;
        return valor2;
    }
    //altura del arbol
    altura(nodo){
        if(nodo == null) return -1;
        return nodo.altura;
    }
    //insertar
    insertar(valor,data){
        this.raiz = this.add(valor,this.raiz,data)

    }

    compararString(izquierda,derecha){
        //console.log(+"izquierda: "+izquierda)
        //console.log(+"derecha: "+derecha)
        if(izquierda.localeCompare(derecha) != 1){
            return false
        }
        return true
    }
    //insertar recursivo
    add(valor, nodo,data){
        if(nodo == null) return new Nodo(valor,data,this.id++);
        else{
            if(valor < nodo.valor){
                nodo.izquierda = this.add(valor, nodo.izquierda,data)
                if(this.altura(nodo.derecha)-this.altura(nodo.izquierda) == -2){
                    //programar los casos 
                    //rsi
                    if(valor < nodo.izquierda.valor){
                        nodo = this.rotacionizquierda(nodo);
                    }//rdi}
                    else{
                        nodo = this.Rotaciondobleizquierda(nodo);
                    }
                    
                }
            }else if(valor > nodo.valor){
                nodo.derecha = this.add(valor, nodo.derecha,data);
                if(this.altura(nodo.derecha)-this.altura(nodo.izquierda)== 2){
                    //otros dos casos
                    //rotacion simple derecha
                    if(valor > nodo.derecha.valor){
                        nodo = this.rotacionderecha(nodo);
                    }else{
                        nodo = this.Rotaciondoblederecha(nodo);
                    }
                    //rotacion doble derecha
                }
            }else{
                nodo.valor = valor;
            }
        }
        nodo.altura = this.MAXIMO(this.altura(nodo.izquierda),this.altura(nodo.derecha))+1
        return nodo;
    }


    //rotacion simple izquierda
    rotacionizquierda(nodo){
        var aux = nodo.izquierda;
        nodo.izquierda = aux.derecha;
        aux.derecha = nodo;
        //calculo de nueva altura
        nodo.altura = this.MAXIMO(this.altura(nodo.derecha),this.altura(nodo.izquierda))+1;
        aux.altura = this.MAXIMO(this.altura(nodo.izquierda), nodo.altura)+1;
        return aux;
    }
    //rotacion simple derecha
    rotacionderecha(nodo){
        var aux = nodo.derecha;
        nodo.derecha = aux.izquierda;
        aux.izquierda = nodo;
        //calcular de nuevo altura
        nodo.altura = this.MAXIMO(this.altura(nodo.derecha),this.altura(nodo.izquierda))+1;
        aux.altura = this.MAXIMO(this.altura(nodo.derecha),nodo.altura)+1;
        return aux;
    }
    //rotacion dobles derecha
    Rotaciondoblederecha(nodo){
        nodo.derecho = this.rotacionizquierda(nodo.derecho);
        return this.rotacionderecha(nodo);
    }

    //rotaciones dobles
    Rotaciondobleizquierda(nodo){
        nodo.izquierda = this.rotacionderecha(nodo.izquierda);
        return this.rotacionizquierda(nodo);
    }

    //recorridos
    preorden(){
        this.pre_orden(this.raiz);
        //console.log(this.raiz)
    }
    pre_orden(nodo){
        if(nodo!=null){
            console.log(nodo);
            if(nodo.id==0){
                this.nodosCajas+=  "N" + nodo.id + "[label=\"" + nodo.data.nombre_pelicula + "\" ];\n"
            }
            //a = nodo.CAJAPROPIA//creo mi propia caja
            if(nodo.izquierda != null &&nodo.derecha != null){
                //crear
                this.nodosCajas+=  "N" + nodo.izquierda.id + "[label=\"" + nodo.izquierda.data.nombre_pelicula  + "\" ];\n"
                this.conexiones += "N" + nodo.id + " -> N" + nodo.izquierda.id  + ";\n"
                //conectar
                this.nodosCajas+=  "N" + nodo.derecha.id + "[label=\"" + nodo.derecha.data.nombre_pelicula  + "\" ];\n"
                this.conexiones += "N" + nodo.id  + " -> N" + nodo.derecha.id + ";\n"
            }else{
                if(nodo.izquierda != null){
                    this.nodosCajas+=  "N" + nodo.izquierda.id + "[label=\"" + nodo.izquierda.data.nombre_pelicula  + "\" ];\n"
                    this.conexiones += "N" + nodo.id + " -> N" + nodo.izquierda.id  + ";\n"
                }
                if(nodo.derecha != null){
                    this.nodosCajas+=  "N" + nodo.derecha.id + "[label=\"" + nodo.derecha.data.nombre_pelicula  + "\" ];\n"
                    this.conexiones += "N" + nodo.id + " -> N" + nodo.derecha.id + ";\n"
                }
        }
            
            this.pre_orden(nodo.izquierda);
            this.pre_orden(nodo.derecha);
        }
    }

    //postorden
    postorden(){
        this.post_orden(this.raiz);
    }
    post_orden(nodo){
        if(nodo!=null){
            this.post_orden(nodo.izquierda);
            this.post_orden(nodo.derecha);
            console.log("valor=" +nodo.valor);
        }
    }
    //inorden
    inorden(){
        this.in_orden(this.raiz);
    }
    in_orden(nodo){
        if(nodo!=null){
            this.in_orden(nodo.izquierda);
            console.log("valor=" +nodo.valor);
            this.in_orden(nodo.derecha);    
        }
    }

    graficar(){
        //dot
        let codigodot = "digraph G{\nlabel=\" Arbol AVL\";\nnode [shape=box];\n graph [rankdir = down];\n ";
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
export default AVL;