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

const project = [
  {
    id: 'p1',
    name: 'Tonic',
    featuredImage: './assets/images/Snapshoot%20Portfolio.svg',
    discription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsumhan printer took a galley of type and scrambled it 1960s with the releawn printer ",
    technologies: ['HTML', 'CSS', 'JavaScript', 'Ruby'],
    popBtn1: 'see live',
    popBtn2: 'see scource',
  },
  {
    id: 'p2',
    name: 'MultiPost stories',
    featuredImage: './assets/images/Snapshoot%20Portfolio1.svg',
    discription:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsumhan printer took a galley of type and scrambled it 1960s with the releawn printer ",
    technologies: ['HTML', 'CSS', 'JavaScript', 'Ruby'],
    popBtn1: 'see live',
    popBtn2: 'see scource',

  }, {
    id: 'p3',
    name: 'Tonic',
    featuredImage: './assets/images/Snapshoot%20Portfolio2.svg',
    discription:
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsumhan printer took a galley of type and scrambled it 1960s with the releawn printer  ",
    technologies: ['HTML', 'CSS', 'JavaScript', 'Ruby'],
    popBtn1: 'see live',
    popBtn2: 'see scource',
  },
  {
    id: 'p4',
    name: 'Multipost stories',
    featuredImage: './assets/images/Snapshoot%20Portfolio.svg',
    discription:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsumhan printer took a galley of type and scrambled it 1960s with the releawn printer ",
    technologies: ['HTML', 'CSS', 'JavaScript', 'Ruby'],
    popBtn1: 'see live',
    popBtn2: 'see scource',

  },
];

function setpopup(btnID) {
  let li = '';
  project.filter((project) => project.id === btnID).forEach((e) => {
    const popupWindow = document.getElementById('popup_window');
    e.technologies.forEach((project) => {
      li += `<li class="lang" id="lang1">${project}</li>`;
    });
    const popupCode = `
<div class="worksec1 worksec1d1" id="worksec1d">
    <div class="worksf">
    <div id="popupHead">
    <button onclick="closeWinfun()" id="closeWindow"><img id="close-img" src="./assets/images/Enabled.svg" alt="Close Cover"></button>
    <h2 class="desktop-hidden" id="title">${e.name}</h2>
    <br> </div>
    <div>
     <ul class="connect-via" id="dev">
         <li class="canopy">Canopy </li>
     <li class="list1"><img src="./assets/images/Counter.svg" class="counters" alt="counters"> &nbsp;&nbsp; Back End Dev</li>
     <li class="list1"><img src="./assets/images/Counter.svg" class="counters" alt="counters"> &nbsp; &nbsp; 2015</li>
     </ul>
    </div>
     <div class="worksf dsk-width1" >
        <img src=${e.featuredImage} id="c1" alt="pic">
        </div>
        <div class="pop-dsk-container">
     <div class="discription">
       <p class="discpara" id="discparapop">${e.discription}</p>
     </div>
     <div id="pop-group-tech-live">
     <div class="social-mv dsk-pop" id="technology">
     <ul class="connect-via desktop-mv-lang" id="technologyul">
        ${li}
     </ul> </div>
     <div id="popup-btn">
     <button type="button" class="project1-btn btn-hover" id="btn-project">${e.popBtn1}<img src="./assets/images/btniconexp.svg" alt="see live"></button>
     <button type="button" class="project1-btn btn-hover" id="btn-project1">${e.popBtn2}<img src="./assets/images/btnicongithub.svg" alt="see source"></button>
    </div>
    </div>
    </div>
    <div>
    </div>
    `;
    popupWindow.innerHTML = popupCode;

    document.getElementById('title').style.cssText = 'display: block; padding-left: 56px;';
    document.getElementById('technology').style.cssText = 'padding-top: 430px;';
    document.getElementById('closeWindow').style.cssText = 'float: right; padding-bottom: 10px width: 24px; height: 24px; background-color: white; border: 0px';
    document.getElementById('cover').style.cssText = 'display: block; z-index: 3; width: 100%; height: 100%; background: #C1C7D0;';
    document.getElementById('menu').style.cssText = 'display: none';
    document.getElementById('body').style.cssText = 'overflow: hidden;';
    document.getElementById('btn-project').style.cssText = 'justify-content: space-between; width: 142px;';
    document.getElementById('btn-project1').style.cssText = 'justify-content: space-between; width: 142px;';
    document.getElementById('c1').style.cssText = 'display: block; margin: 8px; margin-top: -45px; width: 95%;';
  });
}
function closeWinfun() {
  document.getElementById('worksec1d').style.cssText = 'display: none';
  document.getElementById('cover').style.cssText = 'display: none';
  document.getElementById('body').style.cssText = 'overflow: none;';
}

// const email =document.querySelector('email').value;

// form.addEventListener('submit', (e) =>{
//   e.preventDefault();
//   console.log("submit clicked!");
// if(email != email.toLowerCase())
// {
// errorMsg =innerHTML= msg;
// console.log("Error Msg show");

// }
// else{
//   console.log("prevent def called!");
//   console.log("email is "+email);
// }
//   }
// );
const form1 = document.querySelector('#form-cont');
const errorMsg = document.getElementById('error-msg');
const email = document.getElementById('email');
const msg = '<p class="error-msg"> Please write your email in lower case <p> ';
const regex = /^[a-z0-9+_.-]+@[a-z0-9.-]+$/;
form1.addEventListener('submit', (e) => {
  const { value } = email;
  if (!(value.match(regex))) {
    errorMsg.innerHTML = msg;
    e.preventDefault();
  }
});
setpopup('a');
closeWinfun();
