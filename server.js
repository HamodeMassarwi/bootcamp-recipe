const express = require('express')
let urllib = require('urllib');

const app = express()
const path = require('path')
app.use(express.static(path.join(__dirname, 'node_modules')))
app.use(express.static(path.join(__dirname, 'dist')))
const port = 9500

app.get('/recipes/:ingredient', function (req, res) {
    let ingredient = req.params.ingredient
    urllib.request(`https://recipes-goodness.herokuapp.com/recipes/${ingredient}`, function (err, data) {
        if (err) {
            throw err;
        }
        recipe = JSON.parse(data.toString())
        res.send(recipe)
    });
})

app.get('/sanity', function (req, res) {
    res.send('Hi')
})
app.listen(port, function () {

})


