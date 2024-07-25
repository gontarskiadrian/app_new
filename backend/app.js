const express = require('express');
const { MongoClient } = require("mongodb");
 
// Tworzenie nowej aplikacji Express
const app = express();
const PORT = 3000;
 
// Replace the uri string with your MongoDB connection string.
const uri = "mongodb://mongo:27017/movies";
const client = new MongoClient(uri);
 
//Hello World
app.get('/', (req, res) => {
    res.send('Hello World');
 })
 
 
 
app.get('/movies', async (req, res) => {
  try {
    await client.connect();
    const database = client.db('sample_mflix');
    const movies = database.collection('movies');
 
    // Query for a movie that has the title 'Back to the Future'
    const query = { title: 'Back to the Future' };
    const movie = await movies.findOne(query);
 
    if (movie) {
      res.status(200).json(movie);
    } else {
      res.status(404).send('Movie not found');
    }
  } catch (error) {
    res.status(500).send(error.message);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
});
 
 
 
 
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});