var http = require('http'),
    url = require('url');

function init(route) {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        
        route(pathname);
        
        console.log('Request for ' + pathname + ' received.');
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.write('Hello World');
        response.end();
    }
    
    http.createServer(onRequest).listen(8888);
    console.log('Server initialized');
}

exports.init = init;