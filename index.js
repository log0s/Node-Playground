var server = require('./test-server'),
    router = require('./test-router');

server.init(router.route);