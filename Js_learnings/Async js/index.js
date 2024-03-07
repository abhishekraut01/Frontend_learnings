// async code
// aisa koi bhi code jismein kuch time lagata hai , js mein use by default in most cases async code maan side stack mai daal diya jata hai 

// setTimeout -> setTimeout ka code kuch der baad chalta hai

// for(i = 0; i<5; i++){
//     setTimeout(function(){
//         console.log(i);
//     },1000)
// }

// var arr = [12,64,78,43,75,36,97,35];
// arr.forEach((element,index) => {
//     setTimeout(function(){
//         console.log(arr[index])
//         },1000*index)
// });





// setInterval -> set Interval ka code kuchh der baad chalta hai baar baar ek particular interval time mein

// setInterval(function(){
//     console.log("heyy")
// },1000)

// var count = 1;
// const inter = setInterval(function(){
//     ++count;
//     console.log(count);
//     if(count === 4) clearInterval(inter)
// },1000)





// Fetch api -> ye kisi aur url(API) pe jakar kuch data layega ya data hamare pass se uss URL pe leke jayega
// kyuki ye internet par jayega and fir data ko lekar aayega to ismein time lagata hai to by default hi js mein fetch ko async banaaya gaya hai kyuki fetch ka kaam hai data laana wo bhi kisi url se ab aisa ho sakta hai us url ki website slow ho and agar fetch sync hota toh uske baad ka code tabtak nahi chalta jabtak uska data nahi aata and which is big problem , poora code atak sakta hai


// var user = fetch(`https://randomuser.me/api/`)
// .then(raw => raw.json())
// .then(redable => console.log(redable))

// var user = fetch(`https://randomuser.me/api/`)
// var res = user.then(raw=>{
//     return raw.json()
// })
// res.then(readable =>{
//     console.log(readable);
// })

// fetch(`https://jsonplaceholder.typicode.com/posts`)
// .then((raw) =>{
//     return raw.json()
// })
// .then(res => console.log(res[0].userId))




// axios (or other http libraries) -> ye bhi vahi karega jo fetch API karata hai but ye jyada devloper friendly hai 
// promise

// axios.get(`https://randomuser.me/api/`)
// .then(result => console.log(result.data.results[0]))





// promise -> promise ke andar jo code likhoge wo apana kaamm karega and ye khud side stack mai chale jagenge uss code koo lekar and andar se code ke resolve kiya jayega tab ye chalenge.

// const parchi = new Promise((res,rej)=>{
//     fetch(`https://randomuser.me/api/`)
//     .then(raw => raw.json())
//     .then(result =>{
//         if(result.results[0].gender === "male") res()
//         else rej()
//     } )
// })

// parchi
// .then(()=>{
//     console.log(" Hara button daba")
// })
// .catch(()=>{
//     console.log(" Lal button daba")
// })

// ye sabhi use hi tab kiye jate hai jab aapko kuch aisa karana chahate ho jismein time lagega

// callbacks

// function getData(url,callback){
//     fetch(url)
//     .then(raw =>{
//         return raw.json()
//     })
//     .then(result =>{
//         callback(result)
//     })
// }
// getData(`https://randomuser.me/api/`,(result)=>{
//     console.log(result.results[0].gender ,result.results[0].name.first , result.results[0].email)
// })


// async/await


// var chacha = async () => {
//     let a = await fetch(`https://randomuser.me/api/`);
//     a = await a.json()
//     console.log(a.results[0].name.first)
// }
// chacha();



// Event Loop


// callbacks vs promises vs async/await
// ek url se data lekar aao and usey console par show karo via callback

//Using callback

// function dataFetcher (url,callback){
//     fetch(url)
//     .then((raw)=>{
//         return raw.json()
//     })
//     .then(result =>{
//         callback(result)
//     })
// }
// dataFetcher(`https://randomuser.me/api`,(result)=>{
//     console.log(result.results[0].name.first)
// })

//Using Promises

// const dataFetcher =(url)=>{
//     const parchi = new Promise((resolve)=>{
//         fetch(url)
//         .then(raw =>{
//             return raw.json()
//         })
//         .then(result =>{
//             resolve(result)
//         })
//     })
//     return parchi;
    
// }

// dataFetcher(`https://randomuser.me/api`)
// .then((result)=>{
//     console.log(result)
// })


//my code

// const resultformpromise = new Promise((res=>{
//     fetch(`https://randomuser.me/api`)
//     .then(raw =>{
//         return raw.json()
//     })
//     .then(result =>{
//         res(result)
//     })
// }))

// resultformpromise
// .then((resultformpromise)=>{
//     console.log(resultformpromise)
// })


// const dataFetcher= async(url)=>{
//    const data = await fetch(url)
//    let result = await data.json();
//    return result;
// }
// async function hh(){
//     const data = await dataFetcher(`https://randomuser.me/api`)
//     console.log(data)
// }
// hh();

// Generators
     //aap execution ko pause kar sakte ho and bol sakte ho ki ab agala step karo aur fir app agala step jab bhi chahiye vo step kar sakte ho
function* printnum(){
    console.log("started");
    yield 1;
    console.log("pahala chal chuka");
    yield 2;
    console.log("dusra chal chuka");
    yield 3;
}
const ans = printnum()
console.log(ans.next())
console.log(ans.next())
console.log(ans.next())
console.log(ans.next())




// error handeling in asynchronous code