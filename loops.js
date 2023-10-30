// LOOPING -> PERULANGAN
// console.log('Hello World')
// console.log('Hello World')
// console.log('Hello World')
// console.log('Hello World')
// console.log('Hello World')

// - while

/* 
while(condiition){
    blok of code
} 
*/
let start = 1  //1 ---> 2; 2 ---> 3; 3 ---> 4
while(start <= 1){ // 1 <= 3? true ---> 2 <= 3? true ---> 3 <= 3? true ---> 4 <=3? false
    console.log('Hello World') // 1x ---> 2x ---> 3x
    start++
}

let initial = 1
while(initial < 3){ // true ---> false
     console.log('*')
    initial += 10
}

// - Do - while
/* 
    do{
        Block of code
    }while(condition)
*/
let angka = 1 // 1 ->2; 3->4
do {
    console.log(angka) // 1x -> 2x -> 3x
    angka++
} while (angka <= 2)

let angka2 = 100
do{
    console.log(angka2)
}while(angka2 < 10)

// - For Loop
/*
for(start; condition; exitWai){
    Block of Code
}
*/
for(let i=0; i <= 1; i++){
    console.log(i)
}

// Ex. Buatlah console .log untuk menampilkan  angka dari 10 -> 1 

for(let i=0; i >= 1; i--){
    console.log(i)
}