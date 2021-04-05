const http = require('http')

const server = http.createServer()

server.on('request', (req, res) => {
    console.log('receive reqesting ', req)
    res.send('hello')
})

server.listen({
    port: 8087
}, (err) => {
    console.log('server listening on 8087', err)
})