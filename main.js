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
        console.log(`The length of the pass word is ${pLength}`);
        //math random for the amount of options +1
            let num = Math.floor(Math.random() * 4);
            console.log(num);
        //if number equals to one then pick a random symbol
        //get values of checkboxes
        let checkboxSymbol = document.getElementById("symbols").checked;
        let checkboxNum = document.getElementById("numbers").checked;
        let checkboxLower = document.getElementById("lowercase").checked;
        let checkboxUpper = document.getElementById("uppercase").checked;
        
  
        
        //if the checkbox is checked
        if(num == 0){
            console.log(checkboxSymbol);
            //if true then run code below
            if(checkboxSymbol == true){
                //number of possibilities
                let symbolsPossible = "~`!@#$%^&*()-_=+{}[];:'\\|,<.>/?\"\"";
                //append it to the password
                generatedPassword += symbolsPossible.charAt(Math.floor(Math.random() * symbolsPossible.length));
            }
            
            //check if checkbox is false
            else if (checkboxSymbol == false){
                console.log("does this work?");
            //if false then return and loop again
            let newNum = Math.ceil(Math.random() * 3);
            console.log(`generated new number is ${newNum}`);
            
        }
        
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
    //show the password
    console.log(generatedPassword);
    //show the length of the password to make sure that it's generating the correct length
    console.log(generatedPassword.length);
    //send it to the textbox
    let txtpass = document.getElementById("generated-pass").value = generatedPassword;
}   

