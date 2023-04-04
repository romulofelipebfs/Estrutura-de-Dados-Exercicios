import Fila from "../src/Fila";

let f;

beforeEach(
    () => {
        f = new Fila(5);
    }
);

test("Tamanho da Fila recem instanciada é zero",
    () => {
        expect(f.size()).toBe(0);
    }
);

test("A Fila recem instanciada é vazia",
    () => {
        expect(f.isEmpty()).toBe(true);
    }
);

test(" Fila recem instanciada não está cheia",
    () => {
        expect(f.isFull()).toBe(false);
    }
);

test("O tamanho da Fila ao adicionar um elemento é 1",
    () => {
        f.enqueue('A');
        expect(f.size()).toBe(1);
    }
);

test("Após adicionar 2 elementos e remover 1, o tamanho é 1",
    () => {
        f.enqueue('A');
        f.enqueue('B');
        expect(f.front()).toBe('A');
        f.dequeue();
        expect(f.front()).toBe('B');
        expect(f.size()).toBe(1);
    }
);

test("O comando enqueue em uma fila cheia retorna Erro de queue overflow",
    () => {
        expect(() => {
            f.enqueue('A');
            console.log(f.dados)
            f.enqueue('B');
            console.log(f.dados)
            f.enqueue('C');
            console.log(f.dados)
            f.enqueue('D');
            console.log(f.dados)
            f.enqueue('E');
            console.log(f.dados)
            f.enqueue('F');
            console.log(f.dados)
        }).toThrowError("Queue overflow");
    }
);

test("O comando dequeue em uma fila vazia retorna Erro de queue underflow",
    () => {
        expect(() => {
            f.dequeue();
        }).toThrowError("Queue underflow");
    }
);

test("A fila circular move os ponteiros de início e fim",
    () => {
        f.enqueue('A');
        f.enqueue('B');
        f.enqueue('C');
        f.enqueue('D');
        f.enqueue('E');
        expect(f.size()).toBe(5);
        f.dequeue();
        f.dequeue();
        expect(f.size()).toBe(3);
        expect(f.front()).toBe('C');
        f.enqueue('F');
        f.enqueue('G');
        expect(f.size()).toBe(5);
        expect(f.isFull()).toBe(true);
        f.dequeue();
        f.dequeue();
        f.dequeue();
        f.dequeue();
        f.dequeue();
        expect(f.isEmpty()).toBe(true);
        expect(f.size()).toBe(0);
    }
);