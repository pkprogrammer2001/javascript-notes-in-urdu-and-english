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

// Example......2.......give function as a parameter in fnc.
function jg(val){
  val()
}
jg(()=>{
  console.log("hello sweet bro") 
})
