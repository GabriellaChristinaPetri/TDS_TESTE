const clientes = [];
var idCliente = 1;

function createClient(nome, cpf) {
    var cliente = { id: idCliente++, nome: nome, cpf: cpf }
    clientes.push(cliente);
    return cliente;
};

function deleteClient(id) {
    for (let i = 0; i < clientes.length; i++) {
        if (clientes[i].id == id) {
            console.log(clientes[i]);
            clientes.splice(i, 1);
            return {};
        };
    };
};

function readClientByID(id) {
    return clientes.filter(item => item.id == id);
}

function updateClient(id, nome, cpf) {
    for (let i = 0; i < clientes.length; i++) {
        if (clientes[i].id == id) {
            clientes[i].nome = nome;
            clientes[i].cpf = cpf;
            return clientes[i];
        };
    };
}

function listClients() {
    return clientes;
};

module.exports =
{
    createClient,
    readClientByID,
    updateClient,
    deleteClient,
    listClients
}