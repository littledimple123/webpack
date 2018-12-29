var hy = require('./a.js')
import './index.css'
import './style.less'

console.log(hy)
document.getElementById('box1').innerHTML = hy
if (module.hot) {
    module.hot.accept()
}