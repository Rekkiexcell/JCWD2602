// CONDITIONAL STATMENT 
// PENGKONDISIAN

// if  
/* if(condition){ // apabila condition terpenuhi} */

    const poinStudent = 80
    if (poinStudent > 70) { // 80 > 70? true
        console.log('Student Lulus')
    } if ('abc' == 'Abc') { // false 
        console.log('sama')
    }
// if - else ---> Else sebagai default ouput apabila
  if (50 < 80) {
    console.log('Runing')
} else {
    console.log('Error')
}
//  - else if 
const nilaiSiswa1 = 74
if(nilaiSiswa1 > 90){ // false
    console.log('LULUS BAIK')
}else if(nilaiSiswa1 > 74){
    console.log('LULUS BAGUS')
}else if(nilaiSiswa1 > 70){
    console.log('LULUS')
}else{
    console.log('TIDAK LULUS')
}

const nilaiSiswa = 60
if(nilaiSiswa > 90){
    console.log('LULUS BAIK')
}else if (nilaiSiswa > 70){
    console.log('LULUS')
}else{
    console.log('TIDAK LULUS')
}


// Ternary Operator
/*
condition? blok of code if condition === true : block of code if condition === false
*/
// Saya ingin memvalidasi  panjang input dari form user dengan 2 kondisi
// Jumlah karakter > 19 ---> Register Failed
// Jumlah karakter < 20 ---> Register Success
const formUser = 'defrian@gmail.com'

if (formUser.length > 18) {
    console.log('Register Failed')
} else {
    console.log('Register Success')
}

formUser.length > 15?
console.log('Fail') : 
console.log('Success') // Ternary Operator

const point = 60
point > 90? 
console.log('Nilai Anda Baik!') :
point > 70?
console.log('Nilai Anda Cukup') : 
console.log('Nilai Anda Kurang')