// let var const....

console.log("hello world");
document.write("Asad ullah");
var asad =2
console.log(asad);

asad = "asad"
asad= "developer";

var asad= 0;
let sad1 = 20;

// hoisting topic

console.log(a);  // hoisted ma var ki value automatic initialize top py hojati hai jis ki wajah sy agr var delcared krna phela kedr use krly to value undefined ati jisko hoisted kehta hain...
var a=20;  // hoisted sirf kaam krti hai var py let py nhi kaam krti...

let yr= "asad"; 
console.log(yr);
// array
let vr =[2,2,3,4,5]
console.log(vr[4]);
//objects
let rs ={
  asad:"develop",
  age: 22,
  uni: "virtual university"
}
console.log(rs.asad);
rs.uni = "vu"
console.log(rs.uni);

//      primitive.... woh value jin ki real value copy hoti hai or reference nhi hoti woh primitive type hoti hai string number boolean..
// reference value ...... (){}[] yeh sub brakets reference value hai inki value agy reference ho jati hai mgr real value ki copy nhi hoti is trhan agr reference ma kooi changing ho gi to main value ma bi change ho jai...
let fd =[3,3,4,5]; // yeh thi main value
console.log(fd);
fg=fd // idr maine fg ko fd ki value assign mgr idr fd value reference hogi fg ma.
fg.pop() // pop fnction sy change fg ma ki to fd ma bi changing hogi is ki value reference value kehta hain array function object ki reference hooti hai.
console.log(fg);
console.log(fd);


let as = 30
var ty;

// conditionals 
if (true){
  console.log("hello world");
}else{
  console.log("no world");
}

if (as>40){
  console.log("hello world");
}else if (as>0){
  console.log("hello world 2");
}else{
  console.log("hello world 3");
}

// for and while loop

for (var hf = 10; hf<=20; hf++ ){
  console.log("value hf is: "+hf);
}

var vs=20;
while(vs<30){
  vs++;
  console.log(vs);
}
// function
function sd(fd){
  console.log(fd)
  document.write(` ${fd} `);
}
sd("i am javascript developer;");
sd("hello world");

// lexical enviroment and execution context

function jin(){
  function sa(){
    var ae= 100;
    console.log(ae);
    function bd(){
      console.log(ae);
    }
    
    bd()
  }
  sa()
}
jin();

// execution context EK imaginary box hai jis function k variable function and lexical enviroment hota hai.....
function abcd(){
  var adg="jin";// mgr yeh is child function ma use kr skta hoon is ko lexical enviroment kehta hain....
  function heloo(){   //  var let const jo bi ho is child function ki value upr parent function use nhi kr skta 
    console.log(absd);
    console.log(adg);
  }
  
  heloo();
  var absd =23; // is ki value defined isliya q k yeh hoisted krdiya hai isko..
}
abcd()

// how to copy reference value.
// spread operator use hota reference value ko copy krna k liya.

let bg = [4,67,74,26,7,3,2]
bg1=[...bg]; // three dot spread operator hota ha jis value copy hoti hai real value ki reference nhi.. bg ki value bg1 ma copy hui... reference nhi 
bg1.pop();
console.log(bg); // is ma koi changing nhi hui spread operator ki wjah sy
console.log(bg1); //sirf is ma changing hui hai 

// forEach Loop ...... forEach loop sirf array k liya use hota hai

let bd =[3,6,7,78,8,9];

bd.forEach(function(val){
  console.log(val+2); // idr jo value ayy gi woh temporary hogi.. is sy real array ki value change nhi hoti.
});
console.log(bd) // bd ki real value same hai 

// forin loop for object

let jin1 = {
  Name:"Asad ullah", // yeh property key ma store hogi..
  Age:22,
  Uni:"vu",
  City:"Rawalpindi"
}

for (let key in jin1){
  console.log(key, jin1[key]);
}

//setTimeOut callback function example.

setTimeout(function(){
  console.log("hello developer"); // inner function is callback function. main detail event loop... baad ma usko detail ma prhta hain
},3000);

// first class function
let vc = (val)=>{ // first class function ma hum function ko ek value ki trhan use kr skta hain
  console.log("how are you "+ val)
}
vc("brother?")

function abs(ed){
  ed()
}
abs(()=>{console.log("how are you bro")})

let to = function(){
  console.log("keyword")
}
to();
// check array type q k js ma array object hota hai
let ds =[1,-2,2,3,4,4];
console.log(typeof ds);
console.log(Array.isArray(ds)); // is ki value true ayy gi to yeh array hai agr false ayyi to yeh object.

//delete object props

let yb={
  car:"civic",
  model:2022,
  color:"black"
}
console.log(yb)
delete yb.color;
console.log(yb);

// higher order function
// example. ......1 ......return function is higher order fnc
function gf(){
  return function hj(){
    console.log( "hello world");
  }
}
const ans =gf();
ans();

// Example......2.......give function as a parameter in fnc. this is called first class function...fnc ko as a parameter pass krna ko bi first class fnc kehta hain
function jg(val){
  val()
}
jg(()=>{
  console.log("hello sweet bro") 
})

//    constructor function....
// example 1
function construct(name, age){
  this.name= name;
  this.age = age;
  this.uni = "virtual university";
}
let std1 = new construct("asad",22); //new sy hum ek new instance bana skta hai constructor function k
let std2 = new construct("jin", 200); // new keyword sy fnc ko call krta hai to yeh ek object return krta hai 

// example 2
function construct1(name){
  this.name =name
}
let std3 = new construct1("ghazala");
let std4 = new construct1("alex");

// first class function
let vt = ()=>{
  console.log("asad"); // first class fnc means function ko as a variable save krskta
}
let da = function(){
  console.log("asad");
}
da();

// iife (immediately invoked function expression)
//example no.1
// iife hum private value banna k liya use krta hain
(function(){
  let bro ="jin"; // private value..
  console.log("sad")
})();

//example no.2
let iff ="iife"; // iife sy hum same name variable bi bana skta hai or same name variable hum different jagah use krskta hain with different value 
(()=>{          //make iife using fat arrrow function
  let iff = "bro  kasy ";
  console.log (iff);
})();
console.log(iff);

// example .3 is example ma hum iife ma getter and setter use kr private vale ko change or access kr raha hain.

let smo = (function(){    // is smo variable ma return ki value ayy gi
  let veer= "Asad"; //yeh private value hai is ko sirf getter or setter sy access kr skta hai 

  return {                      // return ma do function hai getter and setter 
    getter: function(){         // getter sy value get hoti hai
      console.log(veer);
    },
    setter: function(val){      // setter sy value set hoti hai
      veer= val;
    }
  }
})()

// prototype inheritance
let some1 ={ 
  name:"bro",
  age:23
}
let vustd = { // is object ki property borrow krna k liya prototype inheritance use krain
  canstudy: "yes",
  cancode:"yes"
}
some1.__proto__ = vustd; 

// this keyword
// value of "this" keyword in global scope 
console.log(this);   // this ki value global scope ma window hai.

// value of "this" keyword in function scope 
function hello1(){ // this ki value function scope ma window hai.
  console.log(this);
};
hello1();

// value of "this" keyword in method scope
let obj1 ={
  name:"bro",
  hello2: function(){
    console.log(this); // this ki value object hota in method... mean this ki value obj1 ayy gi
  }
};
obj1.hello2();

// value of "this" keyword in event listener
let button = document.querySelector("button");
button.addEventListener("click",function(){
  this.style.fontSize= "30px";
})

// call apply bind
//call 
function cal(val1, val2){ // parameter bi send kr skta hain call ma
  console.log(this, val1, val2); 
}
var cal1= {
  name:"call keyword",
  age:100
}
cal.call(cal1, 100,200); // is call keyword sy "this" ki value object ban gai hai phela window thi "this" ki value in function

// apply same hai call ki trhan just is ma sirf do hi argument pass hota hain
function aply(val1, val2){ // parameter bi send kr skta hain call ma
  console.log(this, val1, val2); 
}
var aply1= {
  name:"apply keyword",
  age:500
}
aply.apply(aply1, [10,20]); // apply ma sirf do argument pass hota hain first object jis ko this ki value banni hai or dusra array jis ma parameter ki value jaiii gi as a argument agr ma apply ma simple argument send kroo jsy call ma ki ya hai to error ayy ga yeh "CreateListFromArrayLike called on non-object" isliya apply ma argument as a array pass hota hai

//bind
function bindfnc(){ //bind keyword k use case jab hum react ma use krta hain event listener py
  console.log(this); 
}
var bindfnc1 = {
  name:"bind keyword",
  age:1000
}
let bindvar = bindfnc.bind(bindfnc1);
bindvar();


// es6 topic
//arrow function
let fatarrrow = (name)=>{
  console.log("fat arrow function"+name);
}
fatarrrow(" full- stack");
//if you want, you can also write this way fat arrow with one parameter you just need to remove round bracket from function
//fat arrow function with one parameter
let fatarrrow1 = name =>{
  console.log("fat arrow function"+name);
}
fatarrrow1(" full- stack");

//fat arrow function with impilicit return
let fatarrrow2 = ()=> 12; // for impilicit return you just need to remove curly bracket from function
console.log(fatarrrow2()); // 12 value return ho kr function ma save hojai ga

//template literals backticks
let myname = "Asad";
let profession = "Front-End Developer";
document.write(`<br> <br> My name is ${myname} and I'm ${profession}`);

//default parameter
function defpara(val=0, val1 = 0){ // val=0 is default parameter agr fnc call py koi value nhi ati to default value as a parameter use hoti hai
  console.log(val, val1);
}
defpara(200);
defpara(200);
defpara();
defpara("bro whats up");

//spread operator
let spr = [1,2,3,4,4] // spread operator []{}() unki values copy krna k liya use hota hai yeh value wese reference value hai mgr spread opr sy hum unki type change kr skta hain
let spr1 =[...spr]
spr.pop();

// rest operator
// hum argument ma zyada value pass ho yn user sy zyada pass ho to woh extra arguments ko hum rest operator sy save krta hai
function restopr(a,b,c, ...d){ // generally 3 parameter ma 3 argument save hojain ga to baki argument ko save krna kliya rest operator use karain ga hum or yeh rest operator value ko as a array save krlyy ga 
  console.log(a,b,c,d)
}
restopr(1,2,3,40,4,5,6)

// array destructuring 

let arrdes = [1,3,4,56,"<br> array destructing"]
let [a1,b1,c1]=arrdes; // is trhan array ki value ko hum variable ma store kr skta hain
let [, , , ,arrdes2]= arrdes; // is tareka sy hum jo marzi value ko skip kr apni mrzi ki value ko store kr skta hain
document.write(arrdes2);

//object destructuring 
let objdes = { 
  name1: "dude",
  age: 29
}
let {name1,age}=objdes; // object ma sy property ko as a variable krna k liya object destructuring use hota hai
name1 = "how are you fit boy" 
