function btnClicking (){
    document.querySelector("#dec-btn").addEventListener("click", function(){
        document.querySelector("#decryption").style.display = "block";
        document.querySelector("#encryption").style.display = "none";
        document.querySelector("#dec-btn").style.backgroundColor = "#333";
        document.querySelector("#enc-btn").style.backgroundColor = "#222";
        document.querySelector("#arrowIcon").style.rotate = "180deg";
        document.querySelector("#result").style.display = "none";

        var res = document.getElementById("res");
        res.innerHTML = "";
    })

    document.querySelector("#enc-btn").addEventListener("click", function(){
        document.querySelector("#decryption").style.display = "none";
        document.querySelector("#encryption").style.display= 'block';
        document.querySelector("#dec-btn").style.backgroundColor = "#222";
        document.querySelector("#enc-btn").style.backgroundColor = "#333";
        document.querySelector("#arrowIcon").style.rotate = "-360deg";
        document.querySelector("#result").style.display = "none";
    })

    document.querySelector("#enc-btn").click();
}
btnClicking();

// Encryption Logic
function encryption(){
    var clutter = ""
    document.querySelector("#encrypt-btn").addEventListener("click", function(){
        // Getting text as input
        var input = document.getElementById("txtmsg").value;
        console.log(input);

        if(document.getElementById("txtmsg").value){
            document.querySelector("#result").style.display = "block";
            document.querySelector(".copyButton").style.display = "block";
        }
        else{
            alert("Please enter any text to encrypt");
        }

        //Getting password as input
        var password = document.getElementById("password").value;
        console.log(password);


        const str = input.split("");
        console.log(str);


        // Converting into emojis
        str.forEach(element => {
            clutter += `&#128${element.charCodeAt()} `;
        });
        console.log(clutter);

        var res = document.getElementById("res");
        res.innerHTML = clutter;
        
        document.querySelector("#result").innerHTML = clutter;


        var dataarr = [];

        if(JSON.parse(localStorage.getItem('data1'))){
            JSON.parse(localStorage.getItem('data1'))
            dataarr.push({"pass":password, "input":input, "clutter":clutter})
        }
        else{
            dataarr = ({"pass":password, "input":input, "clutter":clutter})

        }
        localStorage.setItem("data1", JSON.stringify(dataarr))
    })
}
encryption();


// Decryption Logic
function decryption() {
    document.querySelector("#decrypt-btn").addEventListener("click", function() {

        document.querySelector("#result").style.display = "block";

        var clutter2 = "";

        // Getting encrypted message
        var input2 = document.querySelector("#emojimsg").value;
        // Getting Password
        var pass2 = document.querySelector("#finalpassword").value;

        var user = JSON.parse(localStorage.getItem('data1'));
        console.log("USER", user);

        var str2 = input2.split(" ");
        str2.forEach(element => {
            clutter2 += `&#${element.codePointAt(0)} `;
        });
        let duplicatClt2 = clutter2;
        console.log("clutter2", duplicatClt2);

        var found;
        for (let i of user) {
            if (i.clutter === duplicatClt2) {
                found = i;
                console.log(i);
                break;
            }
        }
        console.log("FOUND", found);

        if (found) {
            // Password Checking
            if (found.pass === pass2 && found.clutter === duplicatClt2) {
                document.querySelector("#wrongResult").style.display = "none";
                document.querySelector("#result").style.display = "block";
                document.querySelector("#result").innerHTML = found.input;
            } else {
                document.querySelector("#result").style.display = "none";
                document.querySelector("#wrongResult").style.display = "block";
                document.querySelector("#wrongResult").innerHTML = "Wrong Password";
            }
        } else {
            document.querySelector("#result").style.display = "none";
            document.querySelector("#wrongResult").style.display = "block";
            document.querySelector("#wrongResult").innerHTML = "Message not found or Incorrect Input";
        }

    });

    
}
decryption();


// Copy button Logic
document.querySelector("#copyButton").addEventListener("click", function() {
    var copyText = document.querySelector("#result").value.trim();
    if (copyText) {
        navigator.clipboard.writeText(copyText);
    } else {
        alert("No content to copy.");
    }
});