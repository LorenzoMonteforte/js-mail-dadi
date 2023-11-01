let giochiamo = document.getElementById("giochiamo");
giochiamo.addEventListener("click", function(){
    let pc = Math.trunc(Math.random()*6+1);
    let utente = Math.trunc(Math.random()*6+1);
    console.log("PC: " + pc);
    console.log("Utente: " + utente);
    if(pc>utente){
        console.log("Spiacente... ho vinto io");
    }else if(pc<utente){
        console.log("Complimenti! Hai vinto tu");
    }else if(pc==utente){
        console.log("Uguale. Rigiochiamo!");
    }
})