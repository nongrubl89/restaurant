const Reserve=()=>{
    const reservations = document.createElement('div');
    reservations.id='tock';
    reservations.innerHTML= 
    `
        <p> To make a reservation, please visit us on Tock </p>
    `
    return reservations;
}

export {Reserve}