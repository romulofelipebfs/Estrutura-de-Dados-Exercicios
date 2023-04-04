class Pilha{
    constructor(tam=5){
        this.dados = [];
        this.topo = 0;
        this.tam = tam;
    }

    push(dado){
        if (!this.isFull()){
            this.dados[this.topo] = dado;
            this.topo++
        }else{
            throw new Error("Stack overflow");
        }
    }
    pop(){
        if (!this.isEmpty()){
            this.topo--
        }else{
            throw new Error("Stack underflow");
        }
    }
    top(){
        if (!this.isEmpty()){
            return this.dados[this.topo-1];
        }
        else{
            throw new Error("Stack underflow");
        }
    }
    isEmpty(){
        return (this.size() === 0)
    }
    isFull(){
        return (this.size() >= this.tam)
    }
    size(){
        return this.topo;
    }
    toString(){}
}


let p = new Pilha()
p.push('A')
p.push('B')

console.log(p)


export default Pilha;