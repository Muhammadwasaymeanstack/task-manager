var http = require('http')

var server = http.createServer((req,res)=> {
        res.end('start')
})


server.listen(3001,'localHost',()=>{
    console.log('server started')
})