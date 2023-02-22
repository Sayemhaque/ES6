// syntax of an arrow function

const myArrowFunction = (msg) => {
    return msg;
}

myArrowFunction("I love javascript")


// we can write this function in more simple way just in one line
//If the function return only one thing then we don't need to use return keyword.
const myArrowFunctionOneLiner = msg => console.log(msg);

myArrowFunctionOneLiner("I love arrow function very much")