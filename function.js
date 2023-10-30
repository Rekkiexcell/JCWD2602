// Function
// Sekumpulan code yang bisa digunakan berulang-ulang
// Tempat untuk menyimpan baris code

// Function Declaration
/*
    function functioName()
        Block of code
*/
//  1.Build
function showConsole(){
    console.log('Hello World!')
}
// call
showConsole()

Penjumlahan()
Penjumlahan()
Penjumlahan()
function Penjumlahan(){
    console.log(1 + 1)
}
// function expresion : Function yang dimasukan ke dalam variable
const Pengurangan = function() { // function  () -> Anonymous function
    console.log( 5 - 1)
} 
Pengurangan()


// Function with parameter
const Pembagian = (num1, num2) => { 
    console.log(num1 / num2)
}
Pembagian(10, 5)

function perkaliannn(num1, num2)  {
    console.log(num1 * num2)
}
perkaliannn(3, 3)

//function with return
const Penjumlahan1 = (num1, num2) => {
    return num1 + num2
}
console.log (Penjumlahan1(3, 3) + 3)
console.log (Penjumlahan1(3, 5))
console.log (Penjumlahan1(1, 2) * Penjumlahan1(3, 3))

// functon with rest parameter
const showNumber =  (a, b, c, d, ...manyMore) => {
    console.log(manyMore)
}
showNumber(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

// function  with default parameter
const welcomingName = (name = 'User') => {
    console.log(`Welcome, ${name}!`)
}
welcomingName(123 + 2)
welcomingName('Raihan')

// Recursive Function
const countDown = (num) => {
    console.log(num)
    num--

    if (num > 0) {
        return countDown(num)
    } 

    return num
}
console.log(countDown(5))

// Closure Function : Inner functin yang dapat mengakses variable dari outer function
const greeting = () => {
    const name = 'Defryan'

    const showGreeting = () => {
        console.log(`Welcome, ${name}`)
    }

}

greeting()

// case buatlah validasi input dengan ketentuan
//      -Apabila jumlah karakter 
//