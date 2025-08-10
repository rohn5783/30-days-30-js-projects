// selecting the necessary elements

const paragraphBox = document.querySelector("#paragraphBox");
const inputArea = document.querySelector("#inputArea");
const start = document.querySelector("#startBtn");
const Reset = document.querySelector("#ResetBtn");
const timerDisplay = document.querySelector("#timer");
const wpmDisplay = document.querySelector("#wpm");
const submit = document.querySelector("#submitBtn");
const accuracy = document.querySelector("#accuracy");

//  paragraph list

const paragraphList = [
  "Radhe Radhe",
  "Hare Krishna",
  "Jai Shri Ram",
  "Har Har Mahadev",
  "Radhey Krishna",

];

//  function to display the paragraph
displayParagraph = () => {
  const randomIndex = Math.floor(Math.random() * paragraphList.length);
  const selectedParagraph = paragraphList[randomIndex];
  paragraphBox.innerText = selectedParagraph;
  enabled();
  startTime();
  calculateAccuracy();
};
start.addEventListener("click", displayParagraph);

//  Reset button functionality
Reset.addEventListener("click", function () {
  disabled();
  stopTime();
  deleteWpm();
  deleteAccuracy();
});

//  enabling the input area

enabled = () => {
  inputArea.disabled = false;
  inputArea.focus();
  inputArea.value = "";
};

//  disabling the input area
disabled = () => {
  inputArea.disabled = true;
  inputArea.value = "";
  paragraphBox.innerText = "Click 'Start Test' to begin.";

}

//  time calculation

let time = 0;
let timer = null;

const startTime = () => {
  time = 0;
  timerDisplay.textContent = "0s";
  timer = setInterval(() => {
    time += 1;
    timerDisplay.innerText = `${time}` + "s";
  }, 1000);
};
//  timer stop function
function stopTime() {
  timerDisplay.innerText = "0s";

  clearInterval(timer);
 
}
//  formula to calculate wpm

calculateWpm = () => {
  const typedText = inputArea.value;
 const  wpm = Math.round((typedText.length / time));
  wpmDisplay.innerText = wpm;

}
submit.addEventListener("click", calculateWpm);

//  deleting the wpm value
deleteWpm = () => {
  wpmDisplay.innerText = "";
};


//  function to calculate Accuracy 
calculateAccuracy = () => {
  const originalText = paragraphBox.innerText.trim();
  const typedText = inputArea.value.trim();

  let correctChars = 0;
  const minLength = Math.min(originalText.length, typedText.length);

  for (let i = 0; i < minLength; i++) {
    if (originalText[i] === typedText[i]) {
      correctChars++;
    }
  }

  const accuracyPercent = (correctChars / typedText.length) * 100 || 0;
  accuracy.innerText = `${accuracyPercent.toFixed(2)}%`;
};
//  deleting the accuracy value
deleteAccuracy = () => {
  accuracy.innerText = "";
};
