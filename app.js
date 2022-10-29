const http = require('http')

const endpoint = {
    slackUsername: "Sokooya",
     Backend: true,
     Age: 18,
     Bio: "I am a backend developer hoping to hone my skills"
}
const requestHandler = (req, res) => {
    res.end(JSON.stringify(endpoint))
}

const server = http.createServer(requestHandler)

server.listen(3000, () =>{
    console.log('Port started at port 3000')
})