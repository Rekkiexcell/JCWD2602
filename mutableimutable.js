// MUTABLE vs IMUTABLE

// MUTABLE : non Primitive
// VARIABLE YANG VALUE NYA BISA BERUBAH
let arr = [1,2,3,] // [index-0, index-1, index-2, ,dst ]
newArr = arr
newArr[3]=['V']
console.log(arr)
console.log(newArr)

// Spread Operator ... // untuk mengganti sebuah value
let students = ['kiki', 'Aboy', 'imanuel']
let newStudents = [...students]
newStudents[2] = 'Defryan'
console.log(students)
console.log(newStudents)

// IMUTABLE: Primitive
// variable yang valuenya tidak bisa berubah
let name = 'Raihan'
let newName = name
newName = 'KIKI' 
console.log(name)
console.log(newName)