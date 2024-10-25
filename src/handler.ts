const express = require('express');
const  { dayDb }= require('./db');
const bodyParser = require('body-parser');

const app = express();
const taskDb = new dayDb('./data.json');

//settings

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.get('/api/isworking', (req ?: any, res ?: any) => {
    res.send('ok');
});

app.get('/api/alltasks', (req ?: any, res ?: any) => {
    res.send(taskDb.getAllDaysTasks());
});

app.get('/api/dayTask', (req ?: any, res ?: any) => {
    res.send((taskDb.getOneDayTask(req.body.day)));
});


app.post('/api/newTask', (req ?: any, res ?: any) => {
    taskDb.addTask(req.body.day,req.body.id, req.body.hour, req.body.date, req.body.content);
    res.send('ok');
});

app.delete('/api/deleteTask', (req ?: any, res ?: any) => {
    taskDb.deleteTask(req.body.day, req.body.id);
    res.send('ok');
});

app.listen(process.env.PORT || 8080, () => {
    console.log(`Listen on port : ${8080}`)
});