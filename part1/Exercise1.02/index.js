const express = require("express");
const app = express();
const port = 2000;

app.listen(port, () => {
    console.log(`The app is running on port ${port}.`)
})