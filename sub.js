var express = require('express');
var http = require('http');
var app = express();

app.set('port',process.env.PORT || 3000);
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//첫 번째 미들웨어
app.use(function(req, res, next) {

    console.log('첫 번째 미들웨어 호출 됨');
    var approve ={'approve_id':'NO','approve_pw':'NO'};


    var paramId = req.body.id;
    var paramPassword = req.body.password;
    console.log('id : '+paramId+'  pw : '+paramPassword);

    //아이디 일치여부 flag json 데이터입니다.
    if(paramId == 'test01') approve.approve_id = 'OK';
    if(paramPassword == '123') approve.approve_pw = 'OK';

    res.send(approve);

});

http.createServer(app).listen(app.get('port'),function(){
   console.log("익스프레스로 웹 서버를 실행함 : "+ app.get('port')); 
});