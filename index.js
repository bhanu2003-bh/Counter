 

let value = 0
let x =    document.getElementById("count-el")
function increment(){
  value = value+1
x.innerText = value
}

function decrement(){
    value = value-1
  x.innerText = value  
}

function Reset(){
    value = 0
  x.innerText = value
}

function save(){
  console.log(value)
}

save()