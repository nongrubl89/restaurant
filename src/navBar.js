
const menuNav=()=>{
    const menuNav = document.createElement('div');
    menuNav.className='menuNav';
    menuNav.innerHTML= 
    `<a href="menu" id='menutab' data-navigation='Menu'>Menu</a>`
    return menuNav;
}

const resNav=()=>{
    const resNav = document.createElement('div');
    resNav.className='resNav';
    resNav.innerHTML= 
    `<a href="reserve" id='reservationstab' data-navigation='Reserve'>Reserve</a>`
    return resNav;
} 

const contactNav=()=>{
    const contactNav = document.createElement('div');
    contactNav.className='contactNav';
    contactNav.innerHTML= 
    `<a href="contact" id='contacttab' data-navigation='Contact'>Contact</a>`
    return contactNav;
}

const wineNav=()=>{
    const wineNav = document.createElement('div');
    wineNav.className='wineNav';
    wineNav.innerHTML= 
    `<a href="wine" id='wine' data-navigation='Wine'>Wine</a>`
    return wineNav;
}


export {menuNav,resNav, contactNav, wineNav}