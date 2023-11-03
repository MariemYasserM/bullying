const questionList = [
  "نوع من انواع التنمر يشتمل استخدام الكلمات السلبية او الشتائم او التحدث بشكل مهين او غير لائق للضحية",
  "زميلك علي كل ما يدخل للفصل الطلاب بيشاوروا عليه و يضحكوا.",
  "ميس لمياء اتريقت علي صاحبك لانه من اصل قومي مختلف",
  "شوفتي زميلتك جني بتستغل ريم بانها تاخد فلوسها بغير رضاها",
];
let score = 0;
let currentQuestionNumberNumber = 0;

const answer1 = document.getElementById("answer1");
const answer2 = document.getElementById("answer2");
const answer3 = document.getElementById("answer3");
const answer4 = document.getElementById("answer4");
const scoreText = document.getElementById("scoreText");
const questionText = document.getElementById("question");
questionText.innerText = questionList[0];

answer1.addEventListener("click", (e) => {
  e.stopPropagation();
  e.preventDefault();
  answer(1);
});

answer2.addEventListener("click", (e) => {
  e.stopPropagation();
  e.preventDefault();
  answer(2);
});

answer3.addEventListener("click", (e) => {
  e.stopPropagation();
  e.preventDefault();
  answer(3);
});

answer4.addEventListener("click", (e) => {
  e.stopPropagation();
  e.preventDefault();
  answer(4);
});

function answer(answer) {
  switch (answer) {
    case 1:
      if (currentQuestionNumber === 0) {
        score++;
      }
      if (currentQuestionNumber === 4) {
        currentQuestionNumber = 0;
        score = 0;
        answer1.innerText = "تنمر لفظي";
        answer2.style.display = "block";
        answer3.style.display = "block";
        answer4.style.display = "block";
        scoreText.style.display = "none";
        questionText.innerText = questionList[currentQuestionNumber];
        return;
      }
      break;

    case 2:
      if (currentQuestionNumber === 2) {
        score++;
      }
      break;

    case 3:
      if (currentQuestionNumber === 1) {
        score++;
      }
      break;

    case 4:
      if (currentQuestionNumber === 3) {
        score++;
      }
      break;
  }
  currentQuestionNumber++;

  if (currentQuestionNumber >= questionList.length) {
    scoreText.innerText = score + "/" + questionList.length;
    scoreText.style.display = "block";
    answer2.style.display = "none";
    answer3.style.display = "none";
    answer4.style.display = "none";
    if (score === 4)
      questionText.innerText =
        "أحسنت! كده انت جاهز، كمل عشان تعرف ازاي تحاربه بقى.";
    else if (score === 3)
      questionText.innerText = "شاطر! بس تقدر تبقى احسن من كده، حاول تاني.";
    else questionText.innerText = "مثير للشفقة، راجع معلوماتك.";

    answer1.innerText = "حاول مرة اخرى";
    return;
  }
  questionText.innerText = questionList[currentQuestionNumber];
}

const infoCountText = document.getElementById("info-count");

let infoCount = 0;

function handleInfoPieceClick() {
  // Get the value of the "data-answer" attribute
  const dataAnswer = this.getAttribute("data-answer");

  if (dataAnswer === "yes") {
    const text = `متخافش، عادي تشارك ${this.innerText} مع صحابك`;
    alert(text);
    this.removeEventListener("click", handleInfoPieceClick);
    this.style.backgroundColor = "gray";
  } else {
    // If data-answer is "no", hide the element
    infoCount--;
    infoCountText.innerText = infoCount
      ? "لسه فاضل " + infoCount
      : "كده تمااااام، احنا في الامان";
    this.style.display = "none";
  }
}

// Get all elements with class "info-piece"
const infoPieces = document.querySelectorAll(".info-piece");

// Iterate through the elements and add click event listeners
infoPieces.forEach((element) => {
  element.addEventListener("click", handleInfoPieceClick);
  if (element.getAttribute("data-answer") === "no") infoCount++;
});
