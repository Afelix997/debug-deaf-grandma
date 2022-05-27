let letsContinue = true
let goodByes = 0
while ( letsContinue ) {

    let userInput = prompt()

    if ( userInput == "" ) {
        alert("WHAT!?")
    }
    else if ( userInput == "GOODBYE!" ) {
        goodByes += 1

        if ( goodByes == 1 ) {
            alert("LEAVING SO SOON?")
        }
        else if ( goodByes == 2 ) {
            alert("LATER, SKATER!")
            letsContinue = false
        }
    }
    else if ( userInput.toUpperCase() != userInput ) {
        alert("SPEAK UP, KID!")
    }
    else if ( userInput.toUpperCase() == userInput ) {
        alert('NO, NOT SINCE 1946!') 
   
    }
}