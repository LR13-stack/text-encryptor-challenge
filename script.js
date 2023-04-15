//funtion for encrypting the message
function encrypt() {
    let text = document.getElementById("text").value;
    let result = "";

    for (let i = 0; i < text.length; i++) {
        let letter = text.charAt(i);

        if (letter == "e") {
            letter = "enter";
        } else if (letter == "i") {
            letter = "imes";
        } else if (letter == "a") {
            letter = "ai";
        } else if (letter == "o") {
            letter = "ober";
        } else if (letter == "u") {
            letter = "ufat";
        }

        result += letter;
    }

    document.getElementById("result").innerHTML = result;
}

//funtion for decrypting the message
function decrypt() {
    let text = document.getElementById("text").value;
    let result = "";

    for (let i = 0; i < text.length; i++) {
        let letter = text.charAt(i);

        if (letter == "e") {
            letter = "e";
            i += 4;
        } else if (letter == "i") {
            letter = "i";
            i += 3;
        } else if (letter == "a") {
            letter = "a";
            i += 1;
        } else if (letter == "o") {
            letter = "o";
            i += 3;
        } else if (letter == "u") {
            letter = "u";
            i += 3;
        }

        result += letter;
    }

    document.getElementById("result").innerHTML = result;
}

//funtion for copy the text area to clip
function copyToClip() {
    var copyText = document.getElementById("result");
    copyText.select();
    document.execCommand("copy");
    alert("¡Texto copiado al portapapeles!");
}

function validate() {
    var text = document.getElementById("text");
    //regular expression allowing only lowercase letters and whitespace
    var record = /^[a-z\s]*$/;

    //input of an invalid letter or character is detected
    if (!record.test(text.value)) {
        alert("¡No se permiten letras mayúsculas, letras acentuadas y caracteres especiales!");
        text.value = text.value.substring(0, text.value.length - 1);
    }
}