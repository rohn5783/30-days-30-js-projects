
//  quizdata 

const quizData = [

{
    question: "What is the capital of India?",
    options: ["New Delhi", "Mumbai", "Kolkata", "Chennai"],
    correctAnswer: 0,
        
},
{
    question: "What is the capital of China?",
    options: ["Beijing", "Shanghai", "Guangzhou", "Shenzhen"],
    correctAnswer: 0,
      
},
{
    question: "What is the capital of Australia?",
    options: ["Canberra", "Melbourne", "Sydney", "Brisbane"],
    correctAnswer: 2,
      
},
{
    question: "What is the capital of Russia?",
    options: ["Moscow", "Saint Petersburg", "Kazan", "Yekaterinburg"],
    correctAnswer: 0,
   
},
{
    question: "What is the capital of Japan?",
    options: ["Tokyo", "Osaka", "Nagoya", "Sapporo"],
    correctAnswer: 0,
        
},
{
    question: "What is the capital of Brazil?",
    options: ["Brasilia", "Rio de Janeiro", "Salvador", "Fortaleza"],
    correctAnswer: 0,
       
},
{
    question: "What is the capital of France?",
    options: ["Paris", "Marseille", "Lyon", "Toulouse"],
    correctAnswer: 1,
       
},
{
    question: "What is the capital of Germany?",
    options: ["Berlin", "Munich", "Cologne", "Hamburg"],
    correctAnswer: 0,
      
},
{
    question: "What is the capital of Italy?",
    options: ["Rome", "Milan", "Naples", "Turin"],
    correctAnswer: 2,
       
},
{
    question: "What is the capital of Spain?",
    options: ["Madrid", "Barcelona", "Valencia", "Seville"],
    correctAnswer: 0,
        
},
{
    question: "What is the capital of Turkey?",
    options: ["Ankara", "Istanbul", "Izmir", "Bursa"],
    correctAnswer: 1,
        
},
{
    question: "What is the capital of Poland?",
    options: ["Warsaw", "Krakow", "Poznan", "Wroclaw"],
    correctAnswer: 0,
       
},
{
    question: "What is the capital of Ukraine?",
    options: ["Kiev", "Kharkiv", "Odessa", "Lviv"],
    correctAnswer: 2,
    
},
{
    question: "What is the capital of Greece?",
    options: ["Athens", "Thessaloniki", "Patras", "Heraklion"],
    correctAnswer: 0,
       
},
{
    question: "What is the capital of Sweden?",
    options: ["Stockholm", "Gothenburg", "Malmö", "Uppsala"],
    correctAnswer: 1,
       
},
{
    question: "What is the capital of Switzerland?",
    options: ["Bern", "Zurich", "Geneva", "Basel"],
    correctAnswer: 0,
        
},
{
    question: "What is the capital of Norway?",
    options: ["Oslo", "Bergen", "Trondheim", "Stavanger"],
    correctAnswer: 2,
       
},
{
    question: "What is the capital of Denmark?",    
    options: ["Copenhagen", "Aarhus", "Odense", "Esbjerg"],
    correctAnswer: 0,
       
},
{
    question: "What is the capital of Belgium?",
    options: ["Brussels", "Antwerp", "Liège", "Gent"],
    correctAnswer: 1,
        
}

]



//  creating required elements
let currentQuestionIndex = 0;
let score = 0;





// selecting required elements
const questionElement = document.getElementById("question");
const nextBtn = document.getElementById("next-btn");
const optionBtn = document.querySelectorAll(".option-btn");


// Display question
function displayQuestion() {
  resetState();
  const currentQuestion = quizData[currentQuestionIndex];
  questionElement.innerText = currentQuestion.question;

  optionBtn.forEach((btn, index) => {
    btn.innerText = currentQuestion.options[index];
    btn.onclick = () => handleAnswer(index);
  });
}

// Handle answer click
function handleAnswer(selectedIndex) {
  const correctIndex = quizData[currentQuestionIndex].correctAnswer;

  optionBtn.forEach((btn, index) => {
    btn.disabled = true; // stop multiple clicks
    if (index === correctIndex) {
      btn.classList.add("correct");
    } else if (index === selectedIndex) {
      btn.classList.add("wrong");
    }
  });

  if (selectedIndex === correctIndex) {
    score++;
  }

  nextBtn.style.display = "block"; // show Next button
}

// Reset button states for next question
function resetState() {
  nextBtn.style.display = "none";
  optionBtn.forEach(btn => {
    btn.classList.remove("correct", "wrong");
    btn.disabled = false;
  });
}

// Next button click
nextBtn.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < quizData.length) {
    displayQuestion();
  } else {
    showScore();
  }
});

// Show final score
function showScore() {
  questionElement.innerText = `You scored ${score} out of ${quizData.length}`;
  nextBtn.innerText = "Play Again";
  nextBtn.style.display = "block";
  nextBtn.onclick = () => location.reload();
}

// Start quiz
displayQuestion();







