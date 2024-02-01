// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0);  //F
console.log(null == 0);  //F
console.log(null >= 0);   //T      because equility check (==) and comparision works diffrently . comparision
                               // converts null into number i.e 0

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);  // always false

// ===   called as strict check ..value ans type both

console.log("2" === 2);        