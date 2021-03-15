
function component(params) {
    const el = document.createElement('div')
    el.innerHTML = _.join(['hello', 'webpack'], ' $ ')
    return el
}

document.body.appendChild(component())