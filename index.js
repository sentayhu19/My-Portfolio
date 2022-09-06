import Aos from 'aos';
import 'aos/dist/aos.css';
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
    name: 'Cloud-app-with-tailwind',
    featuredImage: './assets/images/project-screenshoot/cloud.png',
    discription:
      "A Cloud Management website that has support and service pages built with TailwindCSS. ",
    technologies: ['HTML', 'CSS', 'React and Redux'],
    popBtn1: 'see live',
    popBtn2: 'see scource',
    srclnk: 'https://github.com/sentayhu19/Cloud-app-with-tailwind',
    lvlnk: 'https://cloud-app-with-tailwind.vercel.app/'
  },
  {
    id: 'p2',
    name: 'Arada-chat',
    featuredImage: './assets/images/Snapshoot%20Portfolio1.svg',
    discription: "This is a chatting web app created using react-redux and firebase. Users can create a channel and talk on the channel and DM each other. ",
    technologies: ['HTML', 'CSS', 'JavaScript', 'React/Redux and Firebase'],
    popBtn1: 'see live',
    popBtn2: 'see scource',
    srclnk: 'https://github.com/sentayhu19/Arada-chat',
    lvlnk: 'https://arada-chat.vercel.app/'

  }, {
    id: 'p3',
    name: 'ShowBox Movies',
    featuredImage: './assets/images/project-screenshoot/movie.png',
    discription:
  "Search for info about your favorite movies and tv shows on the ShowBox Movie Database",
    technologies: ['HTML', 'CSS', 'JavaScript', 'Webpack'],
    popBtn1: 'see live',
    popBtn2: 'see scource',
    srclnk: 'https://github.com/sentayhu19/Movie-Database',
    lvlnk: 'https://deyemiobaa.github.io/Movie-Database/'
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
     <button type="button" class="project1-btn btn-hover" id="btn-project"><a href=${e.lvlnk}>${e.popBtn1}</a><img src="./assets/images/btniconexp.svg" alt="see live"></button>
     <button type="button" class="project1-btn btn-hover" id="btn-project1"><a href=${e.srclnk}>${e.popBtn2}</a><img src="./assets/images/btnicongithub.svg" alt="see source"></button>
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
const form1 = document.querySelector('#form-cont');
const errorMsg = document.getElementById('error-msg');
const email = document.getElementById('email');
const msg = '<p class="error-msg"> Please write your email in lower case <p> ';
const regex = /^[a-z0-9+_.-]+@[a-z0-9.-]+$/;
form1.addEventListener('change', (e) => {
  const { value } = email;
  const name = document.getElementById('name').value;
  const description = document.getElementById('description').value;
  if (!(value.match(regex))) {
    errorMsg.innerHTML = msg;
    e.preventDefault();
  } else {
    // Saving Data
    const contactData = { user_name: name, user_email: value, user_description: description };
    const storeData = JSON.stringify(contactData);
    localStorage.setItem('contactData', storeData);
  }
});

function prefill() {
  const input = document.querySelectorAll('.input');
  const storedData = JSON.parse(localStorage.contactData);
  input[0].value = storedData.user_name;
  input[1].value = storedData.user_email;
  input[2].value = storedData.user_description;
}

prefill();
setpopup('a');
closeWinfun();
