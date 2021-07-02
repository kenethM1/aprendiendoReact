//Arreglo JS

const arreglo = [];
for (let i = 0; i <= 9; i++) {
    arreglo[i] = i;

};

let arreglo2 = [...arreglo, 5];

let arreglo3 = arreglo2.map(function (x) {
    return x * 2
});

console.log(arreglo3);