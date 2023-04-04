class Pilha{
    constructor(tam=10){
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

/*

QUESTÃO 2:

let p = new Pilha(7)
let p2 = new Pilha(7)

p.push('A')
p.push('B')
p.push('A')
p.push('C')
p.push('A')
p.push('X')
p.push('I')



while(!p.isEmpty()){
    p2.push(p.top())
    p.pop()
}

console.log(p2)
*/


let p = new Pilha();
let pAux = new Pilha();

p.push('A')
p.push('B')
p.push('A')
p.push('C')
p.push('A')
p.push('X')
p.push('I')

let baseAux;
let base = p.top()

while(!p.isEmpty()){
    pAux.push(p.top())
    //baseAux = p.top()
    p.pop()
}

//console.log(baseAux)

let topo = pAux.top()



// base = I
// topo = A

p.push(base)

//console.log(pAux)

pAux.pop()
while((!pAux.isEmpty() && pAux.top()!==base)){
    p.push(pAux.top())
    pAux.pop()
}
p.push(topo)
console.log(p)
//export default Pilha;