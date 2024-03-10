var form = document.querySelector("form");
// var inp1 = document.querySelector('#inp1');
// var inp2 = document.querySelector('#inp2');

var inps = document.querySelectorAll('input[type = text],input[type = password]')

form.addEventListener('submit',(ev)=>{
    ev.preventDefault();
    for(let i = 0;i<inps.length;i++){
        if(inps[i].value.trim() === ''){
            alert("Input field is blank")
            break
        }
    }
})