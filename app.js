var txtInput = document.querySelector("#txt-input");
var txtOutput = document.querySelector("#txt-output");
var btnTranslate = document.querySelector("#btn")

var serverURL = "https://api.funtranslations.com/translate/shakespeare.json";

function getTranslationUrl(text) {
    return serverURL + "?" + "text=" + text; 
}

