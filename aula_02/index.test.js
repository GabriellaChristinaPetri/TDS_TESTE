const index = require("./index");

test("Soma de dois valores", () => {
    expect(index.soma(1, 1)).toBe(2)
});

test("Divisão de dois valores", () => {
    expect(index.div(10, 2)).toBe(5)
});

test("Multiplicação de dois valores", () => {
    expect(index.multi(2, 4)).toBe(8)
});

test("Subtração de dois valores", () => {
    expect(index.sub(5, 2)).toBe(3)
});

test("Retorno de pessoa", () => {
    expect(index.pessoa()).toEqual({
        id: 1,
        nome: "gc",
        idade: 18
    })
})