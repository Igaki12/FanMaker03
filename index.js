const additionalBackgroundOpenBtn = document.getElementById('additional-background-open-btn');
const additionalBackgroundCloseBtn = document.getElementById('additional-background-close-btn');
const additionalBackgroundRow = document.getElementById('additional-background-row');
const additionalBackgroundPanel = document.getElementById('additional-background-panel');

// window.onload = function() {
//   additionalBackgroundPanel.style.display = 'none';
// };

console.log()

additionalBackgroundOpenBtn.addEventListener('click',() => {
  console.log(additionalBackgroundPanel.style.display);
  additionalBackgroundPanel.style = "display: display;";
  additionalBackgroundOpenBtn.style.display = 'none';

  additionalBackgroundCloseBtn.addEventListener('click',() => {
    additionalBackgroundPanel.style.display = 'none';
    additionalBackgroundOpenBtn.style.display = 'display';
  },{passive:false});
},{passive:false});