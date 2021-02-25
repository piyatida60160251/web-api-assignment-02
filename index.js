const express = require('express')
const app = express()

app.use(express.json())
let movies = []

app.get('/movies/:id',(req,res) => {
    //input 
let id = req.params.id
let movie = {}

 //process
movie = movies[id]
    
    //output
res.status(200).json(movie)
})


// POST /movies
app.post('/movies',(req,res) =>{
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
movies.push(newMovie)
// n-1
movieID = movies.length - 1 

//output
res.status(201).json(movieID)
})
const port = 3000
app.listen(port,() => console.log(`Server started again at ${port}`))