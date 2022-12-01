//npm init -y
//npm install mongodb-legacy
//npm install express
//npm install cors
//npm i nodemon -D (aggiungo poi "start": "nodemon index.js" nello script del package.json e lancio con npm start) 

const { ObjectId } = require('mongodb-legacy');
var connString = 'mongodb://127.0.0.1:27017';
const MongoClient = require('mongodb-legacy').MongoClient;
const client = new MongoClient(connString);
const db = client.db('Esercizio1');
const prodotti = db.collection('ProductsList');
var express = require('express');
var app = express();
app.use(express.json());
var cors = require('cors');
app.use(cors());

//Metodo get elenco
app.get('/', (req, res) => {
    prodotti.find().toArray().then(result => {
        if (result === null) {
            res.status(404).send("Catalogo non presente");
        } else {
            res.json(result);
        }
    }).catch(error => {
        res.status(500).send(error.message);
    });
});