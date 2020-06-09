// window.addEventListener('load', ()=>{
//     const heading = document.createElement('h1');
//     const heading_text = document.createTextNode('H1 heading');
//     heading.appendChild(heading_text);
//     document.body.appendChild(heading);
//
//     //const myHead = document.getElementsByTagName("h1");
//     document.body.innerHTML = "";
//     heading.innerHTML = "changed";
// });

let my_element = document.createElement('h1');
let my_span = document.createElement('span');
my_span.innerText = "hi span";
my_element.appendChild(my_span);

document.body.appendChild(my_element);

my_span.innerText = "change span";