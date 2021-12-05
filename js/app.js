const userInput = document.querySelector("#user-input");
const translateBtn = document.querySelector(".translate-btn");
const outputBox = document.querySelector(".translated-text");


const URL = "https://api.funtranslations.com/translate/ferb-latin.json";

function constructUrl(text) {
    urlString = URL+'?'+ "text=" + text;
    return urlString;
}

const translateText = () => {
  const userText = userInput.value;


  if (userText == "") {
    alert("Text is empty, please enter something");
  } 
  else {
    const urlString = constructUrl(userText);
    console.log(urlString);

    fetch(urlString)
      .then((response) => response.json())
      .then((data) => {
        const translatedText = data.contents.translated;
        outputBox.innerHTML = translatedText;
      })
      .catch(e => {
        alert(`error occured: ${e}. \nTry again after some time.`);});
  }
};

translateBtn.addEventListener("click", translateText);