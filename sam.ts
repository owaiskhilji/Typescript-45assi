// Q/01
// Download Compelted

import { log } from "console";

// Q/02
// let Nme = "sameer";
// console.log(Nme, "would you like to learn some Python today?");

// Q/3
// let Nme = "owAIs";
// let lowerNme = Nme.toLowerCase();
// console.log(lowerNme);
// let upperNme = Nme.toUpperCase();
// console.log(upperNme);
// let title = Nme.slice(0,1).toUpperCase()
// let title2 = Nme.slice(1).toLowerCase()
// let sum = title+ title2
// console.log(sum);

// Q/4

// var Nme = "Albert Einstein";
// var qoute = " “A person who never made a mistake never tried anything new";
// console.log(Nme, "once said", qoute);

// Q/5
// var Nme = "Albert Einstein";
// var qoute = " “A person who never made a mistake never tried anything new";
// console.log(Nme, "once said", qoute);

// Q/6
// const Nme = "\t\n  owais \t\n";
// console.log("with whitespace:", Nme);

// const outspace = Nme.trim();
// console.log("without whitespace:", outspace);

// Q/7
// let sum = 8 + 8;
// let sub = sum - 8;
// let mult = sub * 8;
// let divid = mult / 8;
// console.log(divid);

// Q/8

// console.log(4 + 4);
// console.log(6 + 2);
// console.log(5 + 3);
// console.log(7 + 1);

// Q/9

// let favouriteNum = 7;
// console.log("My fourite number is :", favouriteNum);

// Q/10
// End me dekhe ge

// Q/11

// let arr = ["farhan", "asad", "faizan"];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// Q/12

// let arr = ["farhan", "asad", "faizan"];
// for (let i = 0; i < arr.length; i++) {
//   console.log(`Hello ${arr[i]} How are you?`);
// }

// // Q/13
// let arr = ["Honda", "Suzuki", "Superstar"];
// for (let i = 0; i < arr.length; i++) {
//   console.log(`I would like to own ${arr[i]} bike`);
// }

// Q/14

// let guests = ["Ali", "Ubaid", "Qasim"];
// for (let i = 0; i < guests.length; i++) {
//   console.log(` I invite you to dinner ${guests[i]} `);
// }

// Q/15

// let guests = ["Ali", "Ubaid", "Qasim"];
// let removeguest = guests.splice(1, 1);
// let addguest = "saleem";
// guests.push(addguest);
// for (let i = 0; i < guests.length; i++) {
//   console.log(` I invite you to dinner ${guests[i]} `);
// }

//  Q/16

// let guests = ["Ali", "Ubaid", "Qasim"];
// let add = "owais";
// guests.unshift(add);
// let add2 = "kareem";
// let removeguest = guests.splice(2, 0, add2);
// let add3 = "saleem";
// guests.push(add3);
// for (let i = 0; i < guests.length; i++) {
//   console.log(`  you found a bigger dinner table. ${guests[i]} `);
// }

// Q/17

// let guests = ["Alice", "Bob", "Charlie", "David"];

// while (guests.length > 2) {
//   let removedGuest = guests.pop();
//   console.log("Sorry " + removedGuest + ", I can't invite you to dinner.");
// }

// guests.forEach((guest) => {
//   console.log("Hey " + guest + ", you're still invited to dinner!");
// });

// guests.splice(0, guests.length);
// console.log("Guest list is now empty:", guests);

// Q/18
// const places = ['Karachi','Lahore','Quetta','Aptabad','Islamabad']
// places.forEach((data)=>{
//     console.log(data);

// })
// places.sort()
// places.forEach((data)=>{
//     console.log(data);

// })
// places.reverse()
// places.forEach((data)=>{
//     console.log(data);

// })

// Q/19

//  let guests = ["Alice", "Bob", "Charlie", "David"];
// console.log(`you are invited ${guests.length} persons `);

// Q/20
// const places = ['Karachi','Lahore','Quetta','Aptabad','Islamabad']
// places.forEach((data)=>{
//     console.log(data);

// Q/21
// const obj = {
//   Firstname: "owais",
//   Lastname: "khilji",
//   Age: 24
// };
// for (let key in obj) {
//   console.log(key, ":", obj[key]);
// }

// Q/22
// const num = [1,2,3,4,5,6]
// console.log(num[7]);//undefined
// console.log(num[5]);defined

// Q/23
// let Name = "Owais";
// Condition no 01
// console.log(Name == 'Owais');
// Condition no 02
// console.log(Name == 'Kareem');
// Condition no 03
// console.log(Name !== 'Kareem');
// Condition no 04
// console.log(Name !== 'Owais');
// Condition no 05
// console.log(Name.includes('Owais'));
// Condition no 06
// console.log(Name.includes('owais'));
// Condition no 07
// console.log(Name.length== 5);
// Condition no 08
// console.log(Name.length !== 5);
// Condition no 09
// console.log(Name.length !== 10);
// Condition no 10
// console.log(Name.length == 10);

// Q/24
// let str1 = "hello";
// let str2 = "world";
// let str3 = "hello";

// // Equality test using ==
// console.log( str1 == str2);  //  false
// console.log( str1 == str3);  // true

// let str1 = "HELLO";
// let str2 = "hello";
// let str3 = "Hello";
//  //tolowerCase test using==
// console.log( str1.toLowerCase() == str2)// true
// console.log( str1 == str3);  //false

// let a = 5;
// let b = 10;
// let c = 15;
// let d = 5;
//  Numerical and &&,||  test usinf ==
// console.log(a == d && a !== b);
// console.log(b < c && b > a);
// console.log(b < c || a == d);
// console.log(b > a || a == d);

// Array test using ==
// const num = [1,2,3,4,5,6]
// console.log(num.includes(3));
// console.log(num.includes(8));

// Q/25

// const Aelian_color = "yellow";
// if(Aelian_color == 'yellow'){
//     console.log('the player just earned 5 points.');
// }
// else{
//     console.log('Aelian_color is not yellw');

// }

// Q/26

// const Aelian_color = "green";
// if(Aelian_color == 'green'){
//     console.log('the player just earned 5 points.');
// }
// else{
//     console.log('the player just earned 10 points.');
// }

// Q/27

// let alien_color = 'green';

// if (alien_color === 'green') {
//     console.log("Player earned 5 points for shooting the green alien!");
// } else if (alien_color === 'yellow') {
//     console.log("Player earned 10 points for shooting the yellow alien!");
// } else if (alien_color === 'red') {
//     console.log("Player earned 15 points for shooting the red alien!");
// }

// Q/28
// const Age_man = 2;
// if(Age_man > 1){
//     console.log('the person is a baby.');
// }
// if(Age_man < 4){
//     console.log('the person is a toddler.');
// }
//         const Age_man2 = 4
// if(Age_man2 < 13){
//     console.log('the person is a kid.');
// }
//         const Age_man3 = 13
// if(Age_man3 < 20){
//     console.log('the person is a teenager.');
// }
//         const Age_man4 = 20
// if(Age_man4 < 65){
//     console.log('the person is a adult.');
// }
// const Age_man5 = 65;
// if (Age_man5 == 65 || Age_man5 <66 ) {
//   console.log("the person is a elder.");
// }

// Q/29
// const favouritefruit =['Mango','Banana','Apple']
// if (favouritefruit.includes('Mango')) {
//     console.log('This is my Favourite Fruit');

// }
// if (favouritefruit.includes('Banana')) {
//     console.log('This is my Favourite Fruit');

// }
// if (favouritefruit.includes('Apple')) {
//     console.log('This is my Favourite Fruit');

// }
// if (favouritefruit.includes('Kiwi')) {
//     console.log('This is my Favourite Fruit');

// }
// if (favouritefruit.includes('Orange')) {
//     console.log('This is my Favourite Fruit');

// }

// Q/30

// const usernames = ['Admin','ALI','Kareem','Owais','Bilal']
// for(let i =0; i<usernames.length;i++){
//     if(usernames[i] == 'Admin'){
//         console.log("Hello admin, would you like to see a status report?");
//     }
// else{
//     console.log(`Hello ${usernames[i]}, thank you for logging in again`)

// }
// }

// Q/31

// const usernames =[]
// if (usernames.length == 0) {
//     console.log('We need to find some users');

// }

// Q/32
//  const current_users = ['Ali','Naeem','Sarim','Owais','Bilal']
//  const new_users = ['Asad','Ali','Ubaid','Qasim','Owais']
// for(let i = 0; i<new_users.length;i++){
//     if (current_users.includes(new_users[i])) {
//         console.log('the person will need to enter a new username');
//     }
//     else
//     {
//         console.log(' The username is available')
        
//     }
// }