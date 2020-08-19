import {menuNav,resNav, contactNav, wineNav} from './navBar'
import {Menu} from './menu';
import {Reserve} from './reservations';
import {Contact} from './contact';
import {Wine, displayWines} from './wine'


const appendHeader=()=>{
const container = document.querySelector('.container');
container.appendChild(menuNav());
container.appendChild(resNav());
container.appendChild(contactNav());
container.appendChild(wineNav());
}

const navBarEvents=(event)=>{
    event.preventDefault();
    const info = document.querySelector('.info')
    let nav = event.target.dataset.navigation;
    info.innerHTML=('');
    switch (nav) {
        case 'Menu':  info.appendChild(Menu());
          break;
        case 'Reserve':  info.appendChild(Reserve());
          break;
        case 'Contact':  info.appendChild(Contact());
          break;
        case 'Wine': info.appendChild(Wine());
        displayWines();
        break;
  } 
}




appendHeader();
const navigation = document.querySelectorAll('[data-navigation]');
navigation.forEach(navigate=> navigate.addEventListener('click', navBarEvents));

