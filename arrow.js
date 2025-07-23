// const username ="hello"
const user={
    username:"raunak",
    price:9999,
    welcomemessage :function(){
        console.log(`${this.username} , welcome`);
        console.log(this);
        
    }
}
// user.welcomemessage()
// console.log(this); //empty

// function one(){
//     let username="raunak"
//     console.log(this.username);
    
// }
// one()
// const chai=function(){
//     let username="raunak"
//     console.log(this.username);
// }
// chai()

// const chai=()=>{
//      let username="raunak"
//     console.log(this.username);
// }
// chai()

// const sub2=(num1,num2)=>(num1-num2)
const sub2=(num1,num2)=>({userid :45})
console.log(sub2(43,5));


