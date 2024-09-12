/*

Függvény, am 1-től x-ig összead minden számot

+1 contribution

*/

function sum(num){
    let amount = 0;
    for (let i = 1; i <= num; i++){
        amount += i;
    }
    return amount;

}

console.log(sum(4))

function szamol(x, y){
    return x*2**y
}


// Hatványozás: alap ** kietvő
console.log(szamol(10,3))

/* 

A függvény kiszedi egy külön listába egy számlista legkissebb és legnagyobb értékét

ol.: [1,2,3,4,5] --> [1,4]

*/

function minimax(lista){
    const min, max = lista[0]; //2 új változót 1 sorba értékük pedig a lista 1. eleme

    for (var i = 0; i < lista.length; i++){
        if (lista[i] > max) {
            max = lista[i];
        }
        if (lista[i] < min) {
            min = lista[i];
        }
    }
    return[min, max]
}