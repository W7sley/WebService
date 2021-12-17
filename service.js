const express = require('express')
const cors = require('cors')
const router = require ('./routes')

const app = express()
app.use(cors())
app.use(express.json())
app.use(router)

const port = 3000

app.get('/',(request, response) => {
    response.send('ok')
    console.log('ok!')
})

app.listen(port, () => {
    console.log(`Server Running at port: ${port}`)
})