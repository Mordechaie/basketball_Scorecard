// 2 counters 
// 2 buttons that increment the coutnters
let countEl = document.getElementById("count-el")
let count = 0

function increment1() {
    count += 1
    countEl.textContent = count
}

function increment2() {
    count += 2
    countEl.textContent = count
}

function increment3() {
    count += 3
    countEl.textContent = count
}
