console.log('-----mail-----')

// dichiarazioni variabili
const mailList = [
  "tonio.cartonio@mail.it", 
  "ciccio.pasticcio@mail.it", 
  "pippo.baudo@mail.it", 
  "aieie.brazzof@mail.it"
]
const userMail = parseInt(prompt(`Inserisci la tua email`))

// ciclo "for" per controllare se la mail inserita è presente nel array

for(let i=0; i<mailList.length; i++){
  if(mailList[i] === userMail){
console.log(`Email valida. L'utente potrà prendere parte all'evento.`)
  }
  else{
    console.log(`Email non valida. L'utente non potrà prendere parte all'evento.`)
  }
}