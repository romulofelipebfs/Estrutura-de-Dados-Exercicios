import Pilha from "../src/Pilha";

let p;

beforeEach(
    () => {
        p = new Pilha(5);
    }
);

test("Tamanho da Pilha recem instanciada é zero",
    () => {
        expect(p.size()).toBe(0);
    }
);

test("A pilha recem instanciada é vazia",
    () => {
        expect(p.isEmpty()).toBe(true);
    }
);

test("A pilha recem instanciada não deve estar cheia",
    () => {
        expect(p.isFull()).toBe(false);
    }
);

test("O comando pop em uma pilha recem instanciada retorna Erro de stackunderflow",
    () => {
        expect(() => {
            p.pop();
        }).toThrowError("Stack underflow");
    }
);


test("A pilha recem instanciada após um push o tamanho é 1",
    () => {
        p.push('A')
        expect(p.size()).toBe(1);
    }
);


test("LIFO",
    () => {
        p.push('A')
        p.push('B')
        expect(p.top()).toBe('B');
    }
);


test("O comando push em uma pilha cheia retorna Erro de stackoverflow",
    () => {
        expect(() => {
            p.push('A');
            p.push('B');
            p.push('C');
            p.push('D');
            p.push('E');
            p.push('F');
        }).toThrowError("Stack overflow");
    }
);


test("Outro teste de LIFO",
    () => {
        p.push('A')
        p.push('B')
        p.pop()
        expect(p.top()).toBe('A');
    }
);
