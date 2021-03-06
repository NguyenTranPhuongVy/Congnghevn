const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const connectData = require('./server/config/databases/connect');
// *link router
const routerHome = require('./server/routers/HomeRouter');
const routerProduct = require('./server/routers/ProductRouter');

const app = express();
const port = 5000;


// *express-handlebars
app.engine('.hbs', exphbs({extname: '.hbs'}));
app.set('view engine', '.hbs');

// *config router
app.use('', routerHome);
app.use('', routerProduct);

// *config path
app.set('views', path.join(__dirname, '/client/views/'));
app.use(express.static(__dirname + '/client/public/'));

// * connect database
connectData.connect();

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});