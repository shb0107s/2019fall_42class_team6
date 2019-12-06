var express = require('express');
var path = require('path');
var logger = require('morgan');

//var inteRealRouter = require('./routes/script');
var router = require('./routes/script');
var unityComm = require('./js/unityComm');

var app = express();

// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'pug');

app.set('port', process.env.PORT|| 3000);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(router);
unityComm.socketconn(app);
//app.use('/api/inteReal', inteRealRouter);
/*
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
*/
app.listen(app.get('port'),function(){
  console.log('Express server listening on port ' + app.get('port'));
});
module.exports = app;
