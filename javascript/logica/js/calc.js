function soma(a, b) {
    return a+b;
}

function subtracao(a, b) {
    return a-b;
}

function multiplacao(a, b) {
    return a*b;
}

function divisao(a, b) {
    return a/b;
}

const somaMaiUm = (a, b) => {
    return a+b+1;
};

function calcular(a, b, op) {
    return op(a, b);
} 

let result = calcular(9, 2, (a, b) => {
    return a % b;
});

console.log(result);
