// SCOOPE
//  VAR: TIDAK MENGENAL SCOOPE 
//  let & const: Mengenal scope 

// var 
{
    var name = 'Raihan'
}
console.log(name)

// let & const 
// - Declare di global scope, bisa di akses di local scope 
// {
//    const number = 10  
// }
// console.log(number)

{
    const point = 100
    {
        console.log(point)
        {
            console.log(point)
        }
    }
}

{
    {
        const discount = 50
        console.log(discount)
    }
}

// Buatlah program untuk menampilkan setiap charakter yang ada di dalam variable 
// menggunakan console.log
// Ex. Input = Pwdk
//     output = p   
//              w 
//              d
//              k 

// const input = 'Pwdk'
// console.log(input[0])
// console.log(input[1])
// console.log(input[2])
// console.log(input[3])


const input1 = 'surabaya'
for(let i=0; i < input1.length; i++){
    console.log(input1[i])
}

// Buatlah program untuk menampilkan setiap angka pada sebuah data bertipe data Number 
// ex. input : 62857853331
//     Output: 6
//           : 2
//           : 8
//           : dst

let number = 7777
number = number.toString()
for(let i=0; i < number.length; i++)
    console.log(number[i])

