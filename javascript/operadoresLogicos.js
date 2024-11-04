function mayorMenor(num){
    if(num > 5 && num < 10 && num % 2 ===0) console.log (true);
    else console.log (false); 
};

mayorMenor(2);
mayorMenor(8);

function operadorOr(str){
    if (str === "Henry" || str.lenght <2) console.log(true);
};

operadorOr("Henry");

function negacion (permiso){
    if (permiso !== true) console.log("Tiene permiso");
};

negacion (false);


function condicionCompleja(num){
    if(num > 9 && num %2 === 0 || num === 3) console.log (true)
    else console.log(false);
};

condicionCompleja(10);
condicionCompleja(6);
condicionCompleja(3);
condicionCompleja(5);