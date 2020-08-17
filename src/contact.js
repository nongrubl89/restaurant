const Contact=()=>{
    const contact = document.createElement('div');
    contact.className='contact';
    contact.innerHTML= 
    `
   <h1 id = 'name'> The River Cafe</h1>
<p id = 'address'>Thames Wharf<br>
Rainville Rd, London W6 9HA<br>
+44 (0)20 7386 4200<br>

info@rivercafe.co.uk</p>

<h1 id = 'directionsHeader'>Getting to The River Cafe</h1>
<p id='directions'>Tube: Hammersmith<br>
Parking: Pay and display in surrounding streets<br>
Valet Parking: Available in the evenings,<br>
Saturday & Sunday lunch<br></p>
 <a id='map' href='https://www.google.co.uk/maps/place/The+River+Caf%C3%A9/@51.484051,-0.224292,15z/data=!4m2!3m1!1s0x48760fb010bf16c7:0x26a2eb12ed316c17' target='_blank'>Open location in Google Maps</a>

    <iframe id= 'google' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2484.592046105253!2d-0.22641398451743036!3d51.48400212023512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760fb010bf16c7%3A0x26a2eb12ed316c17!2sThe%20River%20Caf%C3%A9!5e0!3m2!1sen!2sus!4v1597093619010!5m2!1sen!2sus" 
    width="400" height="400" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
    `
    return contact;
}

export {Contact}