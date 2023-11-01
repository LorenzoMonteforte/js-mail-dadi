// Array utenti registrati
const utenti = [["lorenzomonteforte@gmail.com", "lormon123"], ["alessiomonteforte@gmail.com", "alemon123"], ["andreamonteforte@gmail.com", "andmon123"]];
// Click bottone accedi
const accedi = document.getElementById("accedi");
accedi.addEventListener("click", function(){
    // Input email e password utente
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    // Verifico che l'utente abbia compilato i campi
    if(!(email=="" || password=="")){
        // Verifico se l'utente è registrato
        let puoiAccedere = false;
        for(let i=0; i<utenti.length; i++){
            if(email==utenti[i][0]){
                puoiAccedere = true;
                if(password==utenti[i][1]){
                    console.log("Accesso effettuato. Benvenuto " + utenti[i][0]);
                }else{
                    console.log("Password errata. Riprova");
                }
            }
        }
        if(puoiAccedere==false){
            console.log("Impossibile accedere. Utente non registrato");
        }
    }else{
        if(email=="" && password==""){
            console.log("Errore. Assicurati di aver compilato entrambi i campi");
        }else if(email==""){
            console.log("Errore. Assicurati di aver compilato il campo dell'email");
        }else if(password==""){
            console.log("Errore. Assicurati di aver compilato il campo della password");
        }
    }
})