let $coinsValue = document.getElementById("coins-value");
let $energyValue = document.getElementById("energy-value");
let $clicker = document.getElementById("clicker");

const coinCLICK = 5; 
const energyCLICK = 5; 

function getCoins() {
    return Number($coinsValue.innerText);
}

function setCoins(coins) {
    $coinsValue.innerText = coins;
}

function getEnergy() {
    return Number($energyValue.innerText);
}

function setEnergy(energy) {
    $energyValue.innerText = energy;
}

function clickHandler() {
    let currentEnergy = getEnergy();
    if (currentEnergy >= energyCLICK) {
        setCoins(getCoins() + coinCLICK);
        setEnergy(currentEnergy - energyCLICK);
    } else {
        alert("Нет энергии!");
    }
}

$clicker.addEventListener("click", clickHandler);