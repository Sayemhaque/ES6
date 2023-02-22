// object destructuring
const students = {
    username : "Md sayem",
    age : 23,
    address: "Brahmanbaria,Bangladesh",
    phone: '01954******'
}


const {username , age, address , phone} = students;

console.log(username , age, address , phone)

// array destructuring


const [a , b , ...c] = [32,53,53,3,632,63,62,62,623,6]

console.log(a) // output : 32;
console.log(b) // output : 53;
console.log(c) // output : [53,  3, 632, 63, 62, 62, 623,  6]