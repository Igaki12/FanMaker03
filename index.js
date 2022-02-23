const additionalBackgroundOpenBtn = document.getElementById('additional-background-open-btn');
const additionalBackgroundCloseBtn = document.getElementById('additional-background-close-btn');
const additionalBackgroundRow = document.getElementById('additional-background-row');
const additionalBackgroundPanel = document.getElementById('additional-background-panel');
const additionalFontcolorOpenBtn = document.getElementById('additional-fontcolor-open-btn');
const additionalFontcolorCloseBtn = document.getElementById('additional-fontcolor-close-btn');
const additionalFontcolorRow = document.getElementById('additional-fontcolor-row');
const additionalFontcolorPanel = document.getElementById('additional-fontcolor-panel');
const editBackgroundBack = document.getElementById('edit-background-back-btn');
const editFontBack = document.getElementById('edit-font-back-btn');
const editBackgroundPanel = document.getElementById('edit-background-panel');
const startPanel = document.getElementById('start-panel');
const editFontPanel = document.getElementById('edit-font-panel');
const editBackgroundBtn = document.getElementById('edit-background-btn');
const createFontBtn = document.getElementById('create-font-btn');
const editAnglePanel = document.getElementById('edit-angle-panel');
const editFontcolorPanel = document.getElementById('edit-fontcolor-panel');
const editFontsizePanel = document.getElementById('edit-fontsize-panel');
const editAngleBack = document.getElementById('edit-angle-back-btn');
const fontsizeBack = document.getElementById('edit-fontsize-back-btn');
const fontcolorBack = document.getElementById('edit-fontcolor-back-btn');
const angleBtn = document.getElementById('angle-btn');
const fontcolorBtn = document.getElementById('fontcolor-btn');
const fontsizeBtn = document.getElementById('fontsize-btn');

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
const openFontcolorDetailPanel = () => {
  additionalFontcolorPanel.style = "display: display;";
  additionalFontcolorOpenBtn.style = "display: none;";
  fontcolorBack.removeEventListener('click',closeEditFontcolorPanel);
}
const closeFontcolorDetailPanel = () => {
  additionalFontcolorPanel.style = 'display: none;';
  additionalFontcolorOpenBtn.style = "display: display;";
  additionalFontcolorCloseBtn.removeEventListener('click',closeFontcolorDetailPanel);
  fontcolorBack.removeEventListener('click',closeFontcolorDetailPanel);
  fontcolorBack.addEventListener('click',openEditFontPanel);
}
const openEditFontPanel = () => {
  editFontPanel.style = "display: display;";
  startPanel.style = "display: none;";
  additionalFontcolorPanel.style = "display: none;";
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
const openEditFontsizePanel = () => {
  editFontsizePanel.style = "display: display";
  editFontPanel.style = "display: none";
}
const closeEditFontsizePanel = () => {
  editFontsizePanel.style = "display: none";
  editFontPanel.style = "display: display";
}
const openEditFontcolorPanel = () => {
  editFontcolorPanel.style = "display: display";
  editFontPanel.style = "display: none";
}
const closeEditFontcolorPanel = () => {
  editFontcolorPanel.style = "display: none";
  editFontPanel.style = "display: display";
}
createFontBtn.addEventListener('click',openEditFontPanel);
editBackgroundBtn.addEventListener('click',openBackgroundPanel);
editFontBack.addEventListener('click',backStartPanel);
editBackgroundBack.addEventListener('click',backStartPanel);
editAngleBack.addEventListener('click',closeEditAnglePanel);
angleBtn.addEventListener('click',openEditAnglePanel);
fontsizeBtn.addEventListener('click',openEditFontsizePanel);
fontsizeBack.addEventListener('click',closeEditFontsizePanel);
fontcolorBtn.addEventListener('click',openEditFontcolorPanel);
fontcolorBack.addEventListener('click',closeEditFontcolorPanel);
additionalBackgroundOpenBtn.addEventListener('click',() => {
  setTimeout(openBackgroundDetailPanel,100);
  editBackgroundBack.removeEventListener('click',backStartPanel);
  additionalBackgroundCloseBtn.addEventListener('click',closeBackgroundDetailPanel);
  editBackgroundBack.addEventListener('click',closeBackgroundDetailPanel);
},{passive:false});
additionalFontcolorOpenBtn.addEventListener('click',() => {
  setTimeout(openFontcolorDetailPanel,100);
  fontcolorBack.removeEventListener('click',closeEditFontcolorPanel);
  additionalFontcolorCloseBtn.addEventListener('click',closeFontcolorDetailPanel);
  fontcolorBack.addEventListener('click',closeFontcolorDetailPanel);
})



