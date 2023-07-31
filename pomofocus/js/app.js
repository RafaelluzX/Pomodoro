const playButton = document.querySelector('#buttonPlay')
const stopButton = document.querySelector('#buttonStop')
let seconds = Number (document.querySelector('.seconds'))
let minutes = Number (document.querySelector('.minutes'))
let countInterval
const sumButton = document.querySelector('#sumButton')
const lessButton = document.querySelector('#lessButton')

const contador = () => {
  let secondsEl = document.querySelector('.seconds');
  let minutesEl = document.querySelector('.minutes');
  
  let seconds = Number(secondsEl.textContent);
  let minutes = Number(minutesEl.textContent);

  if (seconds === 0 && minutes === 0) {
    return;
  }

  if (seconds === 0) {
    seconds = 59;
    minutes -= 1;
  } else {
    seconds -= 1;
  }

  secondsEl.textContent = seconds.toString().padStart(2, '0');
  minutesEl.textContent = minutes.toString().padStart(2, '0');
  console.log(minutesEl,secondsEl)
};

const sumTimer = ()=>{
  let minutes =document.querySelector('.minutes')
  let sumMinutes = Number (minutes.innerText) 
  
  minutes.innerText = sumMinutes +5  
}

const lessTimer = ()=>{
  let minutes =document.querySelector('.minutes')
  let lessMinutes = Number (minutes.innerText) 
  
  if(lessMinutes == 0){
     return
   }
  minutes.innerText = lessMinutes -5 
}

playButton.addEventListener('click',()=>{
  countInterval = setInterval(contador,1000)
})

stopButton.addEventListener('click',()=>{
  buttonPlay = document.querySelector('#buttonPlay')
  buttonPlay.classList.add('hide')
  clearInterval(countInterval)
  
  
})

sumButton.addEventListener('click',sumTimer)

lessButton.addEventListener('click',lessTimer)

















