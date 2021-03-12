// variables 
const btns = document.querySelectorAll('.btn');
const display = document.querySelector('#display');
let count = 0;

// fn 
function startCounter(e){
  //list of html classes that are triggered from the event
const style = e.currentTarget.classList;
if(style.contains("btn-increase")){
 count++;
} else if (style.contains("btn-decrease")){
 count--;
} else{
 count = 0;
}


if(count > 0){
 display.style.color = "green";
}
if(count < 0){
 display.style.color = "red";
}
if(count === 0){
 display.style.color = "#222";
}

display.innerHTML = count;
}
// add an eventlistener to the array of btns
btns.forEach(btn =>
  btn.addEventListener('click',startCounter));

