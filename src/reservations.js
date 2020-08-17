const Reserve=()=>{
    const reservations = document.createElement('div');
    reservations.innerHTML= 
    `
        <p id ='tock'> To make a reservation, please visit us on Tock </p>
    `
    return reservations;
}

export {Reserve}