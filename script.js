// script.js
document.getElementById('play-button').addEventListener('click', () => {
  confirm('Starting the game...');
});
document.getElementsByClassName('menu-button').addEventListener('click', () => {
  alert('Enter Setting Mode');
})
const body = document.getElementsByTagName('body')[0]

const p = document.createElement('p')
const btn = document.createElement('button')
btn.textContent = "Generate Random Number";

function generateRandomeNumber() {
  p.innerHTML = Math.floor(Math.random())
}
btn.addEventListener('click', () => {
  generateRandomeNumber()
})

body.appendChild(p)
body.appendChild(btn)