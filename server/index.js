const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const UserModel = require('./model/Users')

app.use(cors ())
app.use(express.json());


mongoose.connect("mongodb+srv://cwy:test123@cluster0.evpz1h.mongodb.net/mern?retryWrites=true&w=majority")

app.get("/getUsers", (req, res) => {
    UserModel.find({}).then(function(users) {
        res.json(users)
        }).catch(function(err) {
        res.json(err)
        })

})



app.listen(3001, ()=> {
    console. log ("Server is Running")
})
