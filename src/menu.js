const Menu=()=>{
    const menu = document.createElement('div');
    menu.className='menuPage';
    menu.innerHTML= 
    `
    
    <h1>Antipasti</h1>
    <ul>
   <li> Mozzarella di Bufala con Caponata alla Siciliana £23</li>
    
   <li>Calamari ai ferri - chargrilled squid with fresh red chilli and rocket £23</li>
    
   <li>Culatello di Zibello – with Charentais melon or Italian black figs £25</li>
    
   <li>Mazzancolle – poached Scottish Langoustines with aioli and pea salad with basil, mint & fennel herb £30</li>
    
   <li> Carpaccio di Branzino – thinly sliced raw wild Sea Bass with marigold tomatoes, golden oregano and chilli  £23</li>
    
   <li>Antipasto di Verdure – roast red & yellow peppers with anchovy, baked borlotti, Italian spinach and buffalo ricotta<br> crostino £22</li>
    
   <li>Carne Cruda di Vitello - finely chopped Veal rump with squashed tomato bruschetta and Pecorino Gran Riserva  £23</li>
    </ul>

    <h1>Primi</h1>
    <ul>
    <li>Strozzapreti con Pesto alla Genovese e Fagiolini Verdi £22</li>
    
    <li>Ravioli - stuffed with buffalo ricotta, garden herbs & lemon zest with marjoram butter and Pecorino £22</li>
    
    <li>Risotto - with clams, zucchini flowers and Castello di Neive Lange Arneis £23</li>
    
    <li>Taglierini - with cherry & marigold tomatoes and basil £22</li>
    </ul>


    <h1>Secondi</h1>
    <ul>
    <li>Rombo al forno - Turbot tranche wood-roasted with anchovy, capers and flowering oregano with summer beets and garden rocket £44</li>
    
    <li>Capesante ai ferri - chargrilled Scottish Scallops with zucchini fritti, chilli and mint £39</li>
    
    <li>Salmone al sale - wild Scottish Salmon baked whole in sea salt with salsa verde and chargrilled verdura mista of aubergines, zucchini & peppers £43</li>
    
    <li>Piccione al forno - whole Anjou Pigeon wood-roasted in San Guido Guidalberto with Tuscan roast potatoes £38</li>
    
    <li>Vitello cotto in bianco - poached Veal shin, pancetta & bay with fresh horseradish, Swiss chard and peas £39</li>
    
    <li>Controfiletto ai ferri – chargrilled Beef sirloin with fresh borlotti, mustard, Sorrento tomatoes and basil £40</li>
    </ul>


    <h1>Gelati del River Cafe £10</h1>
    <ul>
    <li>Caramel</li>
    <li>Stracciatella</li>
    <li> Roasted Almond</li>
    <li>Hazelnut</li>
    <li>Strawberry Sorbet</li>
    
    <li><i>Affogato with: Grappa Bassano £16 Vin Santo £18 or Espresso £12</i></li>
    </ul>

   <h1> Dolci £12 </h1>
   <ul>
    <li>Chocolate Nemesis</li>
    <li>Lemon Tart</li>
    <li>Almond Tart with Strawberries</li>
    <li>Summer Pudding with Valpolicella</li>
    <li>Pannacotta with Grappa and Raspberries</li>
    </ul>
    
    <h1>I Formaggi – From our Cheese Room</h1>
    <ul>
    <li>Robiola di Roccaverano – goat’s milk, Piemonte</li>
    <li>Asiago Pressato – cow’s milk, Veneto</li>
    <li>Capretta di Toscano – goat’s milk, Toscana</li>
    <li>Pecorino Sardo Canestrato – sheep’s milk, Sardinia</li>
    <li>Blu di Bufala – blue, buffalo milk, Lombardia</li>
    
     
    
    <li><i>Selection of 3 cheeses £15</i></li>
    <li><i>Selection of 5 cheeses £25</i></li>
    </ul>
    `
    return menu;
}

export {Menu}