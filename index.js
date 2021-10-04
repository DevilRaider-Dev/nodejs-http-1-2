// Level 1-1

const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer((req, res) => {
    let filePath = req.url === '/' ? '/index.html' : req.url
    let ext = path.extname(req.url)
    let contentType = 'text/html'
    switch (ext) {
        // Level 2-1
        case '.css':
            contentType = 'text/css'
            break;
        case '.js':
            contentType = 'text/javascript'
            break;
        case '.ico':
            contentType = 'image/x-icon'
            break;
    }
    console.log(contentType)

    fs.readFile(`./public${filePath}`, (err, data) => {
        if (err) throw err
        res.writeHead(200, { 'Content-Type': contentType })
        res.end(data)
    })
})

server.listen(3000, () => {
    console.log('listening at 127:0:0:1:3000')
})
