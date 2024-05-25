// string, number, boolean,  BigInt, Symbol, null, undefined - primitive(by value)
// Object - non-primitive(by referance)


// Array
// Object
// Error
// Date
// etc...

// let firstName = 'Ramil'
// let lastName = 'Janmirzayev'
// let age = 30
// let isAdmin = true

// const obj1 = new Object()
// obj1.firstName = 'Ulfat'
// obj1.lastName = 'Ulfatli'
// obj1.age = 24
// obj1.isAdmin = false
// console.log('obj1', obj1);

// const obj2 = {
//     key: value,
//     key1: value1,
//     key2: value2,



// const obj2 = {
//     firstName: 'Ulfat',
//     lastName: 'Zakirli',
//     isAdmin: false,
//     salary: null,
//     age: 24,
//     city: 'Gence',
//     info: {

//         city: undefined,
//         phone: Symbol(5),
//     }
// }


// console.log(obj2.info);


// user - firstName, lastName, age,  info - {address,city,country}, edu-{uni,point}, work-{company,experience}
// console all of them specifically


// const user = {
//     firstName: 'Ramil',
//     lastName: 'Janmirzayev',
//     age: 30,
//     info: {
//         address: 'Nizami street',
//         city: Baku,
//       country: Azerbaijan,
//       edu: {
//           uni: 'CodeAcademy',
//           point: 1000,
//         }
//         work: {
//             company: WITC,
//             experience: '12years',
// }
//     }
// }


// console.log(user.work);



// const obj1 = {
//     firstName: 'Ulfat',
//     lastName: 'Zakirli',
//     isAdmin: false,
//     salary: null,
//     age: 24,
//     uni: 'ADANSU',
//     city: 'Gence',
//     info: {

//         city: undefined,
//         // phone: Symbol(5),
//     }
// }

// const obj2 = obj1 // shallow copy
// const obj2 = ( ...obj1) // deep copy (but not nested)

// const obj2 =structuredClone(obj1) // deep copy
// const obj2 = ( ...obj1) // deep copy




// obj1["firstName"] = 'Ramil'
// obj1.lastName = 'Janmirzayev'
// obj1.info.city = 'Baku'


// console.log('obj1', obj1);
// delete obj1.isAdmin
// console.log('obj1', obj1);

// console.log('1', obj2);
// obj2.isAdmin = true
// console.log('2', obj2);




// Array

// const obj1 = new Object () // constractor
// const obj2 = {} // literal


// // const arr1 = new Array (33)
// const arr2 = [1, 3, 5, 8, true, null, undefined, 'ramil']

// // // console.log(arr1.length);
// // console.log(arr2[arr2.length -1]);
// // console.log(arr2.at(-1));

// // arr2.pop()
// // arr2.pop()

// arr2.push('cs403', 'car', 'ramil', 'wing')
// arr2.push('cs403', 'car', 'ramil', 'wing')

// // arr2.shift()
// // arr2.shift()

// arr2.unshift('best', true, undefined, null, 9)
// arr2.unshift('best', true, undefined, null, 9)

// // slice(start index, end index)

// const newArr = arr2.slice(5, 9)
// console.log('newArr',newArr);

//     console.log(arr2);

