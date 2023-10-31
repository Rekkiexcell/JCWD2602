// Class : blueprint untuk mencetak object dengan property yang sama
class Students{
    name = ''
    hobby = ''
    program = ''

    constructor(name, hobby, program){
        this.name = name,
        this.hobby = hobby,
        this.program = program
    }
}
const student1 = new Students('Defrian', 'Futsal', 'WD')
const student2 = new Students('kevin',  'Olahraga', 'WD')
console.log(student1)
console.log(student2)
const studentArr = {
    // new Students('Defryan', 'Futsal', 'WD')
    // new Students('Kevin', ' Olahraga', 'WD')
}
console.log(studentArr)


//Excercise
    
class product{
    constructor(name , price, stock){
        this.name = name,
        this.price = price,
        this.stock = stock
    }

}
    
class buah extends product {
    constructor(name, price, stock, unit, expiredDate) {
        super(name, price, stock)
        this.unit = unit,
        this.expiredDate = expiredDate
   }

}
class electronik extends product {
    
    constructor(name, price, stock, weight, merk){
        super(name, price, stock, weight, merk)
        this.weight = weight
        this.merk = merk
    }
}

const product1 = new product ('name', 'price', 'stock')
console.log(product1)

// Encapsulation: proses pembungkusan data ke dalam class
// public property
// private property

class User {
    username = ''
    email = ''
    phoneNumber = ''
    #password = ''

    constructor(username, email, phoneNumber, pasword) {
        this.username = username,
        this.email = email,
        this.phoneNumber = phoneNumber,
        this.#password = ''
    }

}
const user1 = new User('ryandefryan', 'ryan@gmail.com', '08272', 'ryan')
console.log(user1.password)