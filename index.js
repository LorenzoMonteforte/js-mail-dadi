// Array utenti registrati
const utenti = [["lorenzomonteforte@gmail.com", "lormon123"], ["alessiomonteforte@gmail.com", "alemon123"], ["andreamonteforte@gmail.com", "andmon123"]];
// Click bottone registrati
const registrati = document.getElementById("registrati");
registrati.addEventListener("click", function(){
    // Input email e password utente (registrati)
    const emailReg = document.getElementById("emailReg").value;
    const emailRegCon = document.getElementById("emailRegCon").value;
    const passwordReg = document.getElementById("passwordReg").value;
    const passwordRegCon = document.getElementById("passwordRegCon").value;
    // Verifico che l'utente abbia compilato i campi (registrati)
    if(!(emailReg=="" || emailRegCon=="" || passwordReg=="" || passwordRegCon=="")){
        // Verifico che le email e le password corrispondano
        if(emailReg==emailRegCon && passwordReg==passwordRegCon){
            let puoiRegistrarti = true;
            for(let i=0; i<utenti.length; i++){
                if(emailReg==utenti[i][0]){
                    puoiRegistrarti = false;
                    console.log("Errore. Email già in uso");
                }
            }
            if(puoiRegistrarti==true){
                utenti.push([emailReg, passwordReg]);
                console.log("Registrazione avvenuta con successo");
            }
        }else{
            if(emailReg!=emailRegCon && passwordReg!=passwordRegCon){
                console.log("Errore. Sia le email che le password non coincidono");
            }else if(emailReg!=emailRegCon){
                console.log("Errore. Le email non coincidono");
            }else if(passwordReg!=passwordRegCon){
                console.log("Errore. Le password non coincidono");
            }
        }
    }else{
        console.log("Errore. Assicurati di aver compilato tutti i campi");
    }
})
// Click bottone accedi
const accedi = document.getElementById("accedi");
accedi.addEventListener("click", function(){
    // Input email e password utente (accedi)
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    // Verifico che l'utente abbia compilato i campi (accedi)
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