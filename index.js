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
const editFontframePanel = document.getElementById('edit-fontframe-panel');
const editAngleBack = document.getElementById('edit-angle-back-btn');
const fontsizeBack = document.getElementById('edit-fontsize-back-btn');
const fontcolorBack = document.getElementById('edit-fontcolor-back-btn');
const fontframeBack = document.getElementById('edit-fontframe-back-btn');
const angleBtn = document.getElementById('angle-btn');
const fontcolorBtn = document.getElementById('fontcolor-btn');
const fontsizeBtn = document.getElementById('fontsize-btn');
const fontframeBtn = document.getElementById('fontframe-btn');

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
  additionalFontcolorPanel.style = "display: none;";
  additionalFontcolorOpenBtn.style = "display: display;";
  additionalFontcolorCloseBtn.removeEventListener('click',closeFontcolorDetailPanel);
  fontcolorBack.removeEventListener('click',closeFontcolorDetailPanel);
  fontcolorBack.addEventListener('click',closeEditFontcolorPanel);
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
const openEditFontframePanel = () =>{
  editFontframePanel.style = "display: display;";
  editFontPanel.style = "display: none;";
}
const closeEditFontframePanel = () => {
  editFontframePanel.style = "display: none;";
  editFontPanel.style = "display: display;";
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
fontframeBtn.addEventListener('click',openEditFontframePanel);
fontframeBack.addEventListener('click',closeEditFontframePanel);
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
});

const fontframeDown = document.getElementById('fontframe-down-btn');
const fontframeUp = document.getElementById('fontframe-up-btn');
const fontframeNumber = document.getElementById('fontframe-number');
fontframeDown.addEventListener('click', () =>{
  if(parseInt(fontframeNumber.textContent) < 1) return;
  fontframeNumber.textContent = parseInt(fontframeNumber.textContent) - 1;
})
fontframeUp.addEventListener('click',() => {
  if(parseInt(fontframeNumber.textContent) > 4) return;
  fontframeNumber.textContent = parseInt(fontframeNumber.textContent) + 1;
})
// 円形スライダーの挙動
  // var $container = document.getElementById('circle-range');
  var circleSlider = document.getElementById('circle-slider');
  // var sliderW2 = circleSlider.style.width/2;
  let sliderW2 = 75;
  let sliderH2 = 75;
  // var sliderH2 = circleSlider.style.height/2;    
  var radius = 75;
  var deg = 0;    
  var elP = document.getElementById('circle-range');
  var elPos = { x: 100, y: window.innerHeight - 155};
  var X = 0, Y = 0;
  var mdown = false;
  console.log(circleSlider.style.left);
  document.getElementById('circle-range').addEventListener('mousedown',(e) => mdown = true);
  document.getElementById('circle-range').addEventListener('mouseup',(e) => mdown = true);
  document.getElementById('circle-range').addEventListener('mousemove',(e) => {
  // document.getElementById('circle-range').mousedown(function (e) { mdown = true; });
  // document.getElementById('circle-range').mouseup(function (e) { mdown = true; });
  // document.getElementById('circle-range').mousemove(function (e) {
      if (mdown) {
         var mPos = {x: e.clientX-elPos.x, y: e.clientY-elPos.y};
         var atan = Math.atan2(mPos.x-radius, mPos.y-radius);
         deg = -atan/(Math.PI/180) + 180; // final (0-360 positive) degrees from mouse position 
         X = Math.round(radius* Math.sin(deg*Math.PI/180));
         Y = Math.round(radius*  -Math.cos(deg*Math.PI/180));
        //  circleSlider.css({ left: X+radius-sliderW2, top: Y+radius-sliderH2 }); 
        // circleSlider.style.left = X+radius-sliderW2;
        // circleSlider.style.top = Y+radius-sliderH2;
        circleSlider.style = "left:" + X+radius-sliderW2 + "; top:" + Y+radius-sliderH2 + '; WebkitTransform: rotate(' + deg + 'deg);' + "-moz-transform: rotate(" + deg + "deg);";
        // circleSlider.style += "top:" + Y+radius-sliderH2;
         // AND FINALLY apply exact degrees to ball rotation
        //  circleSlider.style += 'WebkitTransform: rotate(' + deg + 'deg)';
        //  circleSlider.style += "-moz-transform: rotate(" + deg + "deg)";
        //  circleSlider.css({ WebkitTransform: 'rotate(' + deg + 'deg)'});
        //  circleSlider.css({ '-moz-transform': 'rotate(' + deg + 'deg)'});
         //
         // PRINT DEGREES
         document.getElementById('circle-slider-range').value = Math.ceil(deg);
        //  document.getElementById('circle-slider-range').val(Math.ceil(deg));
      }
  });
  console.log("あ");

