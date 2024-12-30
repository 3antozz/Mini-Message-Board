const { Router } = require("express");
const indexRouter = Router();

const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date().toDateString(),
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: new Date().toDateString(),
    },
];


indexRouter.get('/', (req, res) => res.render('index', {title: 'Mini Message Board', messages: messages}));
indexRouter.get('/new', (req, res) => res.render('form', {title: 'New message'}));
indexRouter.post('/new', (req, res) => {
    messages.push({ text: req.body.messageText, user: req.body.messageUser, added: new Date().toDateString() });
    res.redirect("/")
});
indexRouter.get('/details/:index', (req, res) => {
    const index = req.params.index;
    res.render('details', {title: 'Message details', message: messages[index]}
    )});


module.exports = indexRouter;
