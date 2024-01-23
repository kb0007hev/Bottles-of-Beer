const express = require('express');
const server = express();
const port = 3000;

let numberOfBottles = 99; // Initial number of bottles

server.get('/', (req, res) => {
  res.send(`
    <h1>${numberOfBottles} Bottles of beer on the wall</h1>
     <a href="/${numberOfBottles - 1}">Take one down, pass it around</a>
  `);
});

server.get('/:number_of_bottles', (req, res) => {
  const bottles = parseInt(req.params.number_of_bottles);

  if (bottles === 0) {
    res.send(`
      <h1>No more bottles of beer on the wall</h1>
      <a href="/">Start Over</a>
    `);
  } else {
    res.send(`
      <h1>${bottles} Bottles of beer on the wall</h1>
      <a href="/${bottles - 1}">Take one down, pass it around</a>
      <br>
      <a href="/">Start Over</a>
    `);
  }
});

// Start the server
server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});



//NOTES:
// Each time the href is clicked it triggers a new HTTP get request to the server
//repesenting a new page
//the updates to the href in the aTag is what creats this response