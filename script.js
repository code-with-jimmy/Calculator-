// step 1 getting by refrance

const taskInput = document.getElementById("taskInput");

const btn = document.querySelectorAll(".btn")


const btnAc = document.querySelector(".btn-AC")


const btnDe = document.querySelector(".btn-DE")


const btnQqu = document.querySelector(".btn-equ");

// click on show display 

btn.forEach(button => {
  button.addEventListener("click", () => {
  taskInput.value += button.value;
  save()
  })
})


// display show data Location

const old = localStorage.getItem("saving")
if(old){
taskInput.value = old;
}

// ac all clear data

btnAc.addEventListener("click", () => {
  taskInput.value = "";
localStorage.removeItem("saving");
})



// delete btn setup

btnDe.addEventListener("click", () => {
  taskInput.value = taskInput.value.toString().slice(0, -1)
  save()
})


// final answer click

btnQqu.addEventListener("click", () => {
  if(taskInput.value.includes("/0")){
    taskInput.value = "0";
    return;
  }else{
  taskInput.value = eval(taskInput.value);
  save()
  }
})




// localStorage data save 

const save = () => {
  localStorage.setItem("saving", taskInput.value)
}
