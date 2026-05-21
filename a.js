
// const student = {
//     name:"mohit",
//     marks:89,
//     pop:this,
// };

// const student = {
//     name:"mohit",
//     marks:95,
//     pop:this,
//     get name :function () {
//         return this.name();
        
//     }

//     }

// }

// nums  = [2 , 3 , 5 , 8];
// let final = nums.reduce((res , el) => res*el);
// console.log(final);
// let arr = [2 , 4 , 6, 6  , 9, 1, 245 , 5343  , 2354365 , 0];
// let newarr = arr.reduce((max , el) => {
//     if (el>max){
//         return el;
//     }
//     else{
//         return max;
//     }
// });
// console.log(newarr);
// function sum(a , b=9){
//     return a+b;
// }
// console.log(sum(2));
// let arr = [1 , 3 , 4 , 5 , 7];
// console.log(...arr);
// function func(...arr){
//     return arr;


// }
// let x = [2 , 3 ,54 , 5]
// console.log(func(...x));
// let data = {
//     name:"mohit",
//     age:23,
//     email:"mohitydv",
//     password:"abcd",
// }
// let copy = {...data};
// console.log(copy);
// function sum(...arg){
//     console.log(arguments);
// }
// arr = [2 , 4 , 5 , 7 , 7]
// console.log(sum(arr));
// let name = ["mohit" , "yada" , "fhsaj" , "jfodi"];
// let[winer , runnerup ,...other] = name;
// // let x = let[winer , runnerup];
// console.log(winer , runnerup , ...other);
// const student = {
//     name:"mohit" , 
//     age:14 , 
//     class:5 , 
//     subject: ["hindi" , "eng" , "math" , "scince"],
//     username:"mohit@123" , 
//     password:"abcd",
// };
// let{username:dme, password} = student;
// console.log(dme);
// console.log(password);



// console.dir(btn);
// btn.forEach(function(btn){
//     btn.onclick = function(){
//         console.log("button was clicked");
//     };


// })
// let btn = document.querySelectorAll("button");
// btn.forEach(function(btn){
//     btn.onclick = function(){
//         console.log("this code run");
//     };
// })
// function sayhello(){
//     console.log("engeering");

// }
// function sayname(){
//     console.log("mechanical engeering");
// }

// let btns  =  document.querySelectorAll("button");
// for(btn of btns){
//     btn.addEventListener("click" , sayhello);
//     btn.addEventListener("click" , sayname);
//     btn.addEventListener("dblclick" , function(){
//         console.log(this);
//     })

// }
// // sayhello();
//keyboard event
// let btn = document.querySelector("input");
// btn.addEventListener("keyup" , function(event){
//     console.log(event.code)
//     console.log(event.key)
//     console.log("key is up");
// });
// let f = document.querySelector("form");
// f.addEventListener("submit" , function(){
//     event.preventDefault();
//     let inp = document.querySelector("input");
//     console.dir(inp);
//     console.dir(inp.value);

// });
// let x = document.querySelector("button");
// console.dir(x);
// x.onclick = function(){
//     console.log("button wass clicked");
// };
// x.ondblclick = function(){
//     console.log("buttondouble clicked");
// }
// x.onmouseenter = function(){
//     console.log("mouse in this range");

// }
// x.moveBefore = function(){
//     console.log("move before");
// }
// x.addEventListener("click" , sayhello)
// x.addEventListener("dblclick" , sayname)
// function sayhello(){
//     alert("say helle world");
// }
// function sayname(){
//     alert("enter your name");

// };
// x.addEventListener("dblclick" , function(){
//     console.log("amzone")
// });
// let p = document.querySelector("p");
// p.addEventListener("click" , function(){
//     console.log("paragraph eas clicked")

// });
// let btn = document.querySelector("button");
// btn.addEventListener("click" , function(){
//     console.log(this);
//     this.style.backgroundColor = "blue";
//     console.log(this.innerText);

// })
// let btn = document.querySelector("button");

// let input = document.querySelector("button");
// input.addEventListener("keydown" , function(){
//     console.log("button is already pressed")
// });
// let form = documentSelector("form");
// form.addEventListner("submit" , function(event){
//     event.preventDefault();
//     console.log("form submitted");
// });
// let form = document.querySelector("form");
// form.addEventListener("submit" , function(event){
//     event.preventtDefault();
//     console.log("form");
// })
// let form = document.querySelectorAll
// let form  = document.querySelector("form");
// form.addEventListener("submit" , function(event){
//     event.preventDefault();

// })
// let user  = document.querySelector("p");
// user.addEventListener("change" , function(){
//     console.log("input change");
//     console.log("final value = ", this.value);
// });
let x = document.querySelector("input");
x.addEventListener("input" , function(){
    console.log(x.value);
})
let y = document.querySelector("input");
y.addEventListener("change" , function(){
    console.log(y.value);
})