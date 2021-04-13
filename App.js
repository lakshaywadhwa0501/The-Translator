var inputtext=document.querySelector("#input");
var buttonclick=document.querySelector("#button");
var outputshow=document.querySelector("#output");

var ServerURL="https://api.funtranslations.com/translate/minion.json"
function getTranslationURL(text){
  return ServerURL + "?" + "text=" + text
}

function errorHandler(error){
    console.log("error occurred",error)
    alert("Something Wrong with the Server, Try Again After sometime")
}

function clickHandler(){
    var txtInput=inputtext.value;

    fetch(getTranslationURL(txtInput))
    .then(response => response.json())
    .then(json => {
        
       var translatedtext=json.contents.translated;
       outputshow.innerText=translatedtext;
    })
    .catch(errorHandler)
}

buttonclick.addEventListener("click",clickHandler)