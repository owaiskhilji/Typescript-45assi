"use strict";
// Q/01
// Download Compelted
Object.defineProperty(exports, "__esModule", { value: true });
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
// Q/33
// const positions = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (let i = 0; i < positions.length; i++) {
//   let ord;
//   if (i == 0) {
//     ord = "st";
//   } else if (i == 2) {
//     ord = "nd";
//   } else if (i == 3) {
//     ord = "rd";
//   } else {
//     ord = "th";
//   }
//   console.log(`${positions[i]}${ord}`);
// }
// Q/34
// let pizzas = ['Pizza Point','Pizza Max','Pizza Hut']
// for(let i=0;i<pizzas.length;i++){
//     console.log(`I like ${pizzas[i]} of pizza`);
// }
// console.log('I like really pizza');
// // Q/35
// const animals = ['Lion','Tiger','Leopard']
// for(let i=0;i<animals.length;i++){
//     console.log(`A ${animals[i]} is a dangerous animal`);
// }
// console.log('These three animals are predatory animals');
// Q/36
// let make_shirt = (size,sms)=>{
// console.log(`Size : ${size} | Message : ${sms}`);
// }
// make_shirt('24inch','Hello')
// Q/37
// let make_shirt = (size = 'large',sms ='I love Typescript')=>{
// console.log(`Size : ${size} | Message : ${sms}`);
// }
// // large shirt
// make_shirt()
// // medium shirt
// make_shirt('Medium','I love Javascript')
// // small shirt
// make_shirt('Small','I love Pathon')
// Q/38
// let describe_city =(city , country='in pakistan')=>{
//     console.log(` ${city} ${country}`)
// }
// describe_city('Karachi')
// describe_city('Lahore')
// describe_city('Islamabad',' is a beautifull city of pakistan')
// Q/39
// let city_country = (city,country)=>{
//     return `${city} ${country}`
// }
// let city1 = city_country('karachi', 'pakistan')
// let city2 = city_country('dehli' ,'india')
// let city3 = city_country('newyork', 'usa')
// console.log(city1) ;
// console.log(city2) ;
// console.log(city3) ;
// Q/40
// function make_album(artist, album_title, num_tracks) {
//     let album = { artist: artist, album_title: album_title };
//     if (num_tracks) {
//         album.num_tracks = num_tracks;
//     }
//     return album;
// }
// // Making album objects
// let album1 = make_album("Artist1", "Album1");
// let album2 = make_album("Artist2", "Album2", 12); // Includes number of tracks
// let album3 = make_album("Artist3", "Album3");
// // Printing album objects
// console.log(album1);
// console.log(album2);
// console.log(album3);
// IS KO DOBARA DEKHNA H
// Q/41
// const magicians =['magician1','magician2','magician3']
// const show_magicians =()=>{
//     magicians.forEach((data)=>{
//         console.log(data);
//     })
// }
// show_magicians()
// Q/42
// const magicians =['magician1','magician2','magician3']
// const show_magicians =()=>{
//     magicians.forEach((data)=>{
//         console.log(data);
//     })
// }
// const make_magicians = ()=>{
//     for (let i = 0; i < magicians.length; i++) {
//         magicians[i] = `The Great ${magicians[i]}`;
//     }
// }
// make_magicians()
// show_magicians()
// Q/43
// const magicians =['magician1','magician2','magician3']
// function show_magicians(magicians) {
//     for (let magician of magicians) {
//         console.log(magician);
//     }
// }
// function make_great(magicians) {
//     let greatMagicians = [];
//     for (let magician of magicians) {
//         greatMagicians.push(`the Great ${magician}`);
//     }
//     return greatMagicians;
// }
// // Array of magician's names
// let greatMagicians = make_great([...magicians]);
// console.log("Original Magicians:");
// show_magicians(magicians);
// console.log("\nGreat Magicians:");
// show_magicians(greatMagicians);
// Q/44
// const sendwich =(...data) =>{
//     console.log("Making a sandwich with:");
// for(let i = 0;i<data.length;i++){
//     console.log(data[i]);
// }
// }
// sendwich('turkey','cheeze')
// sendwich('butter','swiss')
// sendwich('double butter','jelly')
// Q/45
var createcar = function (manufacture, model) {
    var argu = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        argu[_i - 2] = arguments[_i];
    }
    var car = {
        manufacture: "".concat(manufacture),
        model: "".concat(model)
    };
    for (var i = 0; i < argu.length; i += 2) {
        var key = argu[i];
        var value = argu[i + 1];
        car[key] = value;
    }
    return car;
};
var mycar = createcar('toyota', 'corolla', 'color', 'blue');
console.log(mycar);
