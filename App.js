var inputtext=document.querySelector("#input");
var buttonclick1=document.querySelector("#button1");
var outputshow=document.querySelector("#output");

var ServerMinion="https://api.funtranslations.com/translate/minion.json"
function getTranslationURL1(text){
  return ServerMinion + "?" + "text=" + text
}


function errorHandler(error){
    console.log("error occurred",error)
    alert("Something Wrong with the Server, Try Again After sometime")
}

function clickHandler1(){
    var txtInput=inputtext.value;

    fetch(getTranslationURL1(txtInput))
    .then(response => response.json())
    .then(json => {
        
       var translatedtext=json.contents.translated;
       outputshow.innerText=translatedtext;
    })
    .catch(errorHandler)
}

buttonclick1.addEventListener("click",clickHandler1)