import 'lazysizes'
import 'lazysizes/plugins/parent-fit/ls.parent-fit'
import 'regenerator-runtime'
import '../styles/main.css'
import '../styles/responsive.css'
import App from './views/app'
import swRegister from './utils/sw-register'

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('#maincontent')
})

window.addEventListener('hashchange', () => {
  app.renderPage()
})

window.addEventListener('load', () => {
  app.renderPage()
  swRegister()
})
