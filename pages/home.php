<?php
  require "header.php";
?>

<div class="container-fluid">
    <div class="row">
        <nav class="col-md-2 d-none d-md-block bg-light sidebar">
            <div class="sidebar-sticky">
                <ul class="nav flex-column">
                    <li class="nav-item">
                        <a class="nav-link active" href="home.php">
                            <span data-feather="home"></span>
                            Dashboard <span class="sr-only">(current)</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="../index.php">
                            <span data-feather="layers"></span>
                            Total MCQ list
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="../index.php">
                            <span data-feather="file"></span>
                            Total MCQ Practice
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="../index.php">
                            <span data-feather="file-text"></span>
                            48 MCQ Practice
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="../index.php">
                            <span data-feather="file-text"></span>
                            24 MCQ Practice
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="../index.php">
                            <span data-feather="layers"></span>
                            Errors
                        </a>
                    </li>
                </ul>

                <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                    <span>Practice History</span>
                    <a class="d-flex align-items-center text-muted" href="../index.php">
                        <span data-feather="plus-circle"></span>
                    </a>
                </h6>
                <ul class="nav flex-column mb-2">
                    <li class="nav-item">
                        <a class="nav-link" href="../index.php">
                            <span data-feather="file-text"></span>
                            Current month
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="../index.php">
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

        <main role="mainhome" class="col-md-9 ml-sm-auto col-lg-10 px-4">
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
            <h3>1st Year</h3>
            <p><span data-feather="book"></span> <u><b>Medical Chemistry.</b></u></p>
            <ul>
                <li><a href="../index.php">ID_6846_Medical chemistry (tests)_English_sem_1 - 501 Q</a></li>
                <li><a href="../index.php">ID_6847_Medical chemistry (problems)_English_sem_1 - 447 Q</a></li>
                <li><a href="../index.php">ID_6848_Medical chemistry (SIW)_English_sem_1 - 56 Q</a></li>
            </ul>
            <h3>2nd Year</h3>
            <p><span data-feather="book"></span> <u><b>Histology.</b></u></p>
            <ul>
                <li><a href="../index.php">ID_3993_1 special histology (КРОК)_English_sem_2 - Q</a></li>
                <li><a href="../index.php">ID_3998_principles of cytology- embryo_English_sem_2 - Q</a></li>
                <li><a href="../index.php">ID_5345_Digestive- respiratory and uri_English_sem_3 - Q</a></li>
                <li><a href="../index.php">ID_6013_Cytology- embryology_English_sem_2 - Q</a></li>
                <li><a href="../index.php">ID_6029_Nerve system- sense organs_English_sem_2 - Q</a></li>
                <li><a href="../index.php">ID_6045_Reproductive system_English_sem_2 - Q</a></li>
                <li><a href="../index.php">ID_6047_Circulatory- imunne and endocr_English_sem_2-rtf - Q</a></li>
                <li><a href="../index.php">ID_6059_2 special histology (КРОК)_English_sem_2 - Q</a></li>
                <li><a href="../index.php">ID_6968_Epithelium- blood- connective _English_sem_1-rtf - Q</a></li>
                <li><a href="../index.php">ID_7097_Tests Krok_English_sem_1 - 32 Q</a></li>
            </ul>
            <p><span data-feather="book"></span> <u><b>Human Anatomy.</b></u></p>
            <ul>
                <li><a href="../index.php">ID_7226_Медичний(Med) англ(Eng) тести(Test) 1610_English_sem_3 - 238 Q</a></li>
                <li><a href="../index.php">ID_7227_Медичний англ задачі 1610_English_sem_3 - Q</a></li>
                <li><a href="../index.php">ID_7231_Медичний англ СРС 205_English_sem_3 - Q</a></li>
                <li><a href="../index.php">ID_7232_Медичний англ крок 230_English_sem_3 - Q</a></li>
            </ul>
            <h3>3rd Year</h3>
            <p><span data-feather="book"></span> <u><b>Clinical Pharmacology.</b></u></p>
            <ul>
                <li><a href="../index.php">ID_6270_Ситуаційні задачі 2 і 3 курс- _English_sem_1 - Q</a></li>
                <li><a href="../index.php">ID_6271_Тестові завдання- 3 курс- меди_English_sem_1 - Q</a></li>
                <li><a href="../index.php">ID_6272_Тестові завдання- 2 курс- меди_English_sem_1 - Q</a></li>
                <li><a href="../index.php">ID_7062_Самостійна робота- медичний фа_English_sem_5 - Q</a></li>

            </ul>
            <p><span data-feather="book"></span> <u><b>Hygiene and Ecology.</b></u></p>
            <ul>
                <li><a href="../index.php">ID_7192_Hygiene and ecology (test)_English_sem_5 - Q</a></li>
                <li><a href="../index.php">ID_7194_Hygiene and ecology (CPC)_English_sem_5 - Q</a></li>
                <li><a href="../index.php">ID_7193_Hygiene and ecology (situation_English_sem_5 - Q</a></li>
            </ul>
            <p><span data-feather="book"></span> <u><b>Microbiology.</b></u></p>
            <ul>
                <li><a href="../index.php">ID_6999_KROK_1 MED_English_sem_5 - Q</a></li>
                <li><a href="../index.php">ID_7104_MIcrobiology- Virology- Immuno_English_sem_5 - Q</a></li>
                <li><a href="../index.php">ID_7126_задачі Microbiology- Virology-_English_sem_5 - Q</a></li>
                <li><a href="../index.php">ID_7129_самостійна робота Microbiology_English_sem_5 - Q</a></li>
            </ul>
            <p><span data-feather="book"></span> <u><b>Nursing Practice.</b></u></p>
            <ul>
                <li><a href="../index.php">ID_5722_nursing practice_English_sem_5 - Q</a></li>
                <li><a href="../index.php">ID_5723_nursing practice_English_sem_5 - Q</a></li>
                <li><a href="../index.php">ID_6872_2018-2019 Nursing Practice (te_English_sem_3 - Q</a></li>
                <li><a href="../index.php">ID_6873_2018-2019 Nursing Practice (ta_English_sem_3 - Q</a></li>
                <li><a href="../index.php">ID_6874_2018-2019 Nursing Practice (SI_English_sem_3 - Q</a></li>
                <li><a href="../index.php">ID_6948_Nursing practice (test)_English_sem_1 - Q</a></li>
                <li><a href="../index.php">ID_6955_Nursing practice (real-life)_English_sem_1 - Q</a></li>
                <li><a href="../index.php">ID_7329_Nursing practice (independent _English_sem_1 - Q</a></li>
                <li><a href="../index.php">ID_7386_Самостійна робота- медичний фа_English_sem_5 - Q</a></li>
            </ul>

            <h3>5th Year 1st Stream</h3>
            <p><span data-feather="book"></span> <u><b>Oncology.</b></u></p>
            <ul>
                <li><a href="../index.php">ID_7314_Clinical questions-Oncology_English_sem_9 - Q</a></li>
                <li><a href="../index.php">ID_7319_Oncology test_English_sem_5 - Q</a></li>
                <li><a href="../index.php">ID_7478_Oncology_English_sem_9 - Q</a></li>
            </ul>
            <p><span data-feather="book"></span> <u><b>Social medicine, organization and economics of health care.</b></u></p>
            <ul>
                <li><a href="../index.php">ID_6909_Social medicine and organizati_English_sem_8 - 238 Q</a></li>
                <li><a href="../index.php">ID_6910_Social medicine and organizati_English_sem_8 - 238 Q</a></li>
                <li><a href="../index.php">ID_6913_Social medicine and organizati_English_sem_9 - 196 Q</a></li>
                <li><a href="../index.php">ID_6916_Social medicine and organizati_English_sem_9 - 196 Q</a></li>
                <li><a href="../index.php">ID_6992_Social medicine and organizati_English_sem_8 - 26 Q</a></li>
                <li><a href="../index.php">ID_6994_Social medicine and organizati_English_sem_9 - 32 Q</a></li>
            </ul>
            <h3>5th Year 2nd Stream</h3>
            <p><span data-feather="book"></span> <u><b>Social medicine, organization and economics of health care.</b></u></p>
            <ul>
                <li><a href="../index.php">ID_6909_Social medicine and organizati_English_sem_8 - 238 Q</a></li>
                <li><a href="../index.php">ID_6910_Social medicine and organizati_English_sem_8 - 238 Q</a></li>
                <li><a href="../index.php">ID_6913_Social medicine and organizati_English_sem_9 - 196 Q</a></li>
                <li><a href="../index.php">ID_6916_Social medicine and organizati_English_sem_9 - 196 Q</a></li>
                <li><a href="../index.php">ID_6992_Social medicine and organizati_English_sem_8 - 26 Q</a></li>
                <li><a href="../index.php">ID_6994_Social medicine and organizati_English_sem_9 - 32 Q</a></li>
            </ul>
            <h3>6th Year 1st Stream</h3>
            <p><span data-feather="book"></span> <u><b>Social medicine, organization and economics of health care.</b></u></p>
            <ul>
                <li><a href="../index.php">ID_6909_Social medicine and organizati_English_sem_8 - 238 Q</a></li>
                <li><a href="../index.php">ID_6910_Social medicine and organizati_English_sem_8 - 238 Q</a></li>
                <li><a href="../index.php">ID_6913_Social medicine and organizati_English_sem_9 - 196 Q</a></li>
                <li><a href="../index.php">ID_6916_Social medicine and organizati_English_sem_9 - 196 Q</a></li>
                <li><a href="../index.php">ID_6992_Social medicine and organizati_English_sem_8 - 26 Q</a></li>
                <li><a href="../index.php">ID_6994_Social medicine and organizati_English_sem_9 - 32 Q</a></li>
            </ul>
            <h3>6th Year 2nd Stream</h3>
            <p><span data-feather="book"></span> <u><b>Social medicine, organization and economics of health care.</b></u></p>
            <ul>
                <li><a href="../index.php">ID_6909_Social medicine and organizati_English_sem_8 - 238 Q</a></li>
                <li><a href="../index.php">ID_6910_Social medicine and organizati_English_sem_8 - 238 Q</a></li>
                <li><a href="../index.php">ID_6913_Social medicine and organizati_English_sem_9 - 196 Q</a></li>
                <li><a href="../index.php">ID_6916_Social medicine and organizati_English_sem_9 - 196 Q</a></li>
                <li><a href="../index.php">ID_6992_Social medicine and organizati_English_sem_8 - 26 Q</a></li>
                <li><a href="../index.php">ID_6994_Social medicine and organizati_English_sem_9 - 32 Q</a></li>
            </ul>
        </main>




        <?php
      require "footer-distributed.php";
     ?>
