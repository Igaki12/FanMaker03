const additionalBackgroundOpenBtn = document.getElementById('additional-background-open-btn');
const additionalBackgroundCloseBtn = document.getElementById('additional-background-close-btn');
const additionalBackgroundRow = document.getElementById('additional-background-row');
const additionalBackgroundPanel = document.getElementById('additional-background-panel');
const editBackgroundBack = document.getElementById('edit-background-back-btn');

// window.onload = function() {
//   additionalBackgroundPanel.style.display = 'none';
// };

console.log()

additionalBackgroundOpenBtn.addEventListener('click',() => {
  setTimeout(() => {
    additionalBackgroundPanel.style = "display: display;";
    additionalBackgroundOpenBtn.style = "display: none;";
  },100);


  additionalBackgroundCloseBtn.addEventListener('click',() => {
    setTimeout(() => {
      additionalBackgroundPanel.style = 'display: none;';
      additionalBackgroundOpenBtn.style = "display: display;";
    },100);
  },{passive:false});
  editBackgroundBack.addEventListener('click',() => {
    setTimeout(() => {
      additionalBackgroundPanel.style = 'display: none;';
      additionalBackgroundOpenBtn.style = "display: display;";
    },100);
  },{passive:false});
},{passive:false});