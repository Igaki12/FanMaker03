const additionalBackgroundOpenBtn = document.getElementById('additional-background-open-btn');
const additionalBackgroundCloseBtn = document.getElementById('additional-background-close-btn');
const additionalBackgroundRow = document.getElementById('additional-background-row');
const additionalBackgroundPanel = document.getElementById('additional-background-panel');

// window.onload = function() {
//   additionalBackgroundPanel.style.display = 'none';
// };

console.log()

additionalBackgroundOpenBtn.addEventListener('click',() => {
  setTimeout(() => {
    additionalBackgroundPanel.style = "height: auto;";
    additionalBackgroundOpenBtn.style = "display: none;";
  },500);


  additionalBackgroundCloseBtn.addEventListener('click',() => {
    setTimeout(() => {
      additionalBackgroundPanel.style = 'height: 0;';
      additionalBackgroundOpenBtn.style = "display: display;";
    },500);

  },{passive:false});
},{passive:false});