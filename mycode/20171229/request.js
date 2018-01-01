
// https 로 하고 싶으면 http를 https 로 바꿔주면 된다.
const http = require('http');

// http.request 가 아니라 http.get 을 쓰면 end 를 자동으로 호출한다.
const req = http.get(
    {
        hostname : "www.google.com"
    },
    res => {
        console.log(res.statusCode);
        console.log(res.headers);

        res.on('data', data => {
            console.log(data.toString());
        });

        //console.log(res);
    }
);

// req 는 event emitter. 에러를 이벤트 핸들링으로 핸들.

req.on('error', e => console.log(e));

//req.write('...');

//req.end();

console.log(req.agent);