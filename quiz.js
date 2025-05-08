const quizData = [
    {
      question: "What does HTML stand for?",
      options: [
        "HyperText Markdown Language",
        "HyperText Markup Language",
        "HyperTool Multi Language",
        "Home Tool Markup Language"
      ],
      correct: 1
    },
    {
      question: "Which language is used to style web pages?",
      options: ["HTML", "Python", "JavaScript", "CSS"],
      correct: 3
    },
    {
      question: "Which is used to fetch data from an API?",
      options: ["fetch()", "getData()", "require()", "include()"],
      correct: 0
    }
  ];
  
  let currentIndex = 0;
  const questionEl = document.getElementById("question");
  const answerList = document.getElementById("answer-list");
  const nextBtn = document.getElementById("next-btn");
  
  function loadQuestion() {
    const current = quizData[currentIndex];
    questionEl.textContent = current.question;
    answerList.innerHTML = "";
    nextBtn.disabled = true;
  
    current.options.forEach((option, idx) => {
      const li = document.createElement("li");
      li.textContent = option;
      li.onclick = () => selectAnswer(li, idx, current.correct);
      answerList.appendChild(li);
    });
  }
  
  function selectAnswer(selectedLi, selectedIndex, correctIndex) {
    const items = answerList.children;
    for (let i = 0; i < items.length; i++) {
      items[i].onclick = null;
      if (i === correctIndex) {
        items[i].classList.add("correct");
      } else if (i === selectedIndex) {
        items[i].classList.add("incorrect");
      }
    }
    nextBtn.disabled = false;
  }
  
  nextBtn.onclick = () => {
    currentIndex++;
    if (currentIndex < quizData.length) {
      loadQuestion();
    } else {
      questionEl.textContent = "✅ You've completed the quiz!";
      answerList.innerHTML = "";
      nextBtn.style.display = "none";
    }
  };
  
  loadQuestion();
  