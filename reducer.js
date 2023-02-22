const nums = [32,43,53,56,56,63,32,1,3,53,6,5,3]


const result = nums.reduce((prevValue , current) => {
    return prevValue + current
} , 0)

console.log(result)