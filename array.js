// Array
const myarr=[0,1,2,3,4,5]
// console.log(myarr.length)

// myarr.push(6)
// console.log(myarr)
// myarr.pop()

// myarr.unshift(1)
// myarr.shift(2)

// console.log(myarr.includes(33))
// myarr.push(3)

// console.log(myarr.indexOf(3))
// console.log(myarr.find(3))
// let newarr=myarr.join()
// console.log( typeof newarr);
// console.log(myarr);

const newarr=myarr.slice(1,3)
console.log(myarr);
console.log(newarr);
// splice takes out the sliced portion from the original array 
const myn2=myarr.splice(1,3)
console.log(myn2);
console.log(myarr);
