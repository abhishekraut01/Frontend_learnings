// accessing element

// var btn = document.getElementById("btn");
// var param = document.querySelector("#param");
// var isRed = false; // Boolean to track whether 'makeitred' class is applied or not

// btn.addEventListener('click',()=>{
//   if(isRed){
//     param.classList.remove("makeitred")
//   } else{
//     param.classList.add("makeitred")
//   }
//   isRed = !isRed;
// })

//creating and deleting element

// var h1 = document.createElement('h1');
// h1.textContent = 'heyy';
// document.body.appendChild(h1)

// var btn = document.createElement('button');
// btn.textContent = 'click';
// document.body.appendChild(btn)

// btn.addEventListener('click',()=>{
//     h1.classList.add('makeitred')
// })

// var img = document.createElement('img');
// img.src = 'https://images.unsplash.com/photo-1709572563747-5de4d256fa6c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

// document.querySelector('body').appendChild(img);

// var btn = document.querySelector('button');
// document.querySelector('body').removeChild(img)



document.querySelector('body')
    .addEventListener('mousemove', (details) => {

        setTimeout(function () {
            let x = details.clientX;
            let y = details.clientY;
            cursor.style.left = x-32 + 'px';
            cursor.style.top = y-32 + 'px';
        }, 200)
    })

