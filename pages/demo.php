<?php
  require "headerPractice.php";
?>


<main role="" class="col-md-9 ml-sm-auto col-lg-10 px-4 container-fluid">
    <h1 class="demoheader">Medical Chemistry Demo</h1>
    <div style="margin:0; font-weight:bold;">You have <span id="timer" style="color:#009fff;"></span> minutes left for this practice!</div>
    <div id="results" style="color:#009fff;"></div>
    <div class="quiz-container container-fluid">
        <div id="quiz"></div>
    </div>
    <button class="quiztoggle" id="previous">Previous Question</button>
    <button class="quiztoggle" id="next">Next Question</button>
    <button class="quiztoggle" id="check">Check</button>
    <button class="quiztoggle" id="submit">Finish Practice</button>
</main>

<!-- Link to JavaScript for Quiz.js -->
<script src="../js/quiz.js"></script>

<?php
      require "footer-distributed.php";
     ?>
