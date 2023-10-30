// trutyfalsy javascript : nilai non- boolean yang dikonversikan menjadi nilai bolean

// falsy : 0, '', null, undefined, nan
console.log(Boolean(0))
console.log(Boolean(''))
console.log(Boolean(undefined))

// truty
console.log(Boolean(1))
console.log(Boolean('a'))

// case . validasi inputan dari user, apabila kosong maka munculkan pesan eror
//        apabila inputan ada maka pesan success
const input = 'a'
if (input === '') {
    console.log('Eror')
}else { 
    console.log('Success')
}

if (input) { // Apabila inputanya ada , maka dia akan success
    console.log('Success')
}else {
    console.log('Eror')
}
