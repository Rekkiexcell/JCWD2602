// object
// key & value
const user = {
    username:'ryandefryan' //username disebut key, 'ryandefryan' disebut value
}
const student = new Object()

const productNameArr = ['Anggur', 'Jeruk']
const produkPriceArr = [10000, 15000]
const products1 = {
    name: 'Anggur',
    price : 10000
}
const products2 = {
    nama: 'Jeruk',
    price: 15000
}
// console.log(products1)
// console.log(products2)


// CRUD (Create, Read, Update & Delete)
// Create
const campusPwd = {}
campusPwd.location = 'BSD'
campusPwd.building = 'GOP-09'
// console.log(campusPwd)

// Read
// Cara 1
const programPwd = new Object()
programPwd.name = 'Web Development'
programPwd.totalStudents = 9
console.log(programPwd)

// Cara 2
console.log(campusPwd.building)
console.log(programPwd.totalStudents)
console.log(campusPwd['location'])
console.log(campusPwd['building'])

// Update 
const newData = {
    nama: 'Defryan',
    hobby : 'Programing'
}
newData.hobby = 'Futsal'
console.log(newData)

// Delete
newData.hobby = ''
console.log(newData)
delete newData.hobby
console.log(newData)

// Method
// Function yang dimasukan ke dalam object
const myObj = {
    greeting: () => {
        console.log('Wellcome, 2602!')
    },
    greeting1: function(){
        console.log('Hello')
    }
}
myObj.greeting()
myObj.greeting1()

// Accesing key
// Cara1
const studentData = {
    name: 'imanuel',
    address: 'BSD',
    program: 'WD'
}
console.log(Object.keys(studentData))

// Cara2
for(let bebas in studentData){
    console.log(bebas)
    console.log(studentData[bebas])
}

// Distructuring asigment
// destruct dari properti object menjadi variable
const data = {
    name:'Raihan',
    hobby: 'Study'
}
const {name, hobby} = data
console.log(name)
console.log(hobby)

// Spread operator (...)
const studentProfile = {
    name: 'Imanuel',
    program: 'WD'
}


// Aray of object
const productArr = [
    {name: 'Jeruk', price: 10000},
    {name: 'Anggur', price: 15000},
    {name: 'Semangka', price: 20000}
]
console.log(productArr[0]) // (nama: 'Jeruk', price: 10000)
for(let item of productArr){
    console.log(item.name)
}


/*
    Case Buatlah program untuk merubah price number menjadi price IDR dari data berikut:
    [
    {name: 'Jeruk', price: 10000},
    {name: 'Anggur', price: 15000},
    {name: 'Semangka', price: 20000}
    ]
*/

const productMarket = 
[   {name: 'Jeruk', price: 10000},
    {name: 'Anggur', price: 15000},
    {name: 'Semangka', price: 20000} ]
for(let item of productMarket){ 
    item.price = `Rp, ${item.price.toLocaleString('id-ID')}`
}
console.log(productMarket)