// Strings
// let a = "Ulfat"

// let b = ['ulfat', 'zakirli']
// console.log(b[0]);

// console.log(a.length);
// console.log(b.length);

// console.log(a.toLowerCase());
// console.log(a.toLocaleLowerCase())
// console.log(a.toUpperCase());;
// console.log(a.toLocaleUpperCase());;

// console.log(a[0]);
// console.log(a[a.length -1]);
// console.log(a.at(-1));

// let check = 'U'

// console.log(a.toLowerCase().startsWith(check.toLowerCase()));
// // console.log(a.endsWith('t'));

// let a = 'ramil janmirzayev'
// const list = a.split(' ')
//     console.log(list[0]);

// console.log(a.includes('l'));
// console.log(a.lastIndexOf('l'));

// console.log(a.replaceAll('r', 'R'));


// let user = 'ramil'
// let user2 = 'ramil janmirzayev'

// console.log(user.toUpperCase().slice(0, 1) + user.slice (1,  5));
// console.log(user2.toUpperCase().slice(0, 1) +  user2.slice(1,  6) + user2.toUpperCase().slice(6, 7) + user2.slice(7));
// console.log(user2.slice(0, 6).replace('r', 'R') +  user2.slice(6).replace('j', 'J'));


// let text= 'code acadmy cs403 baku'
// console.log(text.split(' ').join(' ') );

// const students = ['Ramil','Liza','Rebecca','Roberto','Ramo']
// const ages= [19,20,21,22,23,16,24]

// Array methods, filter

// console.log(students.map((student, Roberto) => 'student: ' + student))
// console.log(ages.map((age) => age * 10));
// console.log(students.filter((student) => !student.startsWith('R')));
// const ageIndex= ages.map((age, index) =>{
//     if (age >= 20) {
//         return index
//     }
// }). filter(item => item)

// console.log(ageIndex);
// console.log(students.filter((student, index) => ageIndex.includes(index)));






const students = [
    {
        name: 'Elmir',
        age: 20,
        gender: 'Male'
    },
 
    {
        name: 'Ibrahim',
        age: 22,
        gender: 'Male'
    },

    {
        name: 'Aysu',
        age: 20,
        gender: 'Female'
    },

    {
        name: 'Elnur',
        age: 19,
        gender: 'Male'
    },

    {
        name: 'Ismət',
        age: 25,
        gender: 'Female'
    },
]

// 1.console only age
// 2.console only gender
//    3.console only name
// 4.filter age that is equal and greater than 20
// 5. filter only female
// 6. filter name which starts 'r'
// 7. filter name which includes 'a'
// 8. filter age which is odd
// 9. filter age which is even
// 10. console indexs
// 11. console only even indexs
//  12. Sum all students age
// 13. Sum all indexs
// 14.Multiciple omly Female age


// let mult = 1
// let sumAge = students.filter((student) => student.age)
// // let sumIndex = 0

// // console.log(students.map((student) => student.age));
// // console.log(students.map((student) => student.gender));
// // console.log(students.map((student) => student.name));
// // console.log(students.filter((student) => student.age >=20));
// // // console.log(students.filter((student) => student.Female));
// // console.log(students.filter((student) => student.startWith = "E"));
// // // console.log(students.filter((student) => student.name.includes = "A"));
// // console.log(students.filter((student) => student.age % 2 == 1));
// // console.log(students.filter((student) => student.age % 2 == 0));
// // // console.log(students.map((student, index) => index));
// // console.log(students.filter((student, index) => index > 1 && index % 2 == 0));
// console.log("sum", sumAge);
// // console.log("sum", sumIndex);
// console.log("mult", mult);


// const numbers = [9, 2, 4, 11, 12, 22, 8, 6, 1]

// numbers.sort((a, b) => a - b) // asc
// numbers.sort((a, b) => b - a) // desc

// numbers.sort((a, b) => {
//     if (a > b) {
//         return 1
//     } else if (a < b) {
//         return -1
//     } else {
//         return 0
//     })
// }

// console.log(numbers);


// const students = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I' ,'K']

// // students.sort((a, b) => a.localeCompare(b)) 
// // students.sort((a, b) => b.localeCompare(a)) 
// students.reverse().reverse()

// console.log(students);

// console.log(numbers.filter((number, index) => number > 3));
// console.log(numbers.find((number, index) => number > 3));


// console.log(numbers.findIndex((index) => index > 3));
// console.log(numbers.findLastIndex((index) => index > 3));