<?php
  require "headerAdmin.php";
?>



<?php
              if (isset($_SESSION['name'])) {
                echo '
                <main role="" style=" width: 100%; max-width: 35rem; padding: 10px; margin: auto; padding-top: inherit; ">
                  <section class="jumbotron text-center">
                    <div class="container">
                      <h1 class="jumbotron-heading">welcome back Admin</h1>
                      <p class="lead text-muted">Time to make some upgrades and changes.</p>
                      <p>

                        <a href="signup.php" class="btn btn-primary my-2">Signup User</a>

                      </p>
                    </div>
                  </section>
                </main>';
              }
              else {
                echo '
                <form class="form-signin" action="includes/admin.inc.php" method="POST">
                  <h1 class="h3 mb-3 font-weight-normal" style = "text-align: center;">This Page is restricted for Admin only! <br> Please sign in </h1>
                    <label for="inputEmail" class="sr-only">Email address</label>
                      <input type="Username" name="uname" id="inputEmail" class="form-control" placeholder="AdminUsername..." required autofocus>
                    <label for="inputPassword" class="sr-only">Password</label>
                      <input type="password" name="password" id="inputPassword" class="form-control" placeholder="AdminPassword..." required>
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

<?php
      require "footer-distributed.php"
     ?>
