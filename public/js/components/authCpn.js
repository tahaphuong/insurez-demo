components.register = `
<div class="login-container">

    <section class="register-container">
        <form id="register-form" class="register-form">
            <div class="form-header">
                <p class="register-title montserrat-font">Đăng kí InsurEZ</p>
            </div>

            <div class="form-content">
                <div class="input-wrapper">
                    <input type="text" name="name" placeholder="Name">
                    <div id="name-error" class="error-message"></div>
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
            
            <button type="submit" id="buttonSubmitRegister" class="buttonSubmit montserrat-font">Đăng kí 👌</button>
            <div class="form-footer">
                <a id="register-link" href="#login-form" class="already-have-an-acount">Đã có tài khoản? Đăng nhập</a>
            </div>
        </form>
    </section>
    <div id="auth-bg"></div>
</div>
`

components.logIn = `
<section class="login-container">
    <form id="login-form" class="login-form">
    <div class="form-header">
        <p class="register-title montserrat-font">Đăng nhập InsurEZ</p>
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
    <button type="submit" id="buttonSubmitLogin" class="buttonSubmit montserrat-font">Đăng nhập 👌</button>
    <div class="form-footer">
        <a id="log-in-link" class="already-have-an-acount" style="cursor: pointer">Chưa có tài khoản? Đăng kí</a>
    </div>
    </form>
    <div id="auth-bg"></div>
</section>
`

