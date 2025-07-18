const score=100;
// console.log(score);

const balance =new Number(147.83)
// console.log(balance);
// console.log(balance.toString());
// console.log(balance.toFixed(0))

const x=new Number(382.567)

// console.log(x.toPrecision(4))
const hundered=10000000
// console.log(hundered.toLocaleString('en-IN'))

// ++++++++++Math++++++++++++++++
// console.log(Math)
// console.log(Math.abs(-1))
// console.log(Math.round(5.67))
// ceil and floor Round values

// console.log(Math.random());
// console.log(Math.random()*10+1);

const min=10
const max=20

// console.log(Math.floor(Math.random()*(max-min+1))+min)

// Date

// let mydate=new Date()
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toISOString());
// console.log(mydate.toJSON());
// console.log(mydate.toLocaleString());
// console.log(typeof mydate);

let mydate=new Date(2025,1,28,18,56,23);
// console.log(mydate.toLocaleString());

let newdate=Date.now()
// console.log(newdate);
// console.log(Math.floor(Date.now()/1000));

let d=new Date()
console.log(d.getFullYear());
console.log(d.getMonth()+1);
console.log(d.getDay());
console.log(d.getHours());

d.toLocaleString('default', {
    weekday:"long",
    month:"long"
})
console.log(d.toLocaleString());




