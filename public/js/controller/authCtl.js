controller.register = async function(registerInfo) {
  let email = registerInfo.email
  let password = registerInfo.password
  let displayName = registerInfo.name 
  let button = document.getElementById('buttonSubmitRegister')

  button.setAttribute('disabled', true)
  view.setText('register-error', '')
  view.setText('register-success', '')

  try {
      await firebase.auth().createUserWithEmailAndPassword(email, password)
      await firebase.auth().currentUser.updateProfile({
          displayName: displayName
      })
      await firebase.firestore().collection('users').doc(firebase.auth().currentUser.uid).set({})
      view.setText('login-success', 'Check your verification email')
  } catch (error) {
      view.setText('register-error', error.message)
  }
  button.removeAttribute('disabled')
}

controller.logIn = async function(loginInfo) {
  let email = loginInfo.email
  let password = loginInfo.password
  let button = document.getElementById('buttonSubmitLogin')

  button.setAttribute('disabled', true)
  view.setText('login-error', '')
  view.setText('login-success', '')

  try {
      let result = await firebase.auth().signInWithEmailAndPassword(email, password)
      if(!result.user) {
          throw new Error('Please verify your email!')
      }
  } catch(error) {
      view.setText('login-error', error.message)
      button.removeAttribute('disabled')
  }
}
