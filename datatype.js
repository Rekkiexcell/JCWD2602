// DATA TYPES / TYPE DATA 
// Primitive : string , number, null, undefiined, bolean
// Non Primitive: Araya & Object

//  - String  -> Type data  yang ditandai dengan '',"" or ``
//  - (Typeof) -> syntax untuk mengetahui type data sebuah value 
const campusPwd2 = 'JKT'
const campusPwd3 = `BDG "lets'go" `

console.log(typeof campusPwd2)
console.log(campusPwd3)

// string literial ("$") untuk mempermudah kita  dalam menyisipkan syntax JS di dalam sting (``)
const name = 'Defrian'
const hobby = 'Belajar'
console.log('My name is ' + name + ', My hobby is ' + hobby)
console.log(`My name is ${name}, My hobby is ${hobby}`)

// number
const point = 100
const num = 0.1
console.log(typeof num)

// -Bolean -> tipe data yang hanya bernilai true & false
const isGraduated = true
const isMaried = false
console.log(typeof isGraduated)
console.log(typeof isMaried)

// Null
const angka = null

// - undefined
let angka1
console.log(typeof angka)
console.log(typeof angka1)

// - Date 
const now = new Date()
console.log(now)
console.log(now.getDate())
console.log(now.getFullYear())