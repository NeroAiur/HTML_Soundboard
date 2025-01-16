rndButton = document.getElementById("rndSound");
contentWrapper = document.getElementById("contentWrapper");

let soundsFound = 15;    // Test Value
let rowPosition = 3;

for (let i = 0; i < soundsFound; i++) {
    let currentRow = contentWrapper.lastElementChild;
    console.log(currentRow)
    if (currentRow == null || currentRow.childElementCount == 3) {
        let buttonsRow = document.createElement("div");
        buttonsRow.classList.add("buttonsRow");
        contentWrapper.appendChild(buttonsRow);
        currentRow = contentWrapper.lastElementChild;
    }

    let soundButton = document.createElement("div");
    soundButton.classList.add("soundButton");
    soundButton.id = i
    soundButton.innerHTML = i
    currentRow.appendChild(soundButton)
}