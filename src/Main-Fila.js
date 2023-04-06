class Fila{
    constructor(tam=10){
        this.dados = [];
        this.inicio = 0;
        this.fim = 0;
        this.tam = tam;
    }

    enqueue(dado){
        if (!this.isFull()){
            this.dados[this.fim] = dado;
            if (this.fim === this.tam){
                this.fim = 0;
            }else{
                this.fim ++;
            }
        }else throw new Error("Queue overflow");
    }
    dequeue(){
        if (!this.isEmpty()){
            if (this.inicio === this.tam){
                this.inicio = 0
            }else{
                this.inicio++
            }
        }else throw new Error("Queue underflow")
    }
    front(){
        if (!this.isEmpty()){
            return this.dados[this.inicio];
        }else throw new Error ("Empty queue");
    }
    size(){
        if (this.inicio <= this.fim){
            return this.fim - this.inicio;
        }else{
            return this.tam - this.inicio + this.fim + 1;
        }
    }
    isEmpty(){
        return this.inicio === this.fim;
    }
    isFull(){
        return this.size() === this.tam;
    }
    clear(){
        this.inicio = this.fim = 0;
    }
    toString(){}
}

///////////////////////////////////////////////////////////////////////////////////////////


/*

QUESTÃO 3

class FilaCaminhoneiro{
    constructor(){
        this.fila = new Fila()
    }

    adicionarCaminhao(placa){
        if(!this.fila.isFull()){
            this.fila.enqueue(placa)
            console.log(`Caminhoneiro da placa ${placa} foi adicionada a fila`)
        }else{
            console.log("Não foi possível adicionar")
        }
    }

    sairCaminhao(){
        if(!this.fila.isEmpty()){
            let placa = this.fila.front()
            this.fila.dequeue()
            console.log(`Caminhão com essa placa ${placa} saiu da fila`)
        }else console.log("Esse caminhão não saiu")
    }

    listarCaminhoes(){
        if(!this.fila.isEmpty()){
            let caminhoes = ""
            for(let i = this.fila.inicio; i<this.fila.fim; i++){
                caminhoes += this.fila.dados[i] + " "
            }
            console.log(caminhoes)

        }else console.log("Não tem caminhões na fila")
    }

    carregarCaminhao(){
        if(!this.fila.isEmpty()){
            let placa = this.fila.front()
            this.fila.dequeue()
            console.log(`Caminhão com essa placa ${placa} carregado`)
        }else{
            console.log("Esse caminhão não saiu")
        } 
    }

    verificarFila() {
        if (this.fila.isEmpty()) {
          console.log("Não há caminhoneiros na fila.");
        } else {
          console.log("Há caminhoneiros na fila.");
        }
      }
}

const filaCam = new FilaCaminhoneiro()

filaCam.adicionarCaminhao('RGB')
filaCam.adicionarCaminhao('RBG')
filaCam.adicionarCaminhao('GBR')


filaCam.sairCaminhao()

filaCam.carregarCaminhao()
filaCam.adicionarCaminhao('NICE')
filaCam.listarCaminhoes()


*/




/*
QUESTÃO 4
let filaFinal = new Fila()

function intercalarFila(fila1, fila2){
    let filaFinal = new Fila()
    while(!fila1.isEmpty() && !fila2.isEmpty()){
        filaFinal.enqueue(fila1.front())
        fila1.dequeue()
        filaFinal.enqueue(fila2.front())
        fila2.dequeue()
    }

    while(!fila1.isEmpty()){
        filaFinal.enqueue(fila1.front())
        fila1.dequeue()
    }

    while(!fila2.isEmpty()){
        filaFinal.enqueue(fila2.front())
        fila2.dequeue()
    }

    return filaFinal
}

let fila1 = new Fila()

fila1.enqueue(1)
fila1.enqueue(3)
fila1.enqueue(5)
fila1.enqueue(8)
fila1.enqueue(10)

let fila2 = new Fila()


fila2.enqueue(2)
fila2.enqueue(4)
fila2.enqueue(6)



filaFinal = intercalarFila(fila1, fila2)

console.log(filaFinal)
*/
//export default Fila;