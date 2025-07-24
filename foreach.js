// foreach
// coding=["javascript","cpp","html","ruby","rust","java"]
// const c=coding.forEach((item) => {
//     console.log(item)
// });
// console.log(c);

const mynums=[1,2,3,4,5,6,7,8,9,10]
// const n=mynums.filter((num)=>{
//      return num>4
// })
// console.log(n)

const nums=[1,2,3,4,5,6,7,8,9,10]
// const newnums=nums.map((num)=>num+10)
// chaining
// const newnums=nums.map((num)=>num*10).map((num)=>num+2).filter((num)=>num>=40)
// console.log(newnums)
// scope open write return
const total=nums.reduce( (acc,currval)=>{
    return acc+currval
},0)
console.log(total);

