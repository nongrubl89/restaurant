!function(e){var n={};function i(a){if(n[a])return n[a].exports;var t=n[a]={i:a,l:!1,exports:{}};return e[a].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=e,i.c=n,i.d=function(e,n,a){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:a})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)i.d(a,t,function(n){return e[n]}.bind(null,t));return a},i.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="",i(i.s=0)}([function(e,n,i){"use strict";i.r(n);const a=e=>{e.preventDefault();const n=document.querySelector(".info");let i=e.target.dataset.navigation;switch(n.innerHTML="",i){case"Menu":n.appendChild((()=>{const e=document.createElement("div");return e.className="menuPage",e.innerHTML="\n    \n    <h1>Antipasti</h1>\n    <ul>\n   <li> Mozzarella di Bufala con Caponata alla Siciliana £23</li>\n    \n   <li>Calamari ai ferri - chargrilled squid with fresh red chilli and rocket £23</li>\n    \n   <li>Culatello di Zibello – with Charentais melon or Italian black figs £25</li>\n    \n   <li>Mazzancolle – poached Scottish Langoustines with aioli and pea salad with basil, mint & fennel herb £30</li>\n    \n   <li> Carpaccio di Branzino – thinly sliced raw wild Sea Bass with marigold tomatoes, golden oregano and chilli  £23</li>\n    \n   <li>Antipasto di Verdure – roast red & yellow peppers with anchovy, baked borlotti, Italian spinach and buffalo ricotta<br> crostino £22</li>\n    \n   <li>Carne Cruda di Vitello - finely chopped Veal rump with squashed tomato bruschetta and Pecorino Gran Riserva  £23</li>\n    </ul>\n\n    <h1>Primi</h1>\n    <ul>\n    <li>Strozzapreti con Pesto alla Genovese e Fagiolini Verdi £22</li>\n    \n    <li>Ravioli - stuffed with buffalo ricotta, garden herbs & lemon zest with marjoram butter and Pecorino £22</li>\n    \n    <li>Risotto - with clams, zucchini flowers and Castello di Neive Lange Arneis £23</li>\n    \n    <li>Taglierini - with cherry & marigold tomatoes and basil £22</li>\n    </ul>\n\n\n    <h1>Secondi</h1>\n    <ul>\n    <li>Rombo al forno - Turbot tranche wood-roasted with anchovy, capers and flowering oregano with summer beets and garden rocket £44</li>\n    \n    <li>Capesante ai ferri - chargrilled Scottish Scallops with zucchini fritti, chilli and mint £39</li>\n    \n    <li>Salmone al sale - wild Scottish Salmon baked whole in sea salt with salsa verde and chargrilled verdura mista of aubergines, zucchini & peppers £43</li>\n    \n    <li>Piccione al forno - whole Anjou Pigeon wood-roasted in San Guido Guidalberto with Tuscan roast potatoes £38</li>\n    \n    <li>Vitello cotto in bianco - poached Veal shin, pancetta & bay with fresh horseradish, Swiss chard and peas £39</li>\n    \n    <li>Controfiletto ai ferri – chargrilled Beef sirloin with fresh borlotti, mustard, Sorrento tomatoes and basil £40</li>\n    </ul>\n\n\n    <h1>Gelati del River Cafe £10</h1>\n    <ul>\n    <li>Caramel</li>\n    <li>Stracciatella</li>\n    <li> Roasted Almond</li>\n    <li>Hazelnut</li>\n    <li>Strawberry Sorbet</li>\n    \n    <li><i>Affogato with: Grappa Bassano £16 Vin Santo £18 or Espresso £12</i></li>\n    </ul>\n\n   <h1> Dolci £12 </h1>\n   <ul>\n    <li>Chocolate Nemesis</li>\n    <li>Lemon Tart</li>\n    <li>Almond Tart with Strawberries</li>\n    <li>Summer Pudding with Valpolicella</li>\n    <li>Pannacotta with Grappa and Raspberries</li>\n    </ul>\n    \n    <h1>I Formaggi – From our Cheese Room</h1>\n    <ul>\n    <li>Robiola di Roccaverano – goat’s milk, Piemonte</li>\n    <li>Asiago Pressato – cow’s milk, Veneto</li>\n    <li>Capretta di Toscano – goat’s milk, Toscana</li>\n    <li>Pecorino Sardo Canestrato – sheep’s milk, Sardinia</li>\n    <li>Blu di Bufala – blue, buffalo milk, Lombardia</li>\n    \n     \n    \n    <li><i>Selection of 3 cheeses £15</i></li>\n    <li><i>Selection of 5 cheeses £25</i></li>\n    </ul>\n    ",e})());break;case"Reserve":n.appendChild((()=>{const e=document.createElement("div");return e.id="tock",e.innerHTML="\n        <p> To make a reservation, please visit us on Tock </p>\n    ",e})());break;case"Contact":n.appendChild((()=>{const e=document.createElement("div");return e.className="contact",e.innerHTML="\n   <h1 id = 'name'> The River Cafe</h1>\n<p id = 'address'>Thames Wharf<br>\nRainville Rd, London W6 9HA<br>\n+44 (0)20 7386 4200<br>\n\ninfo@rivercafe.co.uk</p>\n\n<h1 id = 'directionsHeader'>Getting to The River Cafe</h1>\n<p id='directions'>Tube: Hammersmith<br>\nParking: Pay and display in surrounding streets<br>\nValet Parking: Available in the evenings,<br>\nSaturday & Sunday lunch<br></p>\n <a id='map' href='https://www.google.co.uk/maps/place/The+River+Caf%C3%A9/@51.484051,-0.224292,15z/data=!4m2!3m1!1s0x48760fb010bf16c7:0x26a2eb12ed316c17' target='_blank'>Open location in Google Maps</a>\n\n    <iframe id= 'google' src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2484.592046105253!2d-0.22641398451743036!3d51.48400212023512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760fb010bf16c7%3A0x26a2eb12ed316c17!2sThe%20River%20Caf%C3%A9!5e0!3m2!1sen!2sus!4v1597093619010!5m2!1sen!2sus\" \n    width=\"400\" height=\"400\" frameborder=\"0\" style=\"border:0;\" allowfullscreen=\"\" aria-hidden=\"false\" tabindex=\"0\"></iframe>\n    ",e})());break;case"Wine":n.appendChild((()=>{const e=document.createElement("div");return e.className="winePage",e.innerHTML="<a href=#><h1 class ='wineList' data-wine= 'glasses' onclick=displayWines()>Glass Selection</h1></a>\n    <ul id = 'glasses'>\n    <li>Brut Reserve N.V.Billecart Salmon 13.00</li>\n    <li>Brut Rose N.V.Billecart Salmon 19.00</li></ul>\n\n    <a href=#><h1 class ='wineList' data-wine= 'italian'>Italy</h1></a>\n    <ul id = 'italy'>\n    <li>Greco di Tufo 2018 Pietracupa 15.00</li>\n    <li>Falanghina-Via del Campo 2018 Quintodecimo 24.50</li>\n    </ul>\n\n    ",e})()),t()}},t=()=>{document.querySelectorAll("[data-wine]").forEach(e=>e.addEventListener("click",(function(e){let n=e.target.dataset.wine;const i=document.getElementById("glasses"),a=document.getElementById("italy");switch(n){case"glasses":i.style.display="grid"==i.style.display?"none":"grid";break;case"italian":a.style.display="grid"==a.style.display?"none":"grid"}})))};(()=>{const e=document.querySelector(".container");e.appendChild((()=>{const e=document.createElement("div");return e.className="menuNav",e.innerHTML="<a href=\"menu\" id='menutab' data-navigation='Menu'>Menu</a>",e})()),e.appendChild((()=>{const e=document.createElement("div");return e.className="resNav",e.innerHTML="<a href=\"reserve\" id='reservationstab' data-navigation='Reserve'>Reserve</a>",e})()),e.appendChild((()=>{const e=document.createElement("div");return e.className="contactNav",e.innerHTML="<a href=\"contact\" id='contacttab' data-navigation='Contact'>Contact</a>",e})()),e.appendChild((()=>{const e=document.createElement("div");return e.className="wineNav",e.innerHTML="<a href=\"wine\" id='wine' data-navigation='Wine'>Wine</a>",e})())})();document.querySelectorAll("[data-navigation]").forEach(e=>e.addEventListener("click",a))}]);