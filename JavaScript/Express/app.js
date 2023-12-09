let express = require('express')
let ejs = require('ejs')
let app = express()

let courses = [
    {id: 0 , title: 'API'},
    {id: 1 , title: 'JavaScript'}
];

let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())

// app.all('*', requireAuthentication)  //all pages
// app.all('/grades/*', requireAuthentication)

app.enable('trust proxy')
console.log(app.enable('trust proxy'))

// app.disable('trust proxy')
// console.log(app.disabled('trust proxy'))

app.get('/', function(req, res){
    res.json(courses);
})

app.get('/courses', function(req, res){
    res.redirect('/courses/express')
})

app.get('/courses/express', function(req, res){
    res.send('Welcome to EXPRESS course')
})

app.post('/', function(req, res){
    
    let newCourse = {
        id: req.body.id,
        title: req.body.title
    };
    courses.push(newCourse);
    res.json(courses)
})

app.put('/u/:paramsId', function(req, res){
    let idFound = courses.find(function(item){return item.id === parseInt(req.params.paramsId)})

if(idFound){
    let update = {
        id: idFound.id,
        title: req.body.title
    }
    let targetIndex = courses.indexOf(idFound)

    courses.splice(targetIndex, 1, update)
    res.send(courses)
} else{
    res.sendStatus(404);
}

})

app.delete('/d/:id', function(req,res){
    let idFound = courses.find(function(item){return item.id === parseInt(req.params.id)})

    if(idFound){
        let targetIndex = courses.indexOf(idFound)
    
        courses.splice(targetIndex, 1)
        res.send(courses)
    } else{
        res.sendStatus(404);
    }
    
})

app.set('view engine', 'ejs')

app.get('/image', function(req, res){
    res.render('index')
})

app.get('/send', function(req, res){
    res.send([1, 2, 3]);
    
})

app.listen(3000)