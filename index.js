console.log("Hello World");

let count = 0;


const counter = document.getElementById('counter');
console.log(counter);



function increase(){
  count++;
  counter.innerText = count;
}

function decrease(){
  count--;
  counter.innerText = count;
}

function reset(){
  count = 0;
  counter.innerHTML = `<mark>${count}</mark>`
}