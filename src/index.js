const express = require('express')
const morgan = require('morgan')
const path = require('path')

//import cors from 'cors'


const app = express()

// Settings    
app.set('port',4000)

// Middlewares
app.use(morgan('dev'))
app.use(express.json())
//app.use(cors());

// Routes
//import users from './routes/users.js'

// Static files
app.use(express.static(path.join(__dirname, 'public')))


// DB conection
const mongoose = require('mongoose')
const dbUrl = "mongodb+srv://capacho:D723YzKcdQKoMFE1@cluster0.nrtm1.mongodb.net/cadito?retryWrites=true&w=majority"

const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose.connect(dbUrl, connectionParams)
    .then(() => {
        console.info("Connected to the DB")
    }).catch((e) => {
        console.log("Error:", e)
    })


app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
})