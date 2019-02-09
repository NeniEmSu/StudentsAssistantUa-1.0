<?php
  require "header.php";
?>

<?php
              if (isset($_SESSION['userId'])) {
                echo '
                <main role="" style=" width: 100%; max-width: 35rem; padding: 10px; margin: auto; padding-top: inherit; ">
                    <section class="jumbotron text-center">
                        <div class="container">
                            <img src="images/favicon.png" class="" width="100" height="100" alt="Page Logo"></svg>
                            <h1 class="jumbotron-heading">You are logged in</h1>
                            <p class="lead text-muted">Welcome back, its a great day to start practicing.</p>
                            <p>
                                <a href="pages/bsnFirstYear/bsnFirstYear_index.php" class="btn btn-primary my-2">BSN 1</a>
                                <a href="pages/firstCourseFirstSemester/firstYearFirstSemester_index.php" class="btn btn-primary my-2">1c1s Practice.</a>
                                <a href="pages/secondCourseFirstSemester/secondYearFirstSemester_index.php" class="btn btn-primary my-2">2c1s Practice.</a>
                                <!-- <a href="pages/thirdCourse/thirdYear_index.php" class="btn btn-primary my-2">3c1s Practice.</a> -->
                                <a href="pages/fourthCourseFirstStream/fourthYearFirstStream_index.php" class="btn btn-primary my-2">4c1s Practice.</a>
                                <a href="pages/thirdCourse/thirdYear_index.php" class="btn btn-primary my-2">3rd Practice.</a>
                                <!-- <a href="pages/fourthCourseSecondStream/fourthYearSecondStream_index.php" class="btn btn-primary my-2">4c2s Practice.</a> -->
                                <a href="pages/fifthCourseFirstStream/fifthYearFirstStream_index.php" class="btn btn-primary my-2">5c1s Practice.</a>
                                <a href="pages/fifthCourseSecondStream/fifthYearSecondStream_index.php" class="btn btn-primary my-2">5c2s Practice.</a>


                            </p>
                        </div>
                    </section>
                </main>';
              }
              else {
                echo '
                <form class="form-signin" action="includes/login.inc.php" method="POST">
                  <h1 class="h3 mb-3 font-weight-normal" style = "text-align: center;">You are logged out <br> Please sign in </h1>
<table>
    <tr>
        <td class="sr-only">User Type</td>
        <td><select name="type" class="form-control">
                <option value="-1">Select Your Course.</option>
                <option value="Admin">Admin</option>
                <option value="1FirstS">1FirstS</option>
                <option value="1SecondS">1SecondS</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4A">4A</option>
                <option value="4B">4B</option>
                <option value="5A">5A</option>
                <option value="5B">5B</option>
                <option value="6A">6A</option>
                <option value="6B">6B</option>
            </select></td>
    </tr>
</table>
<label for="inputEmail" class="sr-only">Email address</label>
<input type="Username" name="mailuid" id="inputEmail" class="form-control" placeholder="Username..." required autofocus>
<label for="inputPassword" class="sr-only">Password</label>
<input type="password" name="pwd" id="inputPassword" class="form-control" placeholder="Password..." required>
<div class="checkbox mb-3">
    <label>
        <input type="checkbox" value="remember-me"> Remember me
    </label>
</div>
<button class="btn btn-lg btn-primary btn-block" type="submit" name="login-submit">Sign in<span data-feather="log-in"></span></button>
<p class="mt-5 mb-3 text-muted"></p>
</form>';
}
?>

<a href="pages/thirdCourse/thirdYear_index.php" class="btn btn-primary my-2">3rd Practice.</a>
<a href="pages/sixthCourseFirstStream/sixthCourseFirstStream_index.php" class="btn btn-primary my-2">6c1s Practice.</a>
<a href="pages/sixthCourseSecondStream/sixthCourseSecondStream_index.php" class="btn btn-primary my-2">6c2s Practice.</a>

<?php
      require "footer-distributed.php"
     ?>
