const express = require('express')
const app = express()
const fetch = require("isomorphic-fetch")


app.get('/', (req, res) => res.send('Beep Boop from 8080'))
app.get("/c", (req,res) => fetch("http://localhost:8081/json").then( (data) => { res.send(data.json); console.log(data)}
    )
)

app.listen(8080, () => console.log('Example app listening on port 8080!'))