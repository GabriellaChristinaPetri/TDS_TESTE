//CRUD
//criar
//ler
//update
//deletar
//id, nome, idade

const pessoas = [];
var idSeq = 1;

function cadastraPessoa(nome, idade)
{
    var pessoa = {id : idSeq++, nome: nome, idade: idade}
    pessoas.push(pessoa);
    return pessoa;
};

function deletaPessoa (id)
{
    const pessoa = {id: id}
    cons
    pessoas.splice(pessoa);
    return pessoa;
}

function listaTodasAsPessoas()
{
    return pessoas;
};

module.exports = 
{
    cadastraPessoa,
    listaTodasAsPessoas
}