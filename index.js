

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

let existColorList= [
  "rgb(255,228,196)",
];
const BasicColorList = [
  "rgb(255,0,0)","rgb(255,63,0)","rgb(255,127,0)","rgb(255,191,0)","rgb(255,255,0)","rgb(191,255,0)","rgb(127,255,0)","rgb(63,255,0)","rgb(0,255,0)","rgb(0,255,63)","rgb(0,255,127)","rgb(0,255,191)","rgb(0,255,255)","rgb(0,191,255)","rgb(0,127,255)","rgb(0,63,255)","rgb(0,0,255)","rgb(63,0,255)","rgb(127,0,255)","rgb(191,0,255)","rgb(255,0,255)","rgb(255,0,191)","rgb(255,0,127)","rgb(255,0,63)","rgb(127,127,127)","rgb(63,63,63)","rgb(0,0,0)",
];
function addBasicBackgroundColorBtn(){
  let parent = document.getElementById('basic-background-parent');
  while(parent.firstChild){
    parent.removeChild(parent.firstChild);
  };
  BasicColorList.map((value,index)=> {
    let child = document.createElement('button');
    child.id = `background-basic-color${index}`;
    child.style.backgroundColor = value;
    child.className = "colorBtn palette";
    child.addEventListener('click',() => {
      document.getElementById('backgroundImg').style = `background-color: ${value};`
    });
    child = document.getElementById('basic-background-parent').appendChild(child);
    console.log(child);
  })
}
function addExistBackgroundColorBtn(newColorText) {
  if(newColorText){
    existColorList.unshift(newColorText);
    console.log(existColorList);
  }
  let parent = document.getElementById('exist-background-parent');
  while(parent.firstChild){
    parent.removeChild(parent.firstChild);
  };
  existColorList.map((value, index) => {
    let child = document.createElement("button");
    child.id = `background-exist-color${index}`;
    child.style.backgroundColor = value;
    child.className = "colorBtn palette";
    child.addEventListener('click',() => {
      document.getElementById('backgroundImg').style = `background-color: ${value};`
    });
    child = document.getElementById('exist-background-parent').appendChild(child);
    console.log(child);
  });

}

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
  let selectedColor = "rgb(" 
  + document.getElementById('rs-bullet-red').innerHTML +  "," 
  + document.getElementById('rs-bullet-green').innerHTML + "," 
  + document.getElementById('rs-bullet-blue').innerHTML + ")";
  console.log(selectedColor);
  addExistBackgroundColorBtn(selectedColor);
  document.getElementById('backgroundImg').style = `background-color: ${selectedColor}`;
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
  addExistBackgroundColorBtn();
  addBasicBackgroundColorBtn();
  console.log(document.getElementById('backgroundImg').style.backgroundColor);
  document.getElementById('nowBackgroundColorBtn').style 
  = "background-color: " + document.getElementById('backgroundImg').style.backgroundColor;
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
document.getElementById('nowBackgroundColorBtn').addEventListener('click', () => {
  document.getElementById('backgroundImg').style
  = "background-color: " + document.getElementById('nowBackgroundColorBtn').style.backgroundColor;
});
// 円形スライダーの挙動
  var circleSlider = document.getElementById('circle-slider');
  var radius = 75;
  var deg = 0;    
  var elP = document.getElementById('circle-range');
  var elPos = { x:100, y: window.innerHeight - 230};
  var X = 0, Y = 0;
  var mdown = false;
  console.log(circleSlider.style.left);
  document.getElementById('circle-range').addEventListener('touchstart',(e) => mdown = true);
  document.getElementById('circle-range').addEventListener('touchend',(e) => mdown = false);
  document.getElementById('circle-range').addEventListener('touchmove',(e) => {
  // document.getElementById('circle-range').mousedown(function (e) { mdown = true; });
  // document.getElementById('circle-range').mouseup(function (e) { mdown = true; });
  // document.getElementById('circle-range').mousemove(function (e) {
      if (mdown) {
         var mPos = {x: e.changedTouches[0].pageX-elPos.x, y: e.changedTouches[0].pageY-elPos.y};
         var atan = Math.atan2(mPos.x-radius, mPos.y-radius);
         deg = -atan/(Math.PI/180) + 180; // final (0-360 positive) degrees from mouse position 
         X = Math.round(radius* Math.sin(deg*Math.PI/180));
         Y = Math.round(radius*  -Math.cos(deg*Math.PI/180));
         circleSlider.style.left = X+radius + "px";
         circleSlider.style.top = Y+radius - 12 + "px";
         //
         // PRINT DEGREES
         if(deg < 360){
          document.getElementById('circle-slider-range').value = Math.ceil(deg);
         }else{
          document.getElementById('circle-slider-range').value = 0;
         }
      }
  });
  console.log("あ");
const changeAdditionalBackgroundColor = () => {
  console.log('changeAdditionalBackgroundColor');
  document.getElementById('additional-background-close-btn').style
  = "background-color:rgb(" + document.getElementById('rs-bullet-red').innerHTML
  + "," + document.getElementById('rs-bullet-green').innerHTML
  + "," + document.getElementById('rs-bullet-blue').innerHTML + ");";

  document.getElementById('nowBackgroundColorBtn').style
  = "background-color:rgb(" + document.getElementById('rs-bullet-red').innerHTML
  + "," + document.getElementById('rs-bullet-green').innerHTML
  + "," + document.getElementById('rs-bullet-blue').innerHTML + ");";
}

document.getElementById('rs-range-line-red').addEventListener('input',() => {
  document.getElementById('rs-bullet-red').innerHTML = document.getElementById('rs-range-line-red').value;
  changeAdditionalBackgroundColor();
});
document.getElementById('rs-range-line-green').addEventListener('input',() => {
  document.getElementById('rs-bullet-green').innerHTML = document.getElementById('rs-range-line-green').value;
  changeAdditionalBackgroundColor();
});
document.getElementById('rs-range-line-blue').addEventListener('input',() => {
  document.getElementById('rs-bullet-blue').innerHTML = document.getElementById('rs-range-line-blue').value;
  changeAdditionalBackgroundColor();
});

document.getElementById('background-red-plus').addEventListener('click',() => {
  document.getElementById('rs-bullet-red').innerHTML = parseInt(document.getElementById('rs-bullet-red').innerHTML) + 1;
  changeAdditionalBackgroundColor();
});
document.getElementById('background-green-plus').addEventListener('click',() => {
  document.getElementById('rs-bullet-green').innerHTML = parseInt(document.getElementById('rs-bullet-green').innerHTML) + 1;
  changeAdditionalBackgroundColor();
});
document.getElementById('background-blue-plus').addEventListener('click',() => {
  document.getElementById('rs-bullet-blue').innerHTML = parseInt(document.getElementById('rs-bullet-blue').innerHTML) + 1;
  changeAdditionalBackgroundColor();
});
document.getElementById('background-red-minus').addEventListener('click',() => {
  document.getElementById('rs-bullet-red').innerHTML = parseInt(document.getElementById('rs-bullet-red').innerHTML) - 1;
  changeAdditionalBackgroundColor();
});
document.getElementById('background-green-minus').addEventListener('click',() => {
  document.getElementById('rs-bullet-green').innerHTML = parseInt(document.getElementById('rs-bullet-green').innerHTML) - 1;
  changeAdditionalBackgroundColor();
});
document.getElementById('background-blue-minus').addEventListener('click',() => {
  document.getElementById('rs-bullet-blue').innerHTML = parseInt(document.getElementById('rs-bullet-blue').innerHTML) - 1;
  changeAdditionalBackgroundColor();
})


