var http = require('http');
var fs = require('fs');
var app = http.createServer(function (request, response) {
    isEnterRoom(request.url)
    if (request.url == '/' || request.url == '/index.html') {
        fs.readFile('./index.html', null, function (error, data) {
            if (error) {
                response.writeHead(404);
                response.write('File not found');
            }
            else {
                response.write(data);
            }
            response.end();
        });
    }

    if (request.url == '/html/main' || request.url == '/main_client') {
        fs.readFile('./html/main_client.html', null, function (error, data) {
            if (error) {
                response.writeHead(404);
                response.write('File not found');
            }
            else {
                response.write(data);
            }
            response.end();
        });
    }
    if (request.url == '/html/Join' || request.url == '/Join') {
        fs.readFile('./html/Join.html', null, function (error, data) {
            if (error) {
                response.writeHead(404);
                response.write('File not found');
            }
            else {
                response.write(data);
            }
            response.end();
        });
    }
    if (request.url == '/html/MeetingFaceCheck' || request.url == '/MeetingFaceCheck') {
        fs.readFile('./html/MeetingFaceCheck.html', null, function (error, data) {
            if (error) {
                response.writeHead(404);
                response.write('File not found');
            }
            else {
                response.write(data);
            }
            response.end();
        });
    }
    if (request.url == '/html/Login') {
        fs.readFile('./html/Login.html', null, function (error, data) {
            if (error) {
                response.writeHead(404);
                response.write('File not found');
            }
            else {
                response.write(data);
            }
            response.end();
        });
    }

    if (request.url == '/js/main_client') {
        fs.readFile('./js/main_client.js', null, function (error, data) {
            if (error) {
                response.writeHead(404);
                response.write('File not found');
            }
            else {
                response.write(data);
            }
            response.end();
        });
    }
    if (isEnterRoom(request.url)) {
        fs.readFile('./html/streaming.html', null, function (error, data) {
            if (error) {
                response.writeHead(404);
                response.write('File not found');
            }
            else {
                response.write(data);
            }
            response.end();
        });
    }
});
function isEnterRoom(url) {

    var params = url.split('/');

    if (params[1] == 'room' && params[3] == 'user') return true;

    return false;
}
app.listen(3000);