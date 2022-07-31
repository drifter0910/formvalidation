import { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    let id = (id) => document.getElementById(id);
    let classes = (classes) => document.getElementsByClassName(classes);
    let username = id("username"),
      email = id("email"),
      password = id("password"),
      form = id("form"),
      errorMsg = classes("error"),
      successIcon = classes("success-icon"),
      failureIcon = classes("failure-icon");
    console.log(username);
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      engine(username, 0, "Username cannot be blank");
      engine(email, 1, "Email cannot be blank");
      engine(password, 2, "Password cannot be blank");
    });

    let engine = (id, serial, message) => {
      if (id.value.trim() === "") {
        errorMsg[serial].innerHTML = message;
        id.style.border = "2px solid red";

        // icons
        failureIcon[serial].style.opacity = "1";
        successIcon[serial].style.opacity = "0";
      } else {
        errorMsg[serial].innerHTML = "";
        id.style.border = "2px solid green";

        // icons
        failureIcon[serial].style.opacity = "0";
        successIcon[serial].style.opacity = "1";
      }
    };
  }, []);

  return (
    <div className="App">
      <div class="container">
        <div class="content">
          <div class="logo">
            <img src="images/logo.svg" alt="" />
          </div>
          <div class="image"></div>
          <div class="text">
            Start for free & get <br />
            attractive offers today !
          </div>
        </div>
        <form id="form">
          <div class="social">
            <div class="title">Get Started</div>
            <div class="question">
              Already Have an Account? <br />
              <span>Sign In</span>
            </div>

            <div class="btn">
              <div class="btn-1">
                <img
                  alt=""
                  src="https://img.icons8.com/color/30/000000/google-logo.png"
                />
                Sign Up
              </div>
              <div class="btn-2">
                <img
                  alt=""
                  src="https://img.icons8.com/ios-filled/30/ffffff/facebook-new.png"
                />
                Sign Up
              </div>
            </div>

            <div class="or">Or</div>
          </div>

          <div>
            <label for="username">User Name</label>
            <i class="fas fa-user"></i>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Joy Shaheb"
            />
            <i class="fas fa-exclamation-circle failure-icon"></i>
            <i class="far fa-check-circle success-icon"></i>
            <div class="error"></div>
          </div>

          <div>
            <label for="email">Email</label>
            <i class="far fa-envelope"></i>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="abc@gmail.com"
            />
            <i class="fas fa-exclamation-circle failure-icon"></i>
            <i class="far fa-check-circle success-icon"></i>
            <div class="error"></div>
          </div>

          <div>
            <label for="password">Password</label>
            <i class="fas fa-lock"></i>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password here"
            />
            <i class="fas fa-exclamation-circle failure-icon"></i>
            <i class="far fa-check-circle success-icon"></i>
            <div class="error"></div>
          </div>

          <button type="submit" id="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
