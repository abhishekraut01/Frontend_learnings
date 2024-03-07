/*

// This ki value baar baar change ho sakti hai 

//global scope - window
console.log(this)

//function - window
function abcd(){
    console.log(this)
}
abcd();

// method - object 

// agar app kisi method ke andar this check karoge toh vo object ko refer karega jiske andar vo hai 

var obj = {
    name:function(){
        console.log(this.email)
    },
    age:20,
    email:"abh@gmail.com"
}
obj.name();


// fnc inside method (es5) - window

var abc = {
    sayName: function(){
        console.log(this.age) // this will give us output as 20 because method ke andar this refer karata hai obj ko 
        function childfnc(){
            console.log(this.age) // this will give us undefine because when we call the age this is refering to window and not object
        }
        childfnc();
    },
    age:20
}
abc.sayName();

// fnc inside method (es6) - object
//arrow function ko bind hoga aur this ko object pe refer karega in below code 
//arrow function this ki value apane parent se leta hai so here child taking this value from sayHello

// var chacha ={
//     sayHello:function(){
//         const child = ()=>{
//             console.log(this.language)
//         }
//         child();
//     },
//     language:"javascript"
// }

// chacha.sayHello()

var chacha ={
    sayHello:()=>{
        console.log(this)
    }
}
chacha.sayHello()

// constructor fun mein this ki value - new blank object

function aalu(){
    console.log(this)
}

const hello = new aalu()
// event listener mein this ki value - that element jispar event lis laga ho

*/

// call apply bind
//ye teen tareeke hai function ko call karane ke kisi object ko this maan kar

// const obj ={
//     name:"Abhishek"
// }
// function bhai(){
//     console.log(this)
// }

// bhai.call(obj);
// bhai.call("12")  // call mai ham this ki value ko function call karate samay set kar sakte hai

// const obj ={
//     name:"Abhishek"
// }
// function bhau(a,b,c){
//     console.log(this,a,b,c)
// }

// bhau.apply(obj,[1,2,3])

// function bhau(){
//     console.log(this)
// }

// const afters = bhau.bind(obj)

// afters();


//______________________________________________________

//prototypal Inheritance
// ham objects create karte hai and kisi ek parent constructor function ke prototype mein kuchh add kr dete hai and jab bhi add hota hai to wo parent se banne waale sabhi children instances ko wo properties jo parent ko prototype mai di gayi thi wo milti hai saugat mai

// ek function jo ki this ka upyog kar raha ho and new ke dwara naye naye objects bana kar deta ho aisa function ko constructor function kahte hai

// function makegroom(name,age,wife){
//     this.name = name;
//     this.age = age;
//     this.wife = wife;
// }
// function makeBride(name,age,husband){
//     this.name = name;
//     this.age = age;
//     this.husband = husband;
// }

// let abhishek = new makegroom("Abhishek",25,"chinu")
// let chinu = new makeBride("Chinu",25,"Abhishek")

//aisa koi bhi function jismein app this ka upayog kar rahe ho aur us function ko call karate waqt app new ka upyog karein to new ka matlab waha par ek blank object hojata hai

// function russian(price,color){
//     this.price = price;
//     this.color = color;
// }

// russian.prototype.printcolor= function(){
//     console.log(this.color)
// }

// let mia = new russian(6000,"black");
// let rounda_raousy = new russian(10000,"pink");

//_________________________________________________________

// closures
// aisa koi function jo ek aur function ko return karde , aur use kare parent function ka koi variable usey closure kahte hai

// function counter(){
//     var count = 0;
//     return function(){
//         count++;
//         console.log(count)
//     }
// }

// var fnc = counter();
// fnc()

// function parentfnc(){
//     var parentvar = 20;
//     function childfnc(){
//         console.log(parentvar);
//     }
//     childfnc()
// }
// parentfnc()

//_________________________________________________________
//event delegation = jab aap event listerner se kai saare different elements ke events ko handle kar sakte 
// event listener ko parent par lagao andd unko id , class ya fir tag ke basis par differenciate karke different task karo 

// var abc = document.querySelector("#main")

// abc.addEventListener("click", function (details) {
//     if (details.target.id === "play") {
//         console.log(details.target)//this line print element where play id is given
//         console.log("play song");
//     } else if (details.target.id === "pause") {
//         console.log("pause song")
//     }
// })


// Event bubbling :-> Agar ham buttons pe click kar rahe hai and buttons pe listener nahi hua toh ham uske parents pe check karenge 
// event deligation :-> Ek event listner se kahi sare kaam kar lena 

//_________________________________________________________

// higher Order functions  -> they are the functions which either take function as an argument or return a function as a result . 


//Functions as Arguments: Higher-order functions can accept other functions as arguments. This allows for passing behavior as a parameter to another function, enabling more flexible and reusable code.


// function HOF(callback){
//     console.log('Executing higher-order function');
//     callback();
// }

// const callback = () =>{
//     console.log('Callback Function Executed')
// }

// HOF(callback)

//Functions as Results: Higher-order functions can also return functions as their results. This allows for creating functions dynamically based on certain conditions or inputs.

// const createmul =(multiplier)=>{
//     return (num)=>{
//         return num * multiplier;
//     }
// }

// let double = createmul(2);
// console.log(double(5))

//error handling like pro - try catch

// function devide(a,b){
//     try{
//         if(b == 0){
//             throw Error("Kuch toh gadbad hai daya")
//         }
//         console.log(a/b);
//     }
//     catch(err){
//         console.log(err)
//     }
// }

// devide(12,0)

//_________________________________________________________

//custom events 
// const evt = new Event("huihui")
// document.querySelector("button")
//     .addEventListener("huihui",function(){
//         alert("hello dosto kaise ho")
//     })


// document.querySelector("button").dispatchEvent(evt)












