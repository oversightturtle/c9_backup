const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Beep Boop from 8081'))
app.get('/test', (req, res) => res.send('8081 port!'))
app.get('/re', (req, res) => res.redirect("/"))
app.get("/json", (req,res) => res.send({test: "test"}))

app.listen(8081, () => console.log('Example app listening on port 8081!'))