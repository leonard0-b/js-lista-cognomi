// Lista Cognomi
// Chiedere all’utente il cognome
// inserirlo in un array con altri cognomi: ‘Bianchi’, ‘Rossi’, ‘Perlari’, ‘Lodigiani’, 'Mastrobattista', ‘Verdi’
// stampa la lista ordinata alfabeticamente
// scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova

// chiedi il cognome🐱‍👤
var cognome = prompt("Dammi il tuo cognome");

// prima lettera maiuscola🐱‍👤
cognome = cognome[0].toUpperCase() + cognome.substring(1);
console.log(cognome);

// crea array con i cognomi🐱‍👤
var listaCognomi = ["Bianchi", "Rossi", "Perlari", "Lodigiani", "Mastrobattista", "Verdi"];

// se cognome non è un numero pushalo nella listaCognomi e stampalo in ordine alfabetico🐱‍👤
if (isNaN(cognome)) {
  listaCognomi.push(cognome);
  console.log(listaCognomi.sort());
// se cognome è un numero esce alert🐱‍👤
} else {
  alert("Non mi hai dato un cognome!");
}

// crea ciclo while dove la variabile è 0 e la condizione i minore della lunghezza array
// ad ogni ciclo stampa nel documento html🐱‍👤
i = 0;

while (i < listaCognomi.length) {
  document.getElementById('lista').innerHTML += "<li>" + listaCognomi[i] + "</li>";
  i++;
}

// stampa posizione del cognome nell'array in posizione "umana" (+1) 🐱‍👤
document.getElementById("posizione").innerHTML = "Il tuo cognome è in posizione: " + (listaCognomi.indexOf(cognome) + 1);
