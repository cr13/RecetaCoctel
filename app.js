const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.send('Welcome to RecetasCoctel!')
})

app.listen(port, () => {
  console.log(`RecetasCoctel app listening at http://localhost:${port}`)
})
