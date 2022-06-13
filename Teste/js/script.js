let result = document.getElementById("result");
let conteudo = document.getElementById("conteudo");
let cl = document.getElementById("submit");
let cl2 = document.getElementById("again");




function kd() {
    let nk = document.getElementById("nick").value;
    let kd1 = document.getElementById("kills").value;
    let kd2 = document.getElementById("deaths").value;
    let kd3 = kd1 / kd2
    let total = kd3.toFixed(2)

    // Shows a different message according to your kd.
    
    if (total <= 1.00) {
        result.innerHTML = "<p> Your KD is: " + total + "</p>" + nk + "." + " You're not worth the ration we ate!";
    }

    else if (total > 1.00 && total <= 2.00) {
        result.innerHTML = "<p> Your KD is: " + total + "</p>" + "Mediocre, " + nk + "! " + "MEDIOCRE!!";
    }

    else if (total > 2.00 && total <= 4.00) {
        result.innerHTML = "<p> Your KD is: " + total + "</p>" + " Very good " + nk + ", you're above average.";
    }

    else if (total > 4.00 && total <= 6.00) {
        result.innerHTML = "<p> Your KD is: " + total + "</p>" + " Hmm . . . " + nk + " you're a promising soldier.";
    }

    else if (total > 6.00 && total <= 10.00) {
        result.innerHTML = "<p> Your KD is: " + total + "</p>" + " You're the best of squad. Congrats " + nk + "!";
    }

    else {
        result.innerHTML = "<p> Your KD is: " + total + "</p>" + nk + ". " + " You're legend!"; 
    }


// Change the display, to show the result.
    
    result.style.marginTop = "20px";
    result.style.display = "block";
    conteudo.style.display = "none";
    cl.style.display = "none";
    cl2.style.display = "block";

}

// Checks if the inputs are filled. If they are, execute the "kd" function.
cl.addEventListener("click", () => {
    let nk = document.getElementById("nick").value;
    let kd1 = document.getElementById("kills").value;
    let kd2 = document.getElementById("deaths").value;
    
    if (nk == "") {
        alert("Please insert your nickname.");
    }
    
    else if (kd1 == "") {
        alert("Please insert your number of kills.");
    }

    else if (kd2 == "") {
        alert("Please insert your number of deaths.");
    }

    else {
        kd();
    }
})

// change the display back to initial state.
cl2.addEventListener("click", () =>{
    
    result.style.display = "none";
    conteudo.style.display = "block";
    cl.style.display = "block";
    cl2.style.display = "none";
    
})












