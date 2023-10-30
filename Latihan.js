// let stringNum = '33124' 
//     let even = 0;
//     let odd = 0;
   
//     for (let i = 1; i <= n; i++) {
//        if (i % 2 === 0) {
//          even++;
//        } else {
//          odd++;
//        }
//     }
   
//     return [even, odd];
   
   
//    console.log(stringNum(5)); // Mengembalikan [2, 3]

//    susunan karakter kata yg di balik akan membentuk karakter aslinya


   const kata = 'kota'
   let kataBalik ='' 

   for(let i =kata.length-1; i >= 0; i-- ){
    kataBalik += kata[i]
   }
   if(kata === kataBalik) console.log('palindrome')
   if(kata !== kataBalik) console.log('Not Palindrome')

