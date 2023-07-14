let mouse = {
  brand:'zebronics',
  price:300,
  refund:true,
  buttons:6,
  interface:'usb',
  cableLength:1.8
}

const messageEl = document.querySelector('#message')
const displayEl = document.querySelector('#display')
const mouseEl = document.querySelector('#mouse');

const reverseMessage = e => displayEl.innerText = [...messageEl.textContent].reverse().join('')
const clearDisplay = e => displayEl.innerText = ''
const displayObject = e => mouseEl.innerText= `My shiny mouse object is brand ${mouse.brand}` 