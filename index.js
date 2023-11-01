// Array utenti registrati
const utenti = ["lorenzomonteforte@gmail.com", "alessiomonteforte@gmail.com", "andreamonteforte@gmail.com"];
// Click bottone accedi
const accedi = document.getElementById("accedi");
accedi.addEventListener("click", function(){
    // Input email utente
    const email = document.getElementById("email").value;
    // Verifico se l'utente è registrato
    let puoiAccedere = false;
    for(let i=0; i<utenti.length; i++){
        if(email==utenti[i]){
            puoiAccedere = true;
            console.log("Accesso effettuato. Benvenuto " + utenti[i]);
        }
    }
    if(puoiAccedere==false){
        console.log("Impossibile accedere. Utente non registrato");
    }
})