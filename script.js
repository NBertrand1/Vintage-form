const loginTab = document.querySelector('#login-tab')
const signupTab = document.querySelector('#signup-tab')
const loginPanel = document.querySelector('#login-panel')
const signupPanel = document.querySelector('#signup-panel')
const feedback = document.querySelector('#form-feedback')

function showPanel(panel) {
  const isLogin = panel === 'login'
  loginPanel.hidden = !isLogin
  signupPanel.hidden = isLogin
  loginTab.classList.toggle('active', isLogin)
  signupTab.classList.toggle('active', !isLogin)
  loginTab.setAttribute('aria-selected', String(isLogin))
  signupTab.setAttribute('aria-selected', String(!isLogin))
  feedback.textContent = isLogin
    ? 'Formulaire de démonstration : aucune connexion réelle ne sera effectuée.'
    : 'Formulaire de démonstration : les informations ne seront pas enregistrées.'
}

loginTab.addEventListener('click', () => showPanel('login'))
signupTab.addEventListener('click', () => showPanel('signup'))

for (const form of [loginPanel, signupPanel]) {
  form.addEventListener('submit', event => {
    event.preventDefault()
    if (!form.reportValidity()) return
    feedback.textContent = 'Validation frontend réussie. Cette démo ne communique avec aucun serveur et ne crée aucun compte.'
    form.reset()
  })
}
