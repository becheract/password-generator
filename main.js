function generatePassword() {
    //create a variable for the password
    let generatedPassword = "";
    //get the values of the boxes 
    let pLength = document.getElementById("passwordLength").value;
    let symbols = document.getElementById("symbols").value;
    let numbers = document.getElementById("numbers").value;
    let lowercase = document.getElementById("lowercase").value;
    let uppercase = document.getElementById("uppercase").value;
    
    //pick number randomly 
    //and round it down
    //values can only be between 0-9
    for (let x = 0; x < pLength; x++) {
        console.log(Math.floor(Math.random() * 10));
        
        //math random for the amount of options +1
            let num = Math.floor(Math.random() * 5);
            console.log(num);
        //if number equals to one then pick a random symbol
        if(num == 1){
            let symbolsPossible = "~`!@#$%^&*()-_=+{}[];:'\\|,<.>/?\"\"";
            generatedPassword += symbolsPossible.charAt(Math.floor(Math.random() * symbolsPossible.length));
            console.log(generatedPassword);
        }else if(num ==2){

        }else if(num==3){

        }else if(num==4)[
            
        ]
        
    }
   
}   

generatePassword();