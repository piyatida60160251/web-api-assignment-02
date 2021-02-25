const express = require('express')
const MongoClient = require('mongodb').MongoClient
const ObjectID = require('mongodb').ObjectID
const app = express()

app.use(express.json())


const url = 'mongodb+srv://superadmin:Boom1920020102@cluster0.wl5lq.mongodb.net/buflix?retryWrites=true&w=majority'
const client = new MongoClient(url,{useNewUrlParser:true})
let db,moviesCollection

async function connect(){
    await client.connect()
    db = client.db('buflix')
    moviesCollection = db.collection('movies')
}
connect()

app.get('/movies',async(req,res) => {
})

app.get('/movies/:id',(req,res) =>{
//input
let id = req.params.id
//process
const movie = await moviesCollection.findOne({_id: ObjectID(id)})
const cursor = await moviesCollection.find({})
const result = await cursor.toArray()
    


    //output
res.status(200).json(movie)
})





app.post('/movies',async(req,res) =>{
//input

let newtitle = req.body.title
let newplot = req.body.plot
let newGenres = req.body.genres
let newCreators = req.body.newcreators
let newStars = req.body.stars
let newRating = req.body.rating

//rating
//- score
//- vote

//key: value
let newMovie = {
    title: title,
    plot :newplot,
    genres:newGenres,
    creators: newCreators,
    stars: newStars,
    rating: newRating

}
let movieID = 0


//process
const result = await moviesCollection.insertOne(newMovie)
movieID = result.insertedID

//output
res.status(201).json(movieID)
})
const port = 3000
app.listen(port,() => console.log(`Server started again at ${port}`))