(function () {
    var myQuestions = [
        {
            question: "Solution is:?",
            answers: {
                a: "Heterogeneous system which consists of two components",
                b: "Heterogeneous system which consists of two or more components and their products",
                c: "Heterogeneous system in which it is impossible to distinguish component parts",
                d: "Homogeneous system which consists of two or more components and their products",
                e: "Homogeneous system which consists of one component"
            },
            correctAnswer: "d"
         },
        {
            question: "Volume fraction of a component in solution is:",
            answers: {
                a: "The ratio between the volume of a solute and total volume of a solution",
                b: "The number of moles of a solute dissolved per liter of a solution",
                c: "The number of moles of a solute dissolved per kilogram of a solvent",
                d: "Number grams of a solute per one milliliter of a solution",
                e: "Quantity gram-equivalent of a solute per one liter of a solution"
            },
            correctAnswer: "a"
         },
        {
            question: "The number of moles of a solute dissolved per liter of a solution",
            answers: {
                a: "The ratio between the volume of a solute and total volume of a solution",
                b: "The number of moles of a solute dissolved per kilogram of a solvent",
                c: "Quantity gram-equivalent of a solute, which is in per one liter of a solution",
                d: "Minding his own business, so stop asking",
                e: "The number of moles of a solute dissolved per liter of a solution"
            },
            correctAnswer: "c"
         },
        {
            question: "Mass concentration, titer is:",
            answers: {
                a: " The number of moles of a solute dissolved per liter of a solution",
                b: "The ratio between the volume of a solute and total volume of a solution",
                c: "Number grams of a solute per one milliliter of a solution",
                d: " The number of moles of a solute dissolved per kilogram of a solvent",
                e: " Quantity gram-equivalent of a solute per one liter of a solution"
            },
            correctAnswer: "c"
         },
        {
            question: "Molarity, or molar concentration is:",
            answers: {
                a: "Quantity gram-equivalent of a solute per one liter of a solution",
                b: "The number of moles of a solute dissolved per kilogram of a solvent",
                c: "The ratio between the volume of a solute and total volume of a solution",
                d: "Number grams of a solute per one milliliter of a solution",
                e: "The number of moles of a solute dissolved per liter of a solution"
            },
            correctAnswer: "e"
         },
        {
            question: "Molality is:",
            answers: {
                a: "Number grams of a solute per one milliliter of a solution",
                b: "The number of moles of a solute dissolved per kilogram of a solvent",
                c: "The ratio between the volume of a solute and total volume of a solution",
                d: "The number of moles of a solute dissolved per liter of a solution",
                e: "Quantity gram-equivalent of a solute per one liter of a solution"
            },
            correctAnswer: "b"
        },

  ];

    function buildQuiz() {
        // we'll need a place to store the HTML output
        var output = [];

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {
            // we'll want to store the list of answer choices
            var answers = [];

            // and for each available answer...
            for (letter in currentQuestion.answers) {
                // ...add an HTML radio button
                answers.push(
                    `<label>
             <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
           </label>`
                );
            }

            // add this question and its answers to the output
            output.push(
                `<div class="slide">
           <div class="question"> ${currentQuestion.question} </div>
           <div class="answers"> ${answers.join("")} </div>
         </div>`
            );
        });

        // finally combine our output list into one string of HTML and put it on the page
        quizContainer.innerHTML = output.join("");
    }

    function showResults() {
        // gather answer containers from our quiz
        var answerContainers = quizContainer.querySelectorAll(".answers");

        // keep track of user's answers
        let numCorrect = 0;

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {
            // find selected answer
            var answerContainer = answerContainers[questionNumber];
            var selector = `input[name=question${questionNumber}]:checked`;
            var userAnswer = (answerContainer.querySelector(selector) || {}).value;

            // if answer is correct
            if (userAnswer === currentQuestion.correctAnswer) {
                // add to the number of correct answers
                numCorrect++;

                // color the answers green
                answerContainers[questionNumber].style.color = "#00B000";
            } else {
                // if answer is wrong or blank
                // color the answers red
                answerContainers[questionNumber].style.color = "red";
            }
        });

        // show number of correct answers out of total
        resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }

    function checkAnswer() {

        // get active slide
        var activeSlides = document.getElementsByClassName('active-slide')[0];

        // active question
        var question = activeSlides.childNodes[1].innerText;

        // active options
        var answers = activeSlides.childNodes[3].childNodes;

        // active slide inputs
        var inputName;

        // selected answer
        var option;

        // correct answer to the question
        var correctAnswer;


        // loop through options
        for (var i = 0; i < answers.length - 1; i++) {

            if (answers[i].nodeName != '#text') {

                // get checked option
                if (answers[i].firstElementChild.checked) {

                    option = answers[i].firstElementChild.value;
                    inputName = answers[i].firstElementChild.name;

                } else {

                    // get input name
                    inputName = answers[i].firstElementChild.name;

                }

            }

        }


        // check if answer is right
        for (var i = 0; i < myQuestions.length; i++) {

            if (question == myQuestions[i].question) {
                if (option == myQuestions[i].correctAnswer) {

                    correctAnswer = myQuestions[i].answers[option];

                    for (var i = 0; i < answers.length - 1; i++) {

                        if (answers[i].nodeName != '#text') {

                            answers[i].style.color = 'red';

                            if (option === answers[i].firstElementChild.value) {

                                answers[i].style.color = 'green';

                            }

                        }

                    }

                } else {

                    for (var i = 0; i < myQuestions.length; i++) {

                        if (question == myQuestions[i].question) {

                            for (var j = 0; j < answers.length - 1; j++) {

                                if (answers[j].nodeName != '#text') {

                                    answers[j].style.color = 'red';

                                    if (myQuestions[i].correctAnswer === answers[j].firstElementChild.value) {

                                        answers[j].style.color = 'green';

                                    }

                                }

                            }

                        }

                    }

                }

            }

        }

    }


    function showSlide(n) {
        slides[currentSlide].classList.remove("active-slide");
        slides[n].classList.add("active-slide");
        currentSlide = n;

        if (currentSlide === 0) {
            previousButton.style.display = "none";
        } else {
            previousButton.style.display = "inline-block";
        }

        if (currentSlide === slides.length - 1) {
            nextButton.style.display = "none";
            submitButton.style.display = "inline-block";
        } else {
            nextButton.style.display = "inline-block";
            submitButton.style.display = "none";
        }
    }


    function showNextSlide() {
        showSlide(currentSlide + 1);
    }

    function showPreviousSlide() {
        showSlide(currentSlide - 1);
    }

    var quizContainer = document.getElementById("quiz");
    var resultsContainer = document.getElementById("results");
    var submitButton = document.getElementById("submit");

    // display quiz right away
    buildQuiz();

    var previousButton = document.getElementById("previous");
    var nextButton = document.getElementById("next");
    var slides = document.querySelectorAll(".slide");
    var checkButton = document.getElementById("check");
    let currentSlide = 0;

    showSlide(0);

    // on submit, show results
    checkButton.addEventListener("click", checkAnswer);
    submitButton.addEventListener("click", showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
})();
