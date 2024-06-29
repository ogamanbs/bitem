const express = require('express');
const app = express();

const db = require('./config/mongoose-connection');

const userRouter = require('./routes/userRouter');
const ownerRouter = require('./routes/ownerRouter');
const productsRouter = require('./routes/productsRouter');

const path = require('path');
const cookieParser = require('cookie-parser');

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());

app.use('/owner', ownerRouter);
app.use('/user', userRouter);
app.use('/products', productsRouter);

app.listen(3000, () => {
    console.log(' / running... ');
});