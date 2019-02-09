<?php
require "header.php";
?>

<div class="container-fluid">
    <div class="row">
        <nav class="col-md-2 d-none d-md-block bg-light sidebar">
            <div class="sidebar-sticky">
                <ul class="nav flex-column">
                    <li class="nav-item">
                        <a class="nav-link active" href="5c2s_year_index.php">
                            <span data-feather="home"></span>
                            Dashboard <span class="sr-only">(current)</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="Total MCQ list_2c1s.php">
                            <span data-feather="layers"></span>
                            Total MCQ list
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="Total MCQ practice_2c1s.php">
                            <span data-feather="file"></span>
                            Total MCQ Practice
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="t48_MCQ_Practice_2c1s.php">
                            <span data-feather="file-text"></span>
                            48 MCQ Practice
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="oralAnswers_2c1s.php">
                            <span data-feather="file-text"></span>
                            Oral Answers
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            <span data-feather="layers"></span>
                            Errors
                        </a>
                    </li>
                </ul>

                <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                    <span>Practice History</span>
                    <a class="d-flex align-items-center text-muted" href="#">
                        <span data-feather="plus-circle"></span>
                    </a>
                </h6>
                <ul class="nav flex-column mb-2">
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            <span data-feather="file-text"></span>
                            Current month
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            <span data-feather="file-text"></span>
                            Last quarter
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="demo.php">
                            <span data-feather="file-text"></span>
                            Demo
                        </a>
                    </li>
                </ul>
            </div>
        </nav>


        <main role="" class="col-md-9 ml-sm-auto col-lg-10 px-4">
            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 class="h2">Dashboard</h1>
                <div class="btn-toolbar mb-2 mb-md-0">
                    <div class="btn-group mr-2">
                        <button class="btn btn-sm btn-outline-secondary">Share</button>
                        <button class="btn btn-sm btn-outline-secondary">Export</button>
                    </div>
                    <button class="btn btn-sm btn-outline-secondary dropdown-toggle">
                        <span data-feather="calendar"></span>
                        This week
                    </button>
                </div>
            </div>

                        <h3>2nd Year</h3>
            <p><span data-feather="book"></span> <u><b>Histology.</b></u></p>
            <ul>
                <li><a href="#">ID_3993_1 special histology (КРОК)_English_sem_2 - Q</a></li>
                <li><a href="#">ID_3998_principles of cytology- embryo_English_sem_2 - Q</a></li>
                <li><a href="#">ID_5345_Digestive- respiratory and uri_English_sem_3 - Q</a></li>
                <li><a href="#">ID_6013_Cytology- embryology_English_sem_2 - Q</a></li>
                <li><a href="#">ID_6029_Nerve system- sense organs_English_sem_2 - Q</a></li>
                <li><a href="#">ID_6045_Reproductive system_English_sem_2 - Q</a></li>
                <li><a href="#">ID_6047_Circulatory- imunne and endocr_English_sem_2-rtf - Q</a></li>
                <li><a href="#">ID_6059_2 special histology (КРОК)_English_sem_2 - Q</a></li>
                <li><a href="#">ID_6968_Epithelium- blood- connective _English_sem_1-rtf - Q</a></li>
                <li><a href="#">ID_7097_Tests Krok_English_sem_1 - 32 Q</a></li>
            </ul>
            <p><span data-feather="book"></span> <u><b>Human Anatomy.</b></u></p>
            <ul>
                <li><a href="#">ID_7226_Med_Test_1610_English_Sem_3-238_Q</a></li>
                <li><a href="#">ID_7227_Медичний англ задачі 1610_English_sem_3 - Q</a></li>
                <li><a href="#">ID_7231_Медичний англ СРС 205_English_sem_3 - Q</a></li>
                <li><a href="#">ID_7232_Медичний англ крок 230_English_sem_3 - Q</a></li>
            </ul>

        </main>




        <?php
      require "footer-distributed.php";
     ?>
