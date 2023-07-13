
const dataStringEl = document.querySelector('#dataString')
const targetStringEl = document.querySelector('#reverseString')

const reverseStr = e => targetStringEl.innerText = [...dataStringEl.textContent].reverse().join('')
const clearEl = e => targetStringEl.innerText = ''