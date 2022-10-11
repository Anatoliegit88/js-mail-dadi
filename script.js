// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

// chiedi all'utente la sua email
const userEmail = prompt("Inserisci la tua email");
// creare la lista email
const emails = [
  "pippo@gmail.com",
  "pluto@gmail.com",
  "giorgio@gmail.com",
  "giovanni@gmail.com",
  "giggi@gmail.com",
];
// controlla se la email e presente nella lista

const emailFound = false;

for (let i = 0; i < emails.length; i++) {
  const currentEmail = emails[i];
  if (currentEmail === userEmail) {
    emailFound = true;
  }
}

// stampa il messaggio
if (emailFound) {
  alert("Ok, puoi entrare.");
} else {
  alert("Ci dispiace, email non presente nella lista");
}
