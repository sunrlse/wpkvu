console.log('----- eslint ----- ', process.env.NODE_ENV)
module.exports = {
    root: true,
    "extends": "eslint:recommended",
    "parser": "vue-eslint-parser",
    "parserOptions": {
        "parser": "babel-eslint",
        "ecmaVersion": 6,
        "sourceType": "module"
    },
    "globals": {
        window: true,
        document: true,
        location: true,
        console: true,
        Promise: true,
        process: true,
        setInterval: true,
        clearInterval: true,
        setTimeout: true,
        clearTimeout: true,
        localStorage: true,
        sessionStorage: true
    },
    "rules": {
        "no-console": process.env.NODE_ENV === 'development' ? 'warn' : 'error', 
        "no-unused-vars": process.env.NODE_ENV === 'development' ? 'warn' : 'warn', 
        "no-debugger": process.env.NODE_ENV === 'development' ? 'warn' : 'error'
    }
}