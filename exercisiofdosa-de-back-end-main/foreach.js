//exercicios foreach
let numeros = [1,2,3,4];
console.log("for");
for(let i=0; i<numeros.length; i++){
console.log(numeros[i]);
}

console.log("foreach anonima");
numeros.forEach(function(n){
    if(n % 2 === 0){
        console.log(n);}
});

console.log('foreach arrow');
numeros.forEach(n => console.log(n));

//mostre todos os vlores no terminal
//daos do array:
//let frutas ['maca','banana','uva','abacate']
let frutas = ["maca","banana","uva","abacate"]
frutas.forEach(function(f){
    if (f % 2 === 0){
        console.log(f);}
});
