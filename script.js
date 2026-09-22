let btns = document.querySelectorAll(".btn");
let input1 = document.querySelector("#task");

btns.forEach((curl) => {
  curl.addEventListener("click", () => {
    input1.value += curl.value;
    auto()
    save()
  })
})


// step2


// let value = document.getElementById("value");
let btn_eq = document.querySelector(".btn-eq");
let num = document.getElementById("num");


function auto(){

  if(input1.value.includes("/0")){
    input1.value = "0"
  }
  
  let values1 = input1.value;
  let num1 = values1 = eval(values1)
  num.textContent = num1;

  btn_eq.addEventListener("click", () => {
  input1.value = num1;
  num.textContent = "";
    save()
});

}

// step 3

document.querySelector(".btn-ac").addEventListener("click", () => {
  input1.value = "";
  num.textContent = "";
  localStorage.removeItem("jim")
  localStorage.removeItem("jim1")
})
  





document.querySelector(".btn-del").addEventListener("click", () => {
   let ac =  input1.value = input1.value.toString().slice(0, -1);
  num.textContent = "";
    auto()
  save()
  })



// localStorage




function save() {
  localStorage.setItem("jim", input1.value);

  localStorage.setItem("jim1", num.textContent);
}

 let add = localStorage.getItem("jim");
 let add1 = localStorage.getItem("jim1");

  if(add){
    input1.value = add;
  }

if(add1){
  num.textContent = add1;
}


















