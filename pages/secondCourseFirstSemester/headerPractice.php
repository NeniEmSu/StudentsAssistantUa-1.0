<?php
    session_start();
  ?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="title" content="student assistant">
    <meta name="description" content="Assist students in Ukraine medical university and Ternopil State Medical University with preparation for classes, practical skills, and examinations.">
    <meta name="keywords" content="test practice, ukraine, education, learn, classes, exam preparation, students, assistant, studentsassistant, ternopil, kiev, test-practice, international students, medical university, study in ukraine, study smart, mcq practice, directions to school buildings, study notes, study tips, educational, tdmu, tdmuexams, tdmu exam practice">
    <meta name="robots" content="index, follow">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="language" content="English">
    <meta name="revisit-after" content="30 days">
<meta name="author" content="EMMANUEL NENI">


    <!-- Favicons -->
    <link rel="apple-touch-icon" href="../../images/favicon.png" sizes="180x180">
    <link rel="icon" href="../../images/favicon.png" sizes="32x32" type="image/png">
    <link rel="icon" href="../../images/favicon.png" sizes="16x16" type="image/png">
    <link rel="manifest" href="../../images/favicon.png">
    <link rel="mask-icon" href="../../images/favicon.png" color="#083b66">
    <link rel="icon" href="../images/favicon.png">
    <meta name="msapplication-config" content="/docs/4.1/assets/img/favicons/browserconfig.xml">
    <meta name="theme-color" content="#083b66">


    <title>Test Practice Second Year First Semester</title>


    <!-- Custom styles for quiz layout -->
    <link rel="stylesheet" href="../../css/quiz.css">

    <!-- Bootstrap core CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">


<!-- Custom styles for footer layout -->
    <link rel="stylesheet" href="../../css/footer-distributed.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css">


     <!-- Bootstrap core CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
</head>

<?php
  if (isset($_SESSION['userId'])) {
    echo '
<body>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top" style="margin-bottom: 1.5rem !important;">
        <a class="navbar-brand" href="home.php">Test Practice <span class="highlight" style="color:#009fff; font-weight: lighter;">ТДМУ</span> </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <a class="nav-link" href="../home.php"> Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link" href="fifthYearFirstStream_index.php"> Dashboard </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="oralAnswers_2c1s.php"> Oral Answers </a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="https://example.com" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                    <div class="dropdown-menu" aria-labelledby="dropdown01">
                        <a class="dropdown-item" href="total_MCQ_List_2c1s.php">Total MCQ List</a>
                        <a class="dropdown-item" href="total_MCQ_Practice_2c1s.php">Total MCQ Practice</a>
                        <a class="dropdown-item" href="t48_MCQ_Practice_2c1s.php">48 MCQ Practice</a>
                    </div>
                </li>
            </ul>
            <form class="form-inline my-2 my-lg-0" action="../../includes/logout.inc.php">
                <button type="submit" name="logout-submit" style=" border-radius: 3px;"><span data-feather="log-out"></span>Sign out</button>
            </form>
        </div>
    </nav>';
  }
  else {
    echo '
    <body>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
         <a class="navbar-brand" href="home.php">Test Practice <span class="highlight" style="color:#009fff; font-weight: lighter;">ТДМУ</span> </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="../home"> Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="../../index.php"> Dashboard </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" href="../demo.php"> Demo </a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="https://example.com" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                    <div class="dropdown-menu" aria-labelledby="dropdown01">
                        <a class="dropdown-item" href="#">Total MCQ List</a>
                        <a class="dropdown-item" href="#">Total MCQ Practice</a>
                        <a class="dropdown-item" href="#">Errors</a>
                    </div>
                </li>
            </ul>
            <form class="form-inline my-2 my-lg-0" action="../../includes/login.inc.php">
                <ul class="navbar-nav px-3">
                    <li class="nav-item text-nowrap">
                        <a class="nav-link" href="index.php"><span data-feather="log-in"></span>Sign in</a>
                    </li>
                </ul>
            </form>
        </div>
    </nav>';
      }
   ?>
