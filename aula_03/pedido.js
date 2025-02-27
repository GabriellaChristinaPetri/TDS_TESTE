const produtoModel = require("./produto.js");

const pedidos = [];
var idPedido = 1;

function createPedido(produto, cliente, qtd) {
    var findProduct = produtoModel.readProductByID(produto.id);
    var total = findProduct.valor * qtd;
    var pedido = { id: idPedido++, produto: findProduct, cliente: cliente, qtd: qtd, total: total }
    pedidos.push(pedido);
    return pedido;
};

function deletePedido(id) {
    for (let i = 0; i < pedidos.length; i++) {
        if (pedidos[i].id == id) {
            console.log(pedidos[i]);
            pedidos.splice(i, 1);
            return {};
        };
    };
};

function readPedidoByID(id) {
    return pedidos.filter(item => item.id == id);
}

function updatePedido(id, produto, cliente, qtd) {
    for (let i = 0; i < pedidos.length; i++) {
        if (pedidos[i].id == id) {
            pedidos[i].produto = produto;
            pedidos[i].cliente = cliente;
            pedidos[i].qtd = qtd;
            return pedidos[i];
        };
    };
}

function listPedidos(){
    return pedidos;
}

module.exports =
{
    createPedido,
    readPedidoByID,
    updatePedido,
    deletePedido,
    listPedidos
}