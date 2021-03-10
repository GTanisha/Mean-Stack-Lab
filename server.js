const express = require('express');
const app = express();
// set our port
const port = 3000;
app.get('/', (req, res) => res.send('Welcome to Mean stack tutorial! - name:Tanisha Gupta , University roll_no:1805461'));

app.get('/tanisha',function (req, res) {
    res.send('This is mean stack web development task - Tanisha Gupta');
});
// startup our app at http://localhost:3000
app.listen(port, () => console.log(`Example app listening on port ${port}!`));