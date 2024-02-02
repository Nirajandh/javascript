// let mydate= new Date();
// console.log(mydate)  //2024-02-02T05:52:43.839Z
// console.log(mydate.toString())  //Fri Feb 02 2024 05:52:43 GMT+0000 (Coordinated Universal Time)
// console.log(mydate.toDateString())  //Fri Feb 02 2024
// console.log(mydate.toISOString())   //2024-02-02T05:52:43.839Z
// console.log(mydate.toLocaleDateString())   //2/2/2024
// console.log(mydate.toLocaleString())     //2/2/2024, 5:52:43 AM
// console.log(mydate.toJSON())            //[Function: toTimeString]
// console.log(mydate.toTimeString)       //2024-02-02T05:52:44.098Z
// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})
