let counter = 0;
let clickCount = 0;

const counterText = document.getElementById("counter");
const plusBtn = document.getElementById("plusBtn");
const minusBtn = document.getElementById("minusBtn");

plusBtn.addEventListener("click", () => {

    if(clickCount < 10){
        counter++;
        clickCount++;
        counterText.textContent = counter;
    }

    if(clickCount === 10){
        plusBtn.disabled = true;
    }
});

minusBtn.addEventListener("click", () => {

    if(counter > 0){
        counter--;
        clickCount--;
        counterText.textContent = counter;

        plusBtn.disabled = false; // enable again if decreased
    }
});
