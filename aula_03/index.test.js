const cliente = require("./cliente.js");
const produto = require("./produto.js");
const pedido = require("./pedido.js");

test("cadastro de cliente", () => {
    expect(cliente.createClient("Guilherme", 78253551991)).toEqual({
        id: 1,
        nome: "Guilherme",
        cpf: 78253551991
    })
});

test("cadastro de produto", () => {
    expect(produto.createProduct("Alexa", 1500)).toEqual({
        id: 1,
        nome: "Alexa",
        valor: 1500
    })
});

test("cadastro de pedido", () => {
    expect(pedido.createPedido(1, 1, 3)).toEqual({
        id: 1,
        produto: [],
        cliente: 1,
        qtd: 3,
        total: 4500
    })
});

test("ler clientes", () => {
    expect(cliente.listClients()).toEqual([{
        id: 1,
        nome: "Guilherme",
        cpf: 78253551991
    }])
});

test("ler produtos", () => {
    expect(produto.listProducts()).toEqual([{
        id: 1,
        nome: "Alexa",
        valor: 1500
    }])
});

test("ler pedidos", () => {
    expect(pedido.listPedidos()).toEqual([{
        id: 1,
        produto: 1,
        cliente: 1,
        qtd: 3,
        total: 4500
    }])
});

test("muda cliente", () => {
    expect(cliente.updateClient(1, "Gui", 782)).toEqual({
        id: 1,
        nome: "Gui",
        cpf: 782
    })
});

test("muda produto", () => {
    expect(produto.updateProduct(1, "Alex", 150)).toEqual({
        id: 1,
        nome: "Alex",
        valor: 150
    })
});

test("muda pedido", () => {
    expect(pedido.updatePedido(1, 1, 4)).toEqual({
        id: 1,
        produto: 1,
        cliente: 1,
        qtd: 4,
        total: 600
    })
});

test("deleta cliente", () => {
    expect(cliente.deleteClient(1)).toEqual({});
});

test("deleta produto", () => {
    expect(produto.deleteProduct(1)).toEqual({});
});

test("deleta pedido", () => {
    expect(pedido.deletePedido(1)).toEqual({});
});