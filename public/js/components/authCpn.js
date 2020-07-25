components.register = `
<div class="register-page-grid">
    <section>
    </section>
    <section class="register-container">
        <form id="register-form" class="register-form">
            <div class="form-header">
                <p class="register-title montserrat-font">Register</p>
            </div>

            <div class="form-content">
                <div class="name-wrapper">
                    <div class="name-input-wrapper">
                        <input type="text" name="firstname" placeholder="First name">
                        <div id="firstname-error" class="error-message"></div>
                    </div>

                    <div class="name-input-wrapper">
                        <input type="text" name="lastname" placeholder="Last name" style="display:flex; float:right">
                        <div id="lastname-error" class="error-message"></div>
                    </div>
                </div>

                <div class="input-wrapper">
                    <input type="email" name="email" placeholder="Email">
                    <div id="email-error" class="error-message"></div>
                </div>

                <div class="input-wrapper">
                    <input type="password" name="password" placeholder="Password">
                    <div id="password-error" class="error-message"></div>
                </div>

                <div class="input-wrapper">
                    <input type="password" name="confirmPassword" placeholder="Confirm password">
                    <div id="confirmPassword-error" class="error-message"></div>
                </div>
            </div>
            <div id="register-error" class="message-error"></div>
            <div id="register-success" class="message-success"></div>
            <div class="form-footer">
                <a id="register-link" href="#login-form" class="already-have-an-acount">Already have an account? Login</a>
                <button type="submit" id="buttonSubmitRegister" class="buttonSubmit montserrat-font">Register</button>
            </div>
        </form>
    </section>
</div>
`

components.logIn = `
<section class="login-container">
    <div></div>
    <form id="login-form" class="login-form">
    <div class="form-header">
        <p class="register-title montserrat-font">Log In</p>
    </div>
    <div class="input-wrapper">
        <input type="email" name="email" placeholder="Email">
        <div id="email-error" class="error-message"></div>
    </div>
    <div class="input-wrapper">
        <input type="password" name="password" placeholder="Password">
        <div id="password-error" class="error-message"></div>
    </div>
    <div id="login-error" class="message-error"></div>
    <div id="login-success" style="color: green" class="message-error"></div>
    <div class="form-footer">
        <a id="log-in-link" class="already-have-an-acount" style="cursor: pointer">Not have an account? Register</a>
        <button type="submit" id="buttonSubmitLogin" class="buttonSubmit montserrat-font">Log in</button>
    </div>
    </form>
    <div></div>
</section>
`

