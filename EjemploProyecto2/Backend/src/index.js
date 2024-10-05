const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json({limit: '25mb'}))
app.use(express.urlencoded({limit: '25mb', extended: true}))

const PORT = 4000;

const indexRouter = require('./routes/routes')
app.use('/', indexRouter)

app.listen(PORT, () => {
    console.log('El servidor esta ejecutandose en el puerto ' + PORT);
})