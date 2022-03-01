const hamList = document.querySelector('#ham_menu');
const section = document.querySelectorAll('.n2');
const close = document.querySelector('#coverItem');
hamList.addEventListener('click', () => {
  document.getElementById('cover').style.cssText = ' width: 100%; height: 100%; ';
  document.getElementById('coverItem').style.cssText = 'display: block';
  document.getElementById('menu').style.cssText = 'display: flex; z-index: 2;';
  document.getElementById('body').style.cssText = 'overflow: hidden;';
});
section.forEach((e) => {
  e.addEventListener('click', () => {
    document.getElementById('cover').style.cssText = ' width: 0%; height: 0%; ';
    document.getElementById('body').style.cssText = 'overflow: none;';
  });
});
close.addEventListener('click', () => {
  document.getElementById('cover').style.cssText = ' width: 0%; height: 0%; ';
  document.getElementById('body').style.cssText = 'overflow: none;';
});

const project = 
  {
    id: 'p1',
    title: 'Tonic',
    image: './assets/images/Snapshoot%20Portfolio.svg',
    discription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    languages: ['HTML', 'CSS', 'JavaScript'],
    popBtn1: 'see live',
    popBtn2: 'see scource'
  };

const popup_window = document.getElementById('popup_window');
const popupCode = `
<div class="worksec1 worksec1d" id="worksec1d">
    <div class="worksf">
    <div class="popupHead">
    <a href="#" ><img id="closeWindow" src="./assets/images/Enabled.svg" alt="Close Cover"></a>
    <h2 class="desktop-hidden" id="title">${project.title}</h2>
    <br> </div>
    <div>
     <ul class="connect-via" id="dev">
         <li class="canopy">Canopy </li>
     <li class="list1"><img src="./assets/images/Counter.svg" class="counters" alt="counters"> &nbsp;&nbsp; Back End Dev</li>
     <li class="list1"><img src="./assets/images/Counter.svg" class="counters" alt="counters"> &nbsp; &nbsp; 2015</li>
     </ul>
    </div>
     <div class="worksf dsk-width1" >
        <img src=${project.image} class="cardpic" alt="pic">
        <img src="./assets/images/card_1Snapshoot_Portfolio.svg" class="cardpic1" alt="pic">
        </div>
     <div class="discription">
       <p class="discpara">${project.discription}</p>
     </div>
     <div class="social-mv" id="technology">
     <ul class="connect-via desktop-mv-lang">
         <li class="lang">HTML</li>
         <li class="lang">CSS</li>
         <li class="lang">JavaScript</li>
     </ul> </div>
     <div id="popup-btn">
     <button type="button" class="project1-btn btn-hover">${project.popBtn1} <img src="./assets/images/btniconexp.svg" alt="exp"></button>
     <button type="button" class="project1-btn btn-hover">${project.popBtn2}<img src="./assets/images/btnicongithub.svg" alt="exp"></button>
    </div>
    </div>
    </div>
    `;
popup_window.innerHTML = popupCode;
const p1 = document.querySelector('#p1');
p1.addEventListener('click', () => {
  console.log('See proj cl');
  document.getElementById('worksec1d').style.cssText = 'z-index: 3; margin-top: 10px; position:fixed; display: block; top:0px; width:80%; height: 720px; border:red solid 2px; border-radius: 16px; margin-left: 10%';
  document.getElementById('title').style.cssText = "margin-top: -30px; padding-bottom: 50px";
  document.getElementById('dev').style.cssText ="margin-top: -40px";
  document.getElementById('popup-btn').style.cssText ="padding-bottom: 170px";
  document.getElementById('technology').style.cssText ="padding-top: 170px";
  document.getElementById('closeWindow').style.cssText ="float: right; padding-bottom: 10px";
  document.getElementById('popupHead').style.cssText ="display: flex; justify-content: space-between;";

});
const closeWindow =document.querySelector("#closeWindow");
closeWindow.addEventListener("click", function(){
  document.getElementById('worksec1d').style.cssText = "display: none";

});
