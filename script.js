const val = document.querySelector(".count")
const max = document.querySelector(".max")
const min = document.querySelector(".min")
const reset = document.querySelector(".reset-btn")
const inpt = document.querySelector(".scaleBy")


let count = 0;
max.addEventListener("click", ()=> {
    count += Number(inpt.value);
    val.innerText = count;
})

min.addEventListener("click", ()=> {
    count -= Number(inpt.value);
    val.innerText = count;
})

reset.addEventListener("click", ()=> {
    count = 0
    val.innerText = count
    
})

