const express = require('express'); // 방금 설치한 express 라이브러리 참고. express = nodejs용 라이브러리
const app = express(); // new express object
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended : true}));

// nodemon: 코드 변경후 저장하면 서버를 껏다 켰다 자동으로 해줌

// var db;
const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb+srv://dwkim16:12345@dowonmusic.s0uf5.mongodb.net/?retryWrites=true&w=majority', function(error, client){
    if (error) { return console.log(error); }
    // 접속이 완료가 되면 콜백 함수 실행

    // db = client.db('todopage');

    // db.collection('post').insertOne('data', function(err, result){
    //     console.log('saved');
    // });

    app.listen(8080, function() { // listen(server port number, 띄운 후 실행할 코드)
        console.log('mongodb server listening on 8080');
    });
});

// 함수 안에 함수 (function(){}) = 콜백함수 (Call-back function)
// 순차적으로 실행하고 싶을때 쓴다.

// route 가 '/' 하나만 있는경우 홈페이지
// .get('경로', function(요청내용, 응답할 방법){})
app.get('/', function(req, res) { // get(route to get info, function to do after get)
     res.sendFile(__dirname + '/index.html'); // request, response. 
     // __dirname: 이 파일이 있는 디렉토리 이름
});

app.get('/write', function(req, res) { // get(route to get info, function to do after get)
    res.sendFile(__dirname + '/write.html'); // request, response. 
    // __dirname: 이 파일이 있는 디렉토리 이름
});

// 어떤사람이 /add 경로로 POST 요청을 하면 ~~ 해주세요
app.post('/add', function(req, res){ // 정보는 req에 저장됨.
    res.send('전송완료');
    console.log(req.body.title);
    console.log(req.body.date);
});