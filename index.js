const additionalBackgroundOpenBtn = document.getElementById('additional-background-open-btn');
const additionalBackgroundCloseBtn = document.getElementById('additional-background-close-btn');
const additionalBackgroundRow = document.getElementById('additional-background-row');
const additionalBackgroundPanel = document.getElementById('additional-background-panel');
const editBackgroundBack = document.getElementById('edit-background-back-btn');
const editFontBack = document.getElementById('edit-font-back-btn');
const editBackgroundPanel = document.getElementById('edit-background-panel');
const startPanel = document.getElementById('start-panel');
const editFontPanel = document.getElementById('edit-font-panel');
const editBackgroundBtn = document.getElementById('edit-background-btn');
const createFontBtn = document.getElementById('create-font-btn');
const editAnglePanel = document.getElementById('edit-angle-panel');
const editAngleBack = document.getElementById('edit-angle-back-btn');
console.log("あ");
const backStartPanel = () => {
  startPanel.style = "display: display;";
  editFontPanel.style = "display: none";
  editBackgroundPanel.style = "display: none";
};
const openBackgroundDetailPanel = () => {
  additionalBackgroundPanel.style = "display: display;";
  additionalBackgroundOpenBtn.style = "display: none;";
  editBackgroundBack.removeEventListener('click',backStartPanel);
}
const closeBackgroundDetailPanel = () => {
  additionalBackgroundPanel.style = 'display: none;';
  additionalBackgroundOpenBtn.style = "display: display;";
  additionalBackgroundCloseBtn.removeEventListener('click',closeBackgroundDetailPanel);
  editBackgroundBack.removeEventListener('click',closeBackgroundDetailPanel);
  editBackgroundBack.addEventListener('click',backStartPanel);
}
const openEditFontPanel = () => {
  editFontPanel.style = "display: display;";
  startPanel.style = "display: none;";

}
const openBackgroundPanel = () => {
  editBackgroundPanel.style = "display: display;";
  startPanel.style = "display: none;";
}
const openEditAnglePanel = () => {
  editAnglePanel.style = "display: display";
  editFontPanel.style = "display:none";
}
const closeEditAnglePanel = () => {
  editAnglePanel.style = "display: none";
  editFontPanel.style = "display:display";
}
createFontBtn.addEventListener('click',openEditFontPanel);
editBackgroundBtn.addEventListener('click',openBackgroundPanel);
editFontBack.addEventListener('click',backStartPanel);
editBackgroundBack.addEventListener('click',backStartPanel);
editAngleBack.addEventListener('click',closeEditAnglePanel);
additionalBackgroundOpenBtn.addEventListener('click',() => {
  setTimeout(openBackgroundDetailPanel,100);
  editBackgroundBack.removeEventListener('click',backStartPanel);
  additionalBackgroundCloseBtn.addEventListener('click',closeBackgroundDetailPanel);
  editBackgroundBack.addEventListener('click',closeBackgroundDetailPanel);
},{passive:false});



