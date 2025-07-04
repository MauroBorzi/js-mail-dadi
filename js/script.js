console.log('-----mail-----')

// dichiarazione variabili
const mailList = [
  "tonio.cartonio@mail.it", 
  "ciccio.pasticcio@mail.it", 
  "pippo.baudo@mail.it", 
  "aieie.brazzof@mail.it"
]
const userMail = prompt(`Inserisci la tua email`)
let found = false

// ciclo "for" per controllare se la mail inserita è presente nel array

for(let i = 0; i < mailList.length; i++){
  if(mailList[i] === userMail){
    found = true
  }
}

if(found){
  console.log(`Email valida. L'utente potrà prendere parte all'evento.`)
}
else{
  console.log(`Email non valida. L'utente non potrà prendere parte all'evento.`)
}

console.log('-----dadi-----')

// dichiarazione variabili
 const randomPcNumber = Math.floor(Math.random() * 6) +1
 const randomUserNumber = Math.floor(Math.random() * 6) +1

// regole per determinare il vincitore del lancio
if(randomPcNumber>randomUserNumber){
  console.log(`Pc fa ${randomPcNumber}. Utente fa ${randomUserNumber}. Vince Pc.`)
} 
else if(randomPcNumber<randomUserNumber){
console.log(`Pc fa ${randomPcNumber}. Utente fa ${randomUserNumber}. Vince Utente.`)
}
else{
  console.log(`Pc fa ${randomPcNumber}. Utente fa ${randomUserNumber}. Pareggio.`)
}
