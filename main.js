var restify = require('restify');
var server = restify.createServer();
server.use(restify.bodyParser());
server.listen(8082, function() {
  console.log('%s listening at %s', server.name, server.url);
});
// ('./routes');