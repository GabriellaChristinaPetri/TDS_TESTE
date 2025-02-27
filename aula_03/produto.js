const produtos = [];
var idProduto = 1;

function createProduct(nome, valor) {
    var produto = { id: idProduto++, nome: nome, valor: valor }
    produtos.push(produto);
    return produto;
};

function deleteProduct(id) {
    for (let i = 0; i < produtos.length; i++) {
        if (produtos[i].id == id) {
            console.log(produtos[i]);
            produtos.splice(i, 1);
            return {};
        };
    };
};

function readProductByID(id) {
    return produtos.filter(item => item.id == id);
}

function updateProduct(id, nome, valor) {
    for (let i = 0; i < produtos.length; i++) {
        if (produtos[i].id == id) {
            produtos[i].nome = nome;
            produtos[i].valor = valor;
            return produtos[i];
        };
    };
}

function listProducts(){
    return produtos;
}

module.exports = {
    createProduct,
    readProductByID,
    updateProduct,
    deleteProduct,
    listProducts
}