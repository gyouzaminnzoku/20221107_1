//const tbox=document.getElementById("tbox");
const add=document.getElementById("add");
const b1=document.getElementById("b1");
//const idd=document.getElementById("id");
//element.insertAdjacentHTML('beforebegin','<a-text value="cocoa" look-at="[gps-camera]" scale="50 50 50" gps-entity-place="latitude: 36.14440307353002 ; longitude: 139.38239471376482;"></a-text>')

const element = document.querySelector('#wrap');

/*b1.addEventListener("click",()=>{
    //add.innerHTML='<a-text value="cocoa" look-at="[gps-camera]" scale="50 50 50" gps-entity-place="latitude: 36.14440307353002 ; longitude: 139.38239471376482;"></a-text>'
    console.log("ok");
    idd.setAttribute("value","bbb");
    //idd.insertAdjacentHTML('beforebegin', '<a-text id="id" value="aaa." look-at="[gps-camera]" scale="50 50 50" gps-entity-place="latitude: 36.14440307353002 ; longitude: 139.38239471376482;"></a-text>');
})*/

function ano(){
  let nihon=document.getElementById("nihon");
  let tbox=document.getElementById("tbox");
  var text=tbox.value;
  nihon.setAttribute("data-text","");
  tbox.value="";
  aframeMutlByte();
  /*const tbox=document.getElementById("tbox");
  var text=tbox.value;
  const idd=document.getElementById("id");
  idd.setAttribute("value",text);
  //idd.value='bbb';
  //idd.insertAdjacentHTML('beforebegin', '<a-text id="id" value="aaa." look-at="[gps-camera]" scale="50 50 50" gps-entity-place="latitude: 36.14440307353002 ; longitude: 139.38239471376482;"></a-text>');
  //idd.setAttribute("value","bbb");
  //let createElement = document.createElement('a-text value="cocoa" look-at="[gps-camera]" scale="50 50 50" gps-entity-place="latitude: 36.14440307353002 ; longitude: 139.38239471376482;');
  //element.insertAdjacentHTML('beforebegin','<a-text value="cocoa" look-at="[gps-camera]" scale="50 50 50" gps-entity-place="latitude: 36.14440307353002 ; longitude: 139.38239471376482;"></a-text>')
*/
}
function run(){
  console.log("ready");
  let nihon=document.getElementById("nihon");
  let tbox=document.getElementById("tbox");
  var text=tbox.value;
  nihon.setAttribute("data-text",text);
  aframeMutlByte();
}
/*function run(){
  console.log("ready");
  //let nihon=document.getElementById("nihon");
  let tbox=document.getElementById("tbox");
  var text=tbox.value;
  //nihon.remove();
  let createElement = document.createElement('a-entity')
  createElement.setAttribute("id","nihon");
        createElement.setAttribute("mb-text");
        createElement.setAttribute("position","0.5 2 -1");
        createElement.setAttribute("data-text","bbbb");
  //let nihon=document.getElementById("nihon");
  //nihon.setAttribute("data-text",text);
  aframeMutlByte();
}*/
//idd.appendChild(new_element);

function aframeMutlByte(){
  //console.log("koko")
  
  //nihon.removeAttribute("mb-text");
  
  //let hensu=document.createElement("div");
  //hensu.textContent="hello";
  //document.getElementById("kk").appendChild(hensu);
    document.querySelectorAll('[mb-text]').forEach(mb_text2=>{
        console.log(mb_text2.dataset.text)
        let text  =mb_text2.dataset.text
        let text_cnt = text.length
        let width = text_cnt*1.4
        let height= 1.6
        let cvs = document.createElement('canvas')
        let ctx = cvs.getContext('2d')
        cvs.width = width*100
        cvs.height = height*100
        ctx.fillStyle = "rgb(127,255,212)"
        ctx.font = '100pt Arial'
        ctx.fillText(text,0,125)

        let base64 = cvs.toDataURL("image/png")
        mb_text2.innerHTML=`<a-image scale="${(width)/10} ${height/10} 1" src="${base64}"></a-image>`
    })
}

function Rayquaza(){
  let Jirachi = document.getElementById('Jirachi');
  Jirachi.remove();
}

/*alert('画面はよこですか？');
window.onorientationchange = function () {
 switch ( window.orientation ) {
  case 90:
   break;
  case 0:
   alert('画面を横にしてくださいね');
   break;
  case -180:
   alert('画面を横にしてくださいね');
   break;
 }
}*/
/*window.addEventListener("orientationchange", function() {
	alert ("画面が回転しました" );
});*/
