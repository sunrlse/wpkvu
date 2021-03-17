import _ from 'lodash'
import './style.css'
// import Cow from './cow.jpg'
// import xmlData from './data.xml'
import myPrint from './print.js'
// import { cube } from './math.js'

console.log(process.env.NODE_ENV)
if (process.env.NODE_ENV !== 'production') {
    console.log('looks like we are in development mode')
}

function component(params) {
    const el = document.createElement('div')
    const btn = document.createElement('button')
    el.classList.add('red')
    el.innerHTML = _.join(['hello', 'webpack'], ' $ ')
    // el.innerHTML = ['hello treeshaking! ', '4 cubed is equal to ' + cube(4)].join('\n\n')

    btn.innerHTML = 'Click me and check the console'
    btn.onclick = myPrint
    el.appendChild(btn)


    // const cowImg = new Image()
    // cowImg.src = Cow
    // el.appendChild(cowImg)

    // console.log(xmlData)

    return el
}
let ele = component()

document.body.appendChild(ele)

if (module.hot) {
    module.hot.accept('./print.js', function() {
        console.log('接受print模块更新中')
        document.body.removeChild(ele)
        ele = component()
        document.body.appendChild(ele)
    })
}