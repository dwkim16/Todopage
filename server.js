const express = require('express'); //라이브러리 가져오기
const app = express();

app.listen(8080, function (){ //서버띄울 포트번호, 띄운 후 실행할 코드
    console.log('server listening on 8080')
}); 

app.get('/hello', function(req, res){
    res.send('안녕하세요');
});