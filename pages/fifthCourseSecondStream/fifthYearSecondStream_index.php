<?php
  require "header.php";
?>

<div class="container-fluid">
    <div class="row">
        <nav class="col-md-2 d-none d-md-block bg-light sidebar">
            <div class="sidebar-sticky">
                <ul class="nav flex-column">
                    <li class="nav-item">
                        <a class="nav-link active" href="fifthYearSecondStream_index.php">
                            <span data-feather="home"></span>
                            Dashboard <span class="sr-only">(current)</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="total_MCQ_List_5c2s.php">
                            <span data-feather="layers"></span>
                            Total MCQ list
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="total_MCQ_Practice_5c2s.php">
                            <span data-feather="file"></span>
                            Total MCQ Practice
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="t48_MCQ_Practice_5c2s.php">
                            <span data-feather="file-text"></span>
                            48 MCQ Practice
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="oralAnswers_5c2s.php">
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
                        <a class="nav-link" href="../demo.php">
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
            <h3>5th Year 2nd Stream</h3>

            <p><span data-feather="book"></span> <u><b>Social medicine, organization and economics of health care.</b></u></p>
            <ul>
                <li><a href="ID_6909_Social_Medicine_And_Organizati_English_Sem_8-238_Q.php">ID_6909_Social medicine and organizati_English_sem_8 - 238 Q</a></li>
                <li><a href="ID_6910_Social_Medicine_And_Organizati_English_Sem_8-238_Q.php">ID_6910_Social medicine and organizati_English_sem_8 - 238 Q</a></li>
                <li><a href="ID_6913_Social_Medicine_And_Organizati_English_Sem_9-196_Q.php">ID_6913_Social medicine and organizati_English_sem_9 - 196 Q</a></li>
                <li><a href="ID_6916_Social_Medicine_And_Organizati_English_Sem_9-196_Q.php">ID_6916_Social medicine and organizati_English_sem_9 - 196 Q</a></li>
                <li><a href="ID_6992_Social_Medicine_And_Organizati_English_Sem_8-26_Q.php">ID_6992_Social medicine and organizati_English_sem_8 - 26 Q</a></li>
                <li><a href="ID_6994_Social_Medicine_And_Organizati_English_Sem_9-32_Q.php">ID_6994_Social medicine and organizati_English_sem_9 - 32 Q</a></li>
            </ul>

        </main>




        <?php
      require "footer-distributed.php";
     ?>
