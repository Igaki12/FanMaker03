const additionalBackgroundOpenBtn = document.getElementById('additional-background-open-btn');
const additionalBackgroundCloseBtn = document.getElementById('additional-background-close-btn');
const additionalBackgroundRow = document.getElementById('additional-background-row');
const additionalBackgroundPanel = document.getElementById('additional-background-panel');
const editBackgroundBack = document.getElementById('edit-background-back-btn');

// window.onload = function() {
//   additionalBackgroundPanel.style.display = 'none';
// };

console.log()
const openBackgroundDetailPanel = () => {
  additionalBackgroundPanel.style = "display: display;";
  additionalBackgroundOpenBtn.style = "display: none;";
}
const closeBackgroundDetailPanel = () => {
  additionalBackgroundPanel.style = 'display: none;';
  additionalBackgroundOpenBtn.style = "display: display;";
  additionalBackgroundCloseBtn.removeEventListener('click',closeBackgroundDetailPanel);
  editBackgroundBack.removeEventListener('click',closeBackgroundDetailPanel);

}

additionalBackgroundOpenBtn.addEventListener('click',() => {
  setTimeout(openBackgroundDetailPanel,100);
  additionalBackgroundCloseBtn.addEventListener('click',closeBackgroundDetailPanel);
  editBackgroundBack.addEventListener('click',closeBackgroundDetailPanel);
},{passive:false});