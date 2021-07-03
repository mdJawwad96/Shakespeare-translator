var txtInput = document.querySelector("#txt-input");
var txtOutput = document.querySelector("#txt-output");
var btnTranslate = document.querySelector("#btn")

var serverURL = "https://api.funtranslations.com/translate/shakespeare.json";

function getTranslationUrl(text) {
    return serverURL + "?" + "text=" + text; 
}

function handlingErrors(error) {
    alert("Oops somethings is wrong, try after sometime", error)
}

function clickEventHandler() {
    var inputText = txtInput.value;

    fetch(getTranslationUrl(inputText))
        .then(response => response.json())
        .then(json => {
           var translatedText = json.contents.translated;
           txtOutput.innerText = translatedText;
        })
        .catch(handlingErrors);
}

btnTranslate.addEventListener("click", clickEventHandler())

