// var x=3

// if (x<3)
//     console.log{("x eshte ma i madh se dy" );
// }
//     else {
//     console.log("x eshte ma i vogel se dy");
//   }  

var input = document.getElementById('input_id');
var button = document.getElementById('btn_id');
var text = document.getElementById('text_id');

button.onclick=function(){
    text.innerHTML = input.value;
}
  

var input = document.querySelector('#input1');
var input2 = document.querySelector('#input2');
var button1 = document.querySelector('#btn2_id');
var ans = document.querySelector('#answer');


button1.addEventListener("click", function(){
    ans.innerHTML = parseInt(input1.value) + parseInt(input2.value);
})

button.onclick=function(){
    if(input.vlaue>10){
        text.innerHTML = "input value is bigger than 10";
    }else if(input.value=10){
        text.innerHTML = "Input value is equals to 10";
    }else{
        text.innerHTML = "Input value is less than 10";
    }
}

