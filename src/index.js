const express = require('express')
const cors = require('cors')
require('dotenv').config()

const { connectToDatabase } = require('./services/mongodb')
const router = require('./routes')

const PORT = process.env.PORT || 3333

const app = express()

connectToDatabase(process.env.MONGO_URL)

app.use(cors())
app.use(express.json())
app.use(router)

app.listen(PORT, console.log('Server running'))