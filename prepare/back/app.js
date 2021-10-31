const express = require('express');
const cors = require('cors');
const app = express();
const morgan = require('morgan');
const postRouter  = require('./routes/post');
const postsRouter = require('./routes/posts');
const userRouter  = require('./routes/user');
const passport = require('passport');
const passportConfig = require('./passport');
const session = require("express-session");
const cookieParser = require('cookie-parser');
const db = require('./models');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

db.sequelize.sync()
    .then(()=>{
        console.log('db연결 성공!');
    })
    .catch(console.error);

passportConfig();
app.use(cors({
    origin: 'http://localhost:3060',
    credentials: true,
}));
app.use('/', express.static(path.join(__dirname, 'upload')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
    saveUninitialized: false,
    resave: false,
    secret: process.env.COOKIE_SECRET,
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(morgan('dev'));



app.get('/',(req, res)=>{
    res.send('hellow')
})

app.use('/posts',postsRouter);
app.use('/post', postRouter);
app.use('/user', userRouter);

app.listen(3065, () => {
    console.log('서버 실행 중!');
  });
//res 응답 req요청