//CRUD
//criar
//ler
//update
//deletar
//id, nome, idade

const pessoas = [];
var idSeq = 1;

function cadastraPessoa(nome, idade) {
    var pessoa = { id: idSeq++, nome: nome, idade: idade }
    pessoas.push(pessoa);
    return pessoa;
};

function deletaPessoa(id) {
    for (let i = 0; i < pessoas.length; i++) {
        if (pessoas[i].id == id) {
            console.log(pessoas[i]);
            pessoas.splice(i, 1);
        };
    };

    //forma "clean de executar o código nas normas e meios JavaScript"

    /*const inicio = pessoas.filter((item, index) => {
        if (item.id == id) {
            return index;
        }
    });

    if (inicio.length <= 0) {
        return "codigo invalido";
    }
    else {
        pessoas.splice(inicio, 1);
        return "deletado com sucesso";
    };*/
};

function consultaPessoaID(id) {
    return pessoas.filter(item => item.id == id);
}

function atualizaPessoa(id, nome, idade) {
    for (let i = 0; i < pessoas.length; i++) {
        if (pessoas[i].id == id) {
            pessoas[i].nome = nome;
            pessoas[i].idade = idade;
            return pessoas[i];
        };
    };
}

function listaTodasAsPessoas() {
    return pessoas;
};

module.exports =
{
    cadastraPessoa,
    listaTodasAsPessoas,
    deletaPessoa,
    consultaPessoaID,
    atualizaPessoa
}