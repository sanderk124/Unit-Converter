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
    option = "length";
    const length = req.body.length
    const convertFrom = req.body.convertfrom;
    const convertTo = req.body.convertto;
    const finalAnswer = calculateAnswerLength(length, convertFrom, convertTo);
    res.render("index.ejs", {
        mode: option,
        answer: length,
        convertFrom: convertFrom,
        convertTo: convertTo,
        finalAnswer: finalAnswer
    });
})

function calculateAnswerLength(length, metric1, metric2) {
    const units = {
        "m": 1,         // meters (base unit)
        "cm": 0.01,     // centimeters to meters
        "mm": 0.001,    // millimeters to meters
        "km": 1000,     // kilometers to meters
        "inch": 0.0254, // inches to meters
        "ft": 0.3048,   
        "yd": 0.9144,   
        "mile": 1609.34 
    }
    let meters = length * units[metric1];
    let convertedLength = meters / units[metric2];
    return convertedLength.toFixed(2);
}

app.post("/handle-weight", (req, res) => {
    option = "weight";
    const weight = req.body.weight;
    const convertFrom = req.body.convertfrom;
    const convertTo = req.body.convertto;
    const finalAnswer = calculateAnsweWeight(weight, convertFrom, convertTo);    
    res.render("index.ejs", {
        mode: option,
        answer: weight,
        convertFrom: convertFrom,
        convertTo: convertTo,
        finalAnswer: finalAnswer
    });
});

function calculateAnsweWeight(weight, convertFrom, convertTo) {
    const standards = {
        "mg": 0.001,
        "g": 1,
        "kg": 1000,
        "on": 35.27,
        "po": 2.20
    }

    let aantalGram = weight * standards[convertFrom];
    let convertedweight = aantalGram / standards[convertTo];
    return convertedweight.toFixed(2);
};


app.get("/weight", (req, res) => {
    option = "weight";
    res.render("index.ejs", {
        mode: option
    });
})

app.listen(port, () => {
    console.log(`server started on port ${port}`)
})