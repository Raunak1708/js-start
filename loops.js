// For loops

//  for (let i = 0; i < 10; i++) {
//     const element = i;
//     console.log(element);
//  }
 
//  for(let i=0;i<=20;i++){
//     if(i==4||i==7)continue
//     console.log(`value of i is${i}`);
//     // if(i==9) break;
//  }

//  while
// let i=0
// while (i<9) {
//     console.log(i++)
// }

// // do while
// do{
//     console.log(i++)
// }while(i<11)

// // for of
// const arr=[1,2,3,4,5]
// for (const i of arr) {
//     console.log(i)
// }

// maps
// const map=new Map()
// map.set('IN',"India")
// map.set('US',"usa")
// // map.set('IN',"korea")
// console.log(map)

// for(const [key,value] of map){
//     console.log(key,":",value)
// }

// objects are not iterable using forof
// forin
// const myobj={
//     "js":"javascript",
//     swift:"swift",
//     "c++":"cpp"
// }
// for (const key in myobj) {
//     console.log(`${key} shortcut for ${myobj[key]}`)
// }
// in array in forin loop there are keys printed (0,1,2,etc)
const coding =["js","cpp","swift","ruby","html"]
// coding.forEach(function (val){
//     console.log(val)
// })

// coding.forEach((val,i,arr)=>{
//     console.log(val,i,arr)
// })

const mycoding=[
    {
        languagename:"js",
        file:".js"
    },
    {
        languagename:"c++",
        file:".cpp"
    },
    {
        languagename:"html",
        file:".html"
    }
]
mycoding.forEach((item)=>{
    console.log(item.file);
})