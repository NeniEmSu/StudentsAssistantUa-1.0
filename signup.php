<?php
  require "headerAdmin.php";
?>


<?php
              if (isset($_SESSION['name'])) {
                echo '
                <form class="form-signin" action="includes/signup.inc.php" method="POST">
                  <h1 class="h3 mb-3 font-weight-normal">Signup Here</h1>
                      <table>
                        <tr>
                        <td class="sr-only">User Type</td>
                        <td><select name="type" class="form-control">
                          <option value="-1">Select Your Course.</option>
                          <option value="Admin">Admin</option>
                          <option value="1First">1FirstS</option>
                          <option value="1Second">1SecondS</option>
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
                    <label for="Username" class="sr-only">Username</label>
                    <input type="Username" name="uid" id="inputEmail" class="form-control" placeholder="Username" required autofocus>
                    <label for="inputEmail" class="sr-only">Email address</label>
                    <input type="email" name="mail" id="inputEmail" class="form-control" placeholder="Email..." required autofocus>
                    <label for="inputPassword" class="sr-only">Password</label>
                    <input type="password" name="pwd" id="inputPassword" class="form-control" placeholder="Password..." required>
                    <label for="inputPassword" class="sr-only">Password</label>
                    <input type="password" name="pwd-repeat" id="inputPassword" class="form-control" placeholder="Repeat Password..." required>
                    <button class="btn btn-lg btn-primary btn-block" type="submit" name="signup-submit">Sign up<span data-feather="log-in"></span></button>
                    <p class="mt-5 mb-3 text-muted"></p>
                </form>';
              }
              else {
                echo '
                <form class="form-signin" action="includes/admin.inc.php" method="POST">
                  <h1 class="h3 mb-3 font-weight-normal" style = "text-align: center;">This Page is restricted for Admin only! <br> Please sign in </h1>
                    <label for="inputEmail" class="sr-only">Email address</label>
                      <input type="Username" name="uname" id="inputEmail" class="form-control" placeholder="Admin Username..." required autofocus>
                    <label for="inputPassword" class="sr-only">Password</label>
                      <input type="password" name="password" id="inputPassword" class="form-control" placeholder="Admin Password..." required>
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
