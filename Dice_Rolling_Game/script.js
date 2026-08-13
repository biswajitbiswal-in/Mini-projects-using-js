const dice = document.querySelector(".dice")
function roll(){
    console.log("Dice rolled!");
    let result =  Math.floor(Math.random()*6)+1
    
dice.textContent = result;
dice.classList.remove("rolling");
void dice.offsetWidth;
dice.classList.add("rolling");
}



