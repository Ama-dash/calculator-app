const express = require("express");

const app = express();

const PORT = 3000;


// Home page
app.get("/", (req, res) => {
    res.send("Calculator App is Running!");
});


// Addition
app.get("/add/:a/:b", (req, res) => {

    const a = Number(req.params.a);
    const b = Number(req.params.b);

    const result = a + b;

    res.send(`Result: ${result}`);
});


// Subtraction
app.get("/subtract/:a/:b", (req, res) => {

    const a = Number(req.params.a);
    const b = Number(req.params.b);

    const result = a - b;

    res.send(`Result: ${result}`);
});


// Multiplication
app.get("/multiply/:a/:b", (req, res) => {

    const a = Number(req.params.a);
    const b = Number(req.params.b);

    const result = a * b;

    res.send(`Result: ${result}`);
});


// Division
app.get("/divide/:a/:b", (req, res) => {

    const a = Number(req.params.a);
    const b = Number(req.params.b);

    if (b === 0) {
        res.send("Cannot divide by zero");
    }
    else {
        const result = a / b;
        res.send(`Result: ${result}`);
    }

});



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});