const generate = document.getElementById("generate");

generate.addEventListener('click', 
    function() {
        const nome = document.querySelector("#nome").value;
        const dist = document.querySelector("#dist").value;
        const age = document.querySelector("#age").value;

        const carrozza = getRndInteger(1 , 10);
        const code = getRndInteger(10000 , 99999);
        console.log(carrozza)
        console.log(code)
    }
)

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }