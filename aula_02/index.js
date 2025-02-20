function soma(a, b){
    return a+b;
};

function div(a, b){
    return a/b;
};

function multi(a, b){
    return a*b;
};

function sub(a, b){
    return a-b;
};

function pessoa()
{
    return {
        id: 1,
        nome: "gc",
        idade: 18
    }
}

//console.log(soma(1, 2));

module.exports = {
    soma,
    div,
    multi,
    sub,
    pessoa
};