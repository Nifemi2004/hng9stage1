const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

app.get("/", (req, res) =>{
    res.json({
        slackUsername: "Sokooya",
        backend: true,
        age: 18,
        bio: "I am a backend developer hoping to hone my skills"
    })
})
app.listen(3000, () =>{
    console.log("Started at port 3000")
})