
const messageEl = document.querySelector('#messaage')
const displayEl = document.querySelector('#display')

const reverseMessage = e => displayEl.innerText = [...messageEl.textContent].reverse().join('')
const clearDisplay = e => displayEl.innerText = ''