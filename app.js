const express = require('express'); // web 라이브러리
const path = require('path');   // 현재경로
const morgan = require('morgan');  // 개발시에 로그 확인 하는 라이브러리
const nunjcks = require('nunjucks');

const indexRouter = require('./route');
const usersRouter = require('./route/users');
const commentsRouter = require('./route/users');

const {User,Comment} = require('./model/db')

const app = express();
app.set('port',process.env.PORT || 3001);
app.set('view engine','html');
nunjcks.configure('view',{
    express :app,
    watch: true
});



app.use(morgan('dev')); // 개발시에 로그 확인 하는 라이브러리

app.use(express.static(path.join(__dirname,'public')));
app.use(express.static(path.join(__dirname,'img')));

app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/comments', commentsRouter);

app.listen(app.get('port'),()=>{
    console.log(app.get('port'),'번 서버 시작');
})