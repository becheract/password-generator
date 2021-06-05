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
        
        //math random for the amount of options +1
            let num = Math.floor(Math.random() * 4);
            console.log(num);
        //if number equals to one then pick a random symbol
        //get values of checkboxes
        let checkboxSymbol = document.getElementById("symbols").value;
        let checkboxNum = document.getElementById("numbers").value;
        let checkboxLower = document.getElementById("lowercase").value;
        let checkboxUpper = document.getElementById("uppercase").value;
        
        //if the checkbox is checked
        
        if(num == 0){
            let symbolsPossible = "~`!@#$%^&*()-_=+{}[];:'\\|,<.>/?\"\"";
            generatedPassword += symbolsPossible.charAt(Math.floor(Math.random() * symbolsPossible.length));
        }
   
        
        if(num == 1){
            let numbersPossible = "1234567890";
            generatedPassword += numbersPossible.charAt(Math.floor(Math.random() * numbersPossible.length));
        }
   
        
        if(num==2){
            let lowercasePossible = "abcdefghijklmnopqrstuvwxyz";
            generatedPassword += lowercasePossible.charAt(Math.floor(Math.random() * lowercasePossible.length));
        }
      
            
            if(num==3){
            let uppercasePossible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            generatedPassword += uppercasePossible.charAt(Math.floor(Math.random() * uppercasePossible.length));
        }
   
    }
    console.log(generatedPassword);
    console.log(generatedPassword.length);
    let txtpass = document.getElementById("generated-pass").value = generatedPassword;
}   

