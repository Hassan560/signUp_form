var questionAnswer = [
  {
    question:
      " Q1. What is the difference between an opening tag and a closing tag?",
    answer: "Closing tag has a / in front",
    option: [
      "Opening tag has a / in front",
      "There is no difference",
      "Closing tag has a / in front",
      "none of them",
    ],
  },
  {
    question: " Q2. Where is the meta tag only found?",
    answer: "The home page",
    option: [
      "The last page",
      "The home page",
      "The second page",
      "none of them",
    ],
  },
  {
    question: " Q3. What does HTML stand for?",
    answer: "hyper text markup language",
    option: [
      "hyper text markup language",
      "hot mail",
      "how to make lasgna",
      "none of them",
    ],
  },
  {
    question: " Q4. How many tags are in a regular element?",
    answer: "2",
    option: ["2", "1", "3  ", "none of them"],
  },
  {
    question:
      "  Q5. What is an element that does not have a closing tag called?",
    answer: "Empty element",
    option: ["Tag", "Empty element", "Closed element", "none of them"],
  },
  {
    question: " Q6. Which of the following is an example of an empty element?",
    answer: "< img / >",
    option: ["< img / >", "< img > < / img >", "< / img>  ", "none of them"],
  },
  {
    question: " Q7. What should values always be enclosed in?",
    answer: "Quotation marks",
    option: ["Quotation marks", "Commas", "Parenthesis", "none of them"],
  },
  {
    question: " Q8. Where do all items for the same website need to be saved?",
    answer: "In the same folder",
    option: [
      "In the same folder",
      "Where ever is fine",
      "In different folders",
      "none of them",
    ],
  },
  {
    question:
      " Q9. What is always a welcome page, and explains the purpose or topic of the site?",
    answer: "Homepage",
    option: ["Page 4", "Homepage", "Table of contents", "none of them"],
  },
  {
    question: " Q10. What does View Source do",
    answer:
      "Brings up a note pad with the HTML code already used for the site.",
    option: [
      "Nothing",
      "Brings up a note pad with the HTML code already used for the site.",
      "Opens a new website.",
      "none of them",
    ],
  },
];

function showQuestion(e) {
  var question = document.getElementById("question");
  question.innerHTML = questionAnswer[e].question;

  var optionelement = document.getElementsByClassName("option-element");
  for (var i = 0; i < optionelement.length; i++) {
    optionelement[i].innerHTML = questionAnswer[e].option[i];
  }
}
var questionCount = 0;
var score = 0;

function nextQuestion() {
  var nextQuestion = document.getElementById("nextQuestion");
  writeAnswer(questionCount);
  questionCount++;
  showQuestion(questionCount);
  removeActiveClass();
}
function putActiveClass(e) {
  // var optionelement = document.getElementsByClassName("option-element");
  // console.log(e)
  removeActiveClass();
  e.classList.add("active");
}
function removeActiveClass() {
  var active = document.getElementsByClassName("active");
  for (var x = 0; x < active.length; x++) {
    active[x].classList.remove("active");
  }
}
function writeAnswer(e) {
  var active = document.getElementsByClassName("active");
  if (active[0].innerHTML == questionAnswer[e].answer) {
    score += 10;
    console.log(score);
  }
}
