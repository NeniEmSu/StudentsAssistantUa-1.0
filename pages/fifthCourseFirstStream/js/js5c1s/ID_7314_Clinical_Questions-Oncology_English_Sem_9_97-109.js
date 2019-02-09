(function () {
    var myQuestions = [
        {
            question: "97.	In old male patient developed paraplegia. On CT scan the osteoblastic lesion was found in spine. What cancer most likely causes this metastasis?",

            answers: {
                a: "  	 Carcinoma of prostate",

                b: " 	 Thyroid carcinoma",

                c: " 	 Brest carcinoma",

                d: " 	 Pancreatic carcinoma",

                e: " 	 Adrenal glands tumor"
            },
            correctAnswer: "a"
    },

        {
            question: "98.	10-year-old child presents with a mass on his thigh which was found to be arising from the diaphysis and involving the soft tissues. The child was having fever also. What is the most probable diagnosis?",

            answers: {
                a: " 	 Osteosarcoma",

                b: "  	 Ewing's sarcoma",

                c: " 	 Chondrosarcoma",

                d: " 	 Malignant fibrous histiocytoma",

                e: " 	 Fibrosarcoma"
            },
            correctAnswer: "b"
    },

        {
            question: "99.	A 50 year old patient presents with a lesion in the midline involving the sacrum which is sclerotic. What likely the diagnosis is?",

            answers: {
                a: " 	 Osteosarcoma",

                b: "  	 Chordoma",

                c: " 	 Metastasis",

                d: " 	 Chondrosarcoma",

                e: " 	 Osteoclastoma"
            },
            correctAnswer: "b"
    },


        {
            question: "100.	A 48 years old patient attends to a doctor complaining of a pain in right shoulder and paresthesia. On examination: in right supraclavicle region the compact lymph node is palpated. The X-rays revealed shadows at the apex of the right lung. What is preliminary diagnosis?",

            answers: {
                a: "  	 Pancoast cancer",

                b: " 	 Tuberculosis",

                c: " 	 Plexitis",

                d: " 	 Pulmonary abscess",

                e: " 	 Pneumonia"
            },
            correctAnswer: "a"
    },

        {
            question: "101.	A 66 years old patient has no any complaints. On prophylactic X-ray examination: in the upper lobe of right lung the formation of 3 cm is detected. There are no signs of lung insufficiency. What is the most right diagnostic procedure?",

            answers: {
                a: " 	 Bronchoscopy",

                b: " 	 Exploratory thoracotomy",

                c: " 	 CT scan",

                d: " 	 Laboratory test for tumor markers",

                e: "  	 Transthoracic needle aspiration tumor’s biopsy"
            },
            correctAnswer: "e"
    },

        {
            question: "102.	59 years old patient is complaining on persistent cough, chest pain, and dyspnea. These symptoms appeared 2 weeks ago. On X-ray examination: there is limited shadow in the right upper lung with displacement of the mediastinal shadow towards the affected side. What additional exam should be realized for diagnosis definition?",

            answers: {
                a: "  	 Bronchoscopy",

                b: " 	 Exploratory thoracotomy",

                c: " 	 CT scan",

                d: " 	 Laboratory test for tumor markers detection",

                e: " 	 transthoracic needle aspiration biopsy"
            },
            correctAnswer: "a"
    },

        {
            question: "103.	25 years old male has pigmented macules over the palm, sole and oral mucosa. He also had anemia and pain in abdomen. What the most probable diagnosis is?",

            answers: {
                a: " 	 Albright’s syndrome",

                b: "  	 Peutz-Jegher’s syndrome",

                c: " 	 Cushing’s syndrome",

                d: " 	 Horner’s syndrome",

                e: " 	 Paget disease"
            },
            correctAnswer: "b"
    },

        {
            question: "104.	In 50 years old male the early stage (T1) squamous cell carcinoma of anal canal has been diagnosed. What the best treatment option is?",

            answers: {
                a: " 	 Chemotherapy",

                b: " 	 Radiotherapy",

                c: "  	 Chemoradiation therapy",

                d: " 	 Cryotherapy",

                e: " 	 Colostomy"
            },
            correctAnswer: "c"
    },

        {
            question: "105.	A patient operated for colon cancer 4 months ago now presents with a 1.5 cm solitary mass in the right liver lobe. The treatment of choice in this case is: ",

            answers: {
                a: " 	 Chemotherapy",

                b: " 	 Radiotherapy",

                c: "  	 Resection of liver",

                d: " 	 Palliative care",

                e: " 	 Photodynamic therapy"
            },
            correctAnswer: "c"
    },

        {
            question: "106.	A 70 years old male presents with a lower intestinal bleeding for the last 5 months. Rectoscopy revealed non-obstructing tumor mass 3 cm above the anal verge. The treatment of choice is:",


            answers: {
                a: " 	 Anterior resection",

                b: " 	 Colostomy",

                c: "  	 Abdomino-perineal resection",

                d: " 	 Hartman’s operation",

                e: " 	 Wertheim’s operation"
            },
            correctAnswer: "c"
    },

        {
            question: "107.	A patient presents with melena, hyperpigmentation over the lip, oral mucosa and skin. His sister is also having similar complains. The most likely diagnosis is:",

            answers: {
                a: " 	 Albright’s syndrome",

                b: "  	 Peutz-Jegher’s syndrome",

                c: " 	 Cushing’s syndrome",

                d: " 	 Horner’s syndrome",

                e: " 	 Paget disease"
            },
            correctAnswer: "b"
    },

        {
            question: "108.	In patient after colon cancer surgery the solitary mass (2 cm) was found in the right lung. What the treatment of choice in this case is?",

            answers: {
                a: " 	 Chemotherapy",

                b: " 	 Radiotherapy",

                c: "  	 Surgery",

                d: " 	 Palliative care",

                e: " 	 Photodynamic therapy"
            },
            correctAnswer: "c"
    },

        {
            question: "109.	A 60 years old male with rectosigmoid carcinoma and acute intestinal obstruction is admitted to surgical department. What the treatment of choice is this case?",

            answers: {
                a: " 	 Colostomy",

                b: " 	 Anterior resection",

                c: " 	 Abdomino-perineal resection",

                d: "  	 Hartman’s operation",

                e: " 	 Wertheim’s operation"
            },
            correctAnswer: "d"
    }

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

    function checkAnswer () {

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
      for (var i = 0; i < answers.length-1; i++) {

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

            for (var i = 0; i < answers.length-1; i++) {

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

                for (var j = 0; j < answers.length-1; j++) {

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
