// var a = 12;
// var b = "Hello";
// console.log(a,b)

// console.warn(b)
// console.error("This is an error")

// alert("heyy lodu")
// var age = prompt("Enter Your Age")
// console.log(age)

// compailer -> convert high level language to machine code 

// interpreter  -> run the program line by line . interpreter -> byte code -> machine code 

// jit compailer -> just in time compailer use both the capabilities of interpreter nd compailer . interpreter convert code faster and compailer runs code faster 

// ________________________________________________________

// console ,alert ,prompt are not strictly part of the JavaScript language itself, they are part of the browser environment and can be accessed through the window object.

// Data Types = Primitives || reference datatypes
// 12 , 12.4 , harsh , true ,a , null , underfined
// () [] {} - reference dt

// var a = 12;
// var a = 12.1;
// var a = ture;
// var a = [];
// var a = false;
// var a = null;
// var a = undefined;
// var a = function(){};

// var a = 12;
// var b = a;

// var arr = [1,2,3,4,5,6]
// var b = arr;

// b.pop()

//________________________________________________________
/*
conditionals

var age = 18;

 if(age>=18) console.log("You can have good times")
else console.log("You are too young") */

//_________________________________________________________

// var num = document.getElementById("table")

// for (i=0; i<=10; i++){
//     console.log(i)
// }
// for (i=10; i<=20; i++){
//     console.log(i)
// }
// for (i=20; i>=1; i--){
//     console.log(i)
// }
// for (i=2; i<=20; i= i+2){
//     console.log(i)
// }


//_________________________________________________________
// level 4

// functions
//es5 and es6
//es5 - function statements , function expressions, anonymous functions 
//es6 - fat arrow functions 
// a) basic fat arrow
// b) fat arrow with one parameter
// c) fat arrow with implicit return


// javascript mai function banane ke liye just function keyword likhana hota hai and datatype lagane ki zarurat nahi
/*
function abcd(){

}

js mai function ko first class functions ka darja diya gaya hai , jiska matlab hai , ki hs mein functions ko value/variable ki tarah treat kiya ja sakta hai

->>> what is function
koi aisa code jo aapko bar bar chalana ho but turant na chalana ho usey function mai daal sakte hai


function cooking() {
    console.log("bartan uthao")
    console.log("Chawan nikalo")
    console.log("Gas on karo")
    console.log("paani dalo")
    console.log("chawal pakao")
    console.log("dinner karo")
}
cooking()


var birthdate = 21;

let current_date = 21

function happyBirthday()
{
   document.write("happy birthday bhai")
}
if(birthdate === current_date){
   happyBirthday()
}

function abc(val){    // val is parameter

}
abcd(68)  // ->>> argument
*/

// prep for interview  ________________________________

/*

function abcd(){
   // function statement
}

var abcd = function(){
   // function expression
}

function (){
   //anonymous function
}

//fat arrow

var a = ()=>{};

var b = () =>{}; //this is basic fat arrow function



var name = (ab) =>{
   // fat arrow fun with one parameter 
}

var abc = ()=> 34; // this is implicit return



// return ________________________________________

function add(a,b){
   return a+b
}

console.log(add(3,3))

//in javascript if function is not returning something  it will return undefined by default
*/

/*
undefined is an value 
not defined is an error

koi particular element/identity ko use karna without it's declaration gives an error , and that error is not defined error

null is also a value
null is a value which resolve like , not found
null is recieved when something is , not found
*/

/*

// ________________ARRAYS__________________________________



arr.forEach(function(val){
   val = val+2;
   console.log(val)
})
__________________OBJECTS____________________________

var obj = {
   name:"Abhishek";
   age:19;
   email:abhi@gmail.com;
}

obj.name()
*/


// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let sum = 0;
// for (var i = 0; i<=arr.length;i++){
//    sum += arr[i];
// }
// document.write(sum)


// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let sum = 0;
// for (var i = 0; i < arr.length; i++) {
//    sum += arr[i];
// }
// document.write(sum)

// for (var i = 0; i < 5; i++) {
//    setTimeout(function() {
//        console.log(i);
//    }, 1000);
// }

function greet() {
   var message = "Hello";
   console.log(message); // Yeh sahi tarah se kaam karega
}
greet();
console.log(message);
