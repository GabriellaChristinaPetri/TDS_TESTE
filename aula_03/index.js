const cliente = require("./cliente.js");
const produto = require("./produto.js");
const pedido = require("./pedido.js");

cliente.createClient("Guilherme", 78253551991);
produto.createProduct("Alexa", 1500);
pedido.createPedido(1, 1, 3);

console.log(cliente.listClients());
console.log(produto.listProducts());
console.log(pedido.listPedidos());

