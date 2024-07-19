const express = require('express')
const app = express()
var cors = require('cors')
const jwt = require('jsonwebtoken')

app.use(cors())
app.post('/signIn', (req, res) => {
  const token = jwt.sign(
    {
      sub: 1,
      username: 'Vitor Lostada',
      email: 'vitorlosta@hotmail.com',
      role: 'admin'
    },
    'sejdasfjasdfasdfsd',
    { expiresIn: '2d' }
  )
  res.json({ access_token: token })
})

app.listen(5000, () => {
  console.log(`Example app listening on port 5000`)
})
