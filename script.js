const inputDate = document.querySelector(".inputdate").Value
const soumettre = document.querySelector(".soumettre")
const inputMot = document.querySelector(".inputmot")

soumettre.addEventListener("submit", envoyer())

function envoyer (){
    const aujoudhui = new Date ()
    let age = aujoudhui.getFullYear() - inputDate.getFullYear()
    console.log( age )
    if( age < 18 ){
        alert("Désolé, vous n'avez pas l'age requis")
    }
    
}



//function envoyer(){
 //   Event.preventDefault(); 
 //   console.log(inputDate.value)
//}
