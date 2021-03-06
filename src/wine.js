const Wine=()=>{
    const wine = document.createElement('div');
    wine.className='winePage';
    wine.innerHTML= 
    `<a href=#><h1 class ='wineList' data-wine= 'glasses' onclick=displayWines()>Glass Selection</h1></a>
    <ul id = 'glasses'>
    <li>Brut Reserve N.V.Billecart Salmon 13.00</li>
    <li>Brut Rose N.V.Billecart Salmon 19.00</li></ul>

    <a href=#><h1 class ='wineList' data-wine= 'italian'>Italy</h1></a>
    <ul id = 'italy'>
    <li>Greco di Tufo 2018 Pietracupa 15.00</li>
    <li>Falanghina-Via del Campo 2018 Quintodecimo 24.50</li>
    </ul>

    `
    return wine
}

    


const displayWines=()=>{
    const wineList = document.querySelectorAll('[data-wine]');
    wineList.forEach(wine=>wine.addEventListener('click', function(event){
        let nav = event.target.dataset.wine;
        const showGlasses = document.getElementById('glasses');
        const italian = document.getElementById('italy');
       switch (nav){
           case 'glasses': showGlasses.style.display=(showGlasses.style.display=='grid')?'none':'grid';
           break;
           case 'italian': italian.style.display = (italian.style.display=='grid')?'none':'grid';
           break;
       }
        
    }));
}


//disregard this function for now
// const displayList = (para1, para2)=>{
//     para1.classList.add(para2);
// }

export {Wine, displayWines}