const express = require('express');
const PORT = process.env.PORT || 1234;

app.get('/', (request, response) => {
    response.send("Hello there!");
  });
  


app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});