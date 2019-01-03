var hy = require('./a.js')
import './index.css'
import './style.less'
import psi from './img/PSIliru20181108.png'
import './index.html'

console.log(hy)
document.getElementById('box1').innerHTML = hy
if (module.hot) {
    module.hot.accept()
}