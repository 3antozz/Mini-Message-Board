const { Router } = require("express");
const indexRouter = Router();
const controller = require('../controllers/messagesController');


indexRouter.get('/', controller.getMessages);
indexRouter.get('/new', (req, res) => res.render('form', {title: 'New message'}));
indexRouter.post('/new', controller.addMessage);
indexRouter.get('/details/:index', controller.getDetails);


module.exports = indexRouter;
