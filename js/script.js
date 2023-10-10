const generate = document.getElementById("generate");

generate.addEventListener('click', 
    function(generateTicket) {
        console.log('salkdha')
        generateTicket.preventDefault();
        const nome = document.querySelector("#nome").value;
        const dist = document.querySelector("#dist").value;
        const age = document.querySelector("#age").value;

        if(nome === "" || dist === "" || age === ""){
            alert('Tutti i campi vanno compilati');
            window.location.reload();
        }

        const carrozza = getRndInteger(1 , 10);
        const code = getRndInteger(10000 , 99999);

        const ticketPrice = 0.21;
        const overDiscount = 0.6;
        const minorenniDiscount = 0.8;

        totPrice = ticketPrice * dist;

        if(age === 'minorenne'){
            totPrice = totPrice * minorenniDiscount;
        }

        if(age === 'over'){
            totPrice = totPrice * overDiscount;
        }
        
        document.getElementById('my-ticket').classList.remove("d-none");

        document.getElementById('nome-passeggero').innerHTML = nome ;
        document.querySelector('td:nth-child(2)').innerHTML = carrozza ;
        document.querySelector('td:nth-child(3)').innerHTML = code ;
        document.querySelector('td:last-child').innerHTML = '€ ' + totPrice.toFixed(2);
    }
)

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

