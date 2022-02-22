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
console.log("あ");
const backStartPanel = () => {
  startPanel.style = "display: display;";
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
}

createFontBtn.addEventListener('click',openEditFontPanel);
const openEditFontPanel = () => {
  editFontPanel.style = "display: display;";
  startPanel.style = "display: none;";
}

// additionalBackgroundOpenBtn.addEventListener('click',() => {
//   setTimeout(openBackgroundDetailPanel,100);
//   additionalBackgroundCloseBtn.addEventListener('click',closeBackgroundDetailPanel);
//   editBackgroundBack.addEventListener('click',closeBackgroundDetailPanel);
// },{passive:false});
// editBackgroundBack.addEventListener('click',backStartPanel);

