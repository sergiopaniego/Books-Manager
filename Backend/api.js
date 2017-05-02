var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname + '/dist'));

let books = [
    {'title': 'The history of the valorous and wittie Knight-Errant Don-Quixote of the Mancha', 'description': 'Published in two volumes, in 1605 and 1615, Don Quixote is considered the most influential work of literature from the Spanish Golden Age and the entire Spanish literary canon. As a founding work of modern Western literature and one of the earliest canonical novels, it regularly appears high on lists of the greatest works of fiction ever published, such as the Bokklubben World Library collection that cites Don Quixote as...', 'id': 0 },
    {'title': 'Watchmen', 'description': 'Watchmen is an American comic-book limited series published by DC Comics in 1986 and 1987, and collected in 1987. The series was created by a British collaboration consisting of writer Alan Moore, artist Dave Gibbons, and colorist John Higgins', 'id': 1},
    {'title': 'The Diary of Anne Frank', 'description': 'It is a book of the writings from the Dutch language diary kept by Anne Frank while she was in hiding for two years with her family during the Nazi occupation of the Netherlands.', 'id': 2},
    {'title': 'The portray of Dorian Gray', 'description': 'The Picture of Dorian Gray is a philosophical novel by Oscar Wilde, first published complete in the July 1890 issue of Lippincott s Monthly Magazine.', 'id': 3}
];

let id = 4;

function searchBook(id){
    for(let i = 0; i < books.length; i++){
        if (books[i].id === id) {
            return i;
        }
    }
    return undefined;
}

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.route('/books/')

    .get((req, res) => {
        res.json(books);
    })

    .post((req, res) => {
        let book = req.body;
        book.id = id;
        id++;
        books.push(book);
        res.json(book);
    })

app.route('/books/:id')
    .put((req, res) => {
        let rId = parseInt(req.params['id']);
        let pos = searchBook(rId);
        if(pos !== undefined) {
            let newBook = req.body;
            newBook.id = rId;
            books[pos] = newBook;
            res.json(newBook);
        } else {
            res.sendStatus(404);
        }
    })

    .get((req, res) => {
        let rId = parseInt(req.params['id']);
        let pos = searchBook(rId);
        if (pos !== undefined){
            res.json(books[pos]);
        } else {
            res.sendStatus(404);
        }
    })

    .delete((req, res) => {
        let pos = searchBook(parseInt(req.params['id']));
        if (pos !== undefined) {
            let deletedBook = books[pos];
            books.splice(pos, 1);
            res.json(deletedBook);
        } else {
            res.statusCode(404);
        }
    })

    app.listen(8080, function () {
        console.log('Node backend listening on port 8080!');
    })