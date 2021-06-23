var modu = require('./index');
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');

//var logger = require('morgan');

//Cross Origin
var cors = require('cors');

//라우터 호출
var memberRouter = require('./router/member');

var app = express();

app.set('port', process.env.PORT || 3333);

app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(modu.expressSession({
    secret:'keyboard cat',
    resave: false,
    saveUninitialized: true
}));

//라우터 등록
app.use('/', memberRouter, function(){});

// 404(not found) 미들웨어 등록
/*app.use(function(req, res, next){
    next(createError(404));
});*/

modu.http.createServer(app).listen(app.get('port'), function(){
    console.log('서버시작');
});
