const date = '15 feb 2024 5:00 pm';
document.querySelector('#end-date').innerHTML= date;
const input = document.querySelectorAll('input')
const clock = ()=>{
  const end = new Date(date)
  const now = new Date()
  const diff = (end - now) /1000;
  input[0].value = Math.floor(diff/3600/24);
  input[1].value = Math.floor(diff/3600)%24;
  input[2].value = Math.floor(diff/60)%60;
  input[3].value = Math.floor(diff % 60);
  
  
};

clock();

setInterval(
  ()=>{
    clock()
  },1000
  
  )