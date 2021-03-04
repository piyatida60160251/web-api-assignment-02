const express = require('express')
const MongoClient = require('mongodb').MongoClient
const ObjectID = require('mongodb').ObjectID
const app = express()

app.use(express.json())


const url = 'mongodb+srv://superadmin:Boom1920020102@cluster0.wl5lq.mongodb.net/buflix?retryWrites=true&w=majority'
const client = new MongoClient(url,{useNewUrlParser:true})
let db,bookCollection

async function connect(){
    await client.connect()
    db = client.db('buflix')
    bookCollection = db.collection('book')
}
connect()

app.post('/book',async(req,res) => {
})

app.get('/book/:id',(req,res) =>{
//input
let id = req.params.id
//process
const book = await bookCollection.findOne({_id: ObjectID(id)})
const cursor = await bookCollection.find({})
const result = await cursor.toArray()
    


    //output
res.status(200).json(book)
})





app.post('/book',async(req,res) =>{
//input

let newtitle = req.body.title
let newprice = req.body.price
let newunit = req.body.unit
let newisbn = req.body.isbn
let newimageurl = req.body.imageurl




//key: value
let newbook = {
    title: title,
    price :newprice,
    unit:newunit,
    isbn:newisbn,
    imageurl: newimageurl,
    

}
let movieID = 0


//process
const result = await bookCollection.insertOne(newbook)
bookID = result.insertedID

//output
res.status(201).json(bookID)
})
const port = 3000
app.listen(port,() => console.log(`Server started again at ${port}`))