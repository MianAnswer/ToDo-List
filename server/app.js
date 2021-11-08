const express = require('express');
const path = require('path');

const app = express();
const list = ["Harry", "Ron", "Hermione"];

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
    res.render("home");
});

app.get('/list', (req, res) => {
    res.render("list", { list });
});

app.get('/create-item', (req, res) => {
    res.render('create-item');
});

app.post('/item', (req, res) => {
    const item = req.body.item;
    list.push(item);
    res.redirect('list');
});

app.listen(8000, () => {
    console.log("Running on port 8000");
});