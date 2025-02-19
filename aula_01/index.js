const pessoa = require("./pessoa.js");

pessoa.cadastraPessoa("aaa", 19);
pessoa.cadastraPessoa("bbb", 19);
pessoa.cadastraPessoa("ccc", 19);
pessoa.cadastraPessoa("ddd", 19);
pessoa.cadastraPessoa("eee", 19);
pessoa.cadastraPessoa("fff", 19);
pessoa.cadastraPessoa("ggg", 19);
pessoa.cadastraPessoa("hhh", 19);
pessoa.cadastraPessoa("iii", 19);
pessoa.cadastraPessoa("jjj", 19);
pessoa.cadastraPessoa("kkk", 19);


console.log(pessoa.listaTodasAsPessoas());

pessoa.deletaPessoa(3);

console.log(pessoa.listaTodasAsPessoas());