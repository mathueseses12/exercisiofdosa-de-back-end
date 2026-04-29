// 1. exiba os numeros de 1 a 10 usando for
for(let q = 1; q <= 10; q++){
    console.log(q)
}

// 2. exiba os numeros de 1 a 10 usando for em ordem decrescente
for(let q = 10; q >= 1 ; q--){
    console.log(q)
}

// 3. exiba todos os numeros pares de 2 a 20
for(let q = 2; q <= 20 ; q = q + 2){
    console.log(q)
}

// 4. exiba a tabuada do 5 
for(let q = 1; q <= 10 ; q++){
    console.log(`5 x ${q} = ${5 * q}`)
}

// 5. calcule e exiba  a soma dos numeros de 1 ate 50 
soma = 0
for(let q = 0; q <= 50 ; q++){
    soma = soma + q
    console.log(`a soma e ${soma} `)
}

// 6. conte de 1 ate 8
for(let q = 1; q <= 8; q++){
    console.log(q)
}

// 7. exiba  todos os numeros impares de 1 ate 15
for(let q = 1; q <= 15 ; q = q + 2){
    console.log(q)
}

// 8. multiplique  os numeros de 1 a 10 por 2
for(let q = 1; q <= 10 ; q++){
    console.log(q + "x" + 2 + '=' + 2*q );
}

// 9. some os numeros de 5 em 5 ate 50
for (let i = 0; i<=50; i = i + 5){
    console.log(i);
}

// 10. calcule e exiba o quarado os numeros de 1 a 10 
for(let f = 1; f <= 10 ; f++){
    console.log(f + 'x' + f + "=" + f*f);
}

// 11. verifique se o numero 15 e positivo e exiba uma mensagem
let n = 10;
if (n > 0){
console.log(`o numero ${n} é positivo`)
}

// 12. verifique se uma pessoa com 17 anos e maior de idade
let idd = 19
if(idd < 18){
    console.log(`essa pessoa tem ${idd} anos, logo ela nao é maior de idade`)
}
else{
    console.log(`esse cara ai e maior de idade`)
}

// 13. verifique se o numero 7 e par ou impar
let n = 6;
if( n % 2 == 1){
    console.log(`o numero ${n} e impar`)
}
else{
    console.log(`o numero ${n} e par`)
}

// 14. verifique se a nota 7.5 e suficiente para aprovaçao (media 6)
let nota = 7.5;
if(nota > 6){
    console.log(`a media ${nota} é suficiente pra aprovaçao`)
}
else{
    console.log(`a media ${nota} nao e sufiiente pra aprovacao`)
}

// 15. verifique se o numero 8 e maior que 10
let n = 8;
if(n > 10){
    console.log(`o numero ${n} e maior que 10`)
}
else{
    console.log(`o numero ${n} e menor que 10`)
}

// 16. verifique se o numero 0 e igual a zero
let n = 0;
if(n == 0){
    console.log(`0 igual a 0`)
}
else{
    console.log(`nah`)
}

// 17. compare os numeros 10 e 20 e diga qual e o maior
let n = 10;
if(n < 20){
    console.log(`o numero ${n} e menor que 20`)
}
else{
    console.log(`o numero 20 e maior que 10`)
}

// 18. verifique se uma pessoa de 16 anos pode votar(16+)
let idd = 16
if(idd => 16){
    console.log(`essa pessoa pode votar`)
}
else{
    console.log(`esse pessoa nao pode votar`)
}





