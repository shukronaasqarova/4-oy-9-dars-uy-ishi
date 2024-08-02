// forEach METODIGA OID MASALALAR

// 1-masala

// let arr = [1,2,3,4];
// arr.forEach(function(v,i,a){
//     console.log(v*2);
// })

// 2-masala

// let arr = ["apple","banana","cherry"];
// let res = arr.forEach(function(v,i,a){
//     console.log(v.toUpperCase());
// })

// 3-masala

// let arr = [10,20,30,40];
// arr.forEach(function(v,i,a){
//     console.log(v+5);
// })

// 4-masala

// const students = [
//     {name: 'Ali', grade: 85},
//     {name: 'Vali', grade: 92},
//     {name: 'Hasan', grade: 78},
//   ];
//   students.forEach(function(v) {
//     console.log(v.name + ': ' + v.grade);
//   });

// MAP METODIGA OID MASALALAR

// 1-masala

// let arr = [1,2,3,4];
// let res = arr.map(function(v,i,a){
//     return v * 2
// })
// console.log(res);

// 2-masala

// let arr = ["apple","banana","cherry"];
// let res = arr.map(function(v){
//     return v.toUpperCase();
// })
// console.log(res);

// 3-masala

// let arr = [10,20,30,40];
// let res = arr.map(function(v,i,a){
//     return v+5;
// })
// console.log(res);

// 4-masala

// const students = [
//   { name: "Ali", grade: 85 },
//   { name: "Vali", grade: 92 },
//   { name: "Hasan", grade: 78 },
// ];
// students.forEach(function (v) {
//   return v;
// });
// console.log(students);

// FILTER METODIGA OID MASALALAR

// 1-masala

// let arr = [1,2,3,4,5,6];
// let res = arr.filter(function(value){
//     return value % 2 == 0
// })
// console.log(res);

// 2-masala

// let arr = ["apple", "banana", "cherry"];
// let res = arr.filter(function(v){
//     return v.length > 5
// })
// console.log(res);

// 3-masala

// let arr = [12,17,18,19,21]
// let res = arr.filter(function(v){
//     return v > 18
// })
// console.log(res);

// 4-masala

// const students = [
//     {name: 'Ali', grade: 85},
//     {name: 'Vali', grade: 72},
//     {name: 'Hasan', grade: 90},
//     {name: 'Olim', grade: 77}
//   ];
// let res = students.filter(function(v){
//     return v.grade > 80 
// })
// console.log(res);

// FIND METODIGA OID MASALALAR

// 1-masala

// let arr = [4,9,11,2,18];
// let res = arr.find(function(v){
//     return v > 10
// })
// console.log(res);

// 2-masala

// const students = [
//     {name: 'Ali', grade: 80},
//     {name: 'Vali', grade: 90},
//     {name: 'Hasan', grade: 78},
//     {name: 'Olim', grade: 85}
// ]
// let res = students.find(function(v){
//     return v.grade > 85 
// })
// console.log(res);

// SOME/EVERY METODIGA OID MASALALAR

// 1-masala

// let arr = [-1,-2,3,-4];
// let res = arr.some(function(v,i,a){
//     return v > 0;
// })
// console.log(res);

// 2-masala

// let arr = ["cat","dog","elephant"];
// let res = arr.some(function(v,i,a){
//     return v.length > 5;
// })
// console.log(res);

// 3-masala

// let arr = [1,2,3,4];
// let res = arr.every(function(v,i,a){
//     return v > 0
// })
// console.log(res);

// 4-masala

// const students = [
//     {name: 'Ali', grade: 60},
//     {name: 'Vali', grade: 70},
//     {name: 'Hasan', grade: 80}
//   ];
// let res = students.every(function(v){
//     return v.grade > 50
// })
// console.log(res);