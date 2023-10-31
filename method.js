// Method
// sourcut untuk manipulasi data

// 1. String Built-in Method
// .length -> Untuk menghitung jumlah karakter
const paragraph = 'Abcdefghijklmnopq00001010' 
console.log(paragraph.length) 

// .silice -> Untuk Memotong // 01234
const text = 'Hello, World!'  
console.log(text.slice(0, 5)) // Hello

// .substring --> apabila parameter index pertamanya > dari parameter index kedua, maka akan dilakuakan switch 
const name = '123456789'
console.log(name.substring(1, 5)) // Dimulai index ke-2, Sampai index ke-5 

// .topUppercase & .toLowercase
const fullName = 'Defryan'
console.log(fullName.toUpperCase()) // DEFRYAN
console.log(fullName.toLowerCase()) // defryan

// 2. Number Built-Method
// - .toString ->  Merubah value dari number menjadi string
const phoneNumber = 628468995030283
console.log(phoneNumber.toString())

// - Math Round --> Pembulatan sesuai aturan matematika
console.log(Math.round(1.6))
// - Math Ceil pembulatan ke atas
console.log(Math.ceil(1.8))
// - Math Floor pembulatan ke bawah
console.log(Math.floor(1.3))