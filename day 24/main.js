// var button1 = document.getElementById("btn1");

var button1 = document.querySelector('button');
var button2 = document.getElementById('btn2');
var button3 = document.getElementById('btn3');
var v_button = document.getElementById('btn4');
var v_text = document.getElementById('txt1');

// button1.addEventListener('click',function(){
//     alert("Hello from addventListener");
// })


// // button1.onclick = function(){
// //     alert("Hello");
// // }

// button2.onmouseover = function(){
//     alert("Mouse is over the button!");
// }

// button3.onmouseleave = function(){
//     alert("Mouse has left the button!");
// }

v_button.onclick = function(){
    v_text.style.color = "red";
    v_text.style.backgroundColor = "lightgrey";
    v_text.style.textAlgin="center";
    v_text.style.fontSize = "100px";
    v_text.style.padding = "20px";
}