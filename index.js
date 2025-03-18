import express from "express";
import ejs from "ejs";
import bodyparser from "body-parser";

const port = 3000;
const app = express();
let option = "length";

app.use(bodyparser.urlencoded({ extended: true}))

app.get("/length", (req, res) => {
    option = "length";
    res.render("index.ejs", {
        mode: option,
        answer: null
    });
})

app.post("/handle-length", (req, res) => {
    const length = req.body.length
    const convertFrom = req.body.convertfrom;
    const convertTo = req.body.convertto;
    const finalAnswer = calculateAnswer(length, convertFrom, convertTo);
    res.render("index.ejs", {
        answer: length,
        convertFrom: convertFrom,
        convertTo: convertTo,
        finalAnswer: finalAnswer
    });
})

function calculateAnswer(length, metric1, metric2) {
    const units = {
        "m": 1,         // meters (base unit)
        "cm": 0.01,     // centimeters to meters
        "mm": 0.001,    // millimeters to meters
        "km": 1000,     // kilometers to meters
        "inch": 0.0254, // inches to meters
        "ft": 0.3048,   // feet to meters
        "yd": 0.9144,   // yards to meters
        "mile": 1609.34 // miles to meters
    }
    let meters = length * units[metric1];
    let convertedLength = meters / units[metric2];
    return convertedLength.toFixed(2);
}


app.get("/weight", (req, res) => {
    option = "weight";
    res.render("index.ejs", {
        mode: option
    });
})

app.get("/temperature", (req, res) => {
    option = "temperature";
    res.render("index.ejs", {
        mode: option
    });
})


app.listen(port, () => {
    console.log(`server started on port ${port}`)
})