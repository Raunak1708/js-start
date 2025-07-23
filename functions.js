//Functions 
// function myname(){
//     console.log("raunak")
//     console.log("raunak")
// }
// myname() //without parantheses it is reference

// function addtwo(num1,num2){
//     console.log(num1+num2)
// }
// addtwo(5,43)
// addtwo("4",4)

// function addtwo(num1,num2){
//     let result =num1+num2
//     return result
// }
// const result=addtwo(4,6)
// console.log(result);

// function user(username="raunak"){
//     return `${username} just logged in`
// }
// console.log(user())


// // rest operator
// function totalcartprice(val1,val2,val3,...num1){
//     return num1;
// }

// console.log(totalcartprice(300,200,500,3100,44500))

const user={
    username:"raunak",
    price:4500
}
function solve(anyobj){
    console.log(`Username is ${anyobj.username} and price is ${anyobj.price}`);
}
solve(user)

const mynewarr=[400,500,500,600,620]

function returnvalue(getarray){
    return mynewarr[3];
}
console.log(returnvalue(mynewarr));
