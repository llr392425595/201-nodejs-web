import mongoose from 'mongoose';
import express from 'express';
import config from 'config';
import router from './router';
import logger from 'morgan';
import bodyParser from 'body-parser';
mongoose.connect(config.get('mongoUri'));

const app = express();
app.use(logger('dev')); 
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: false })); 
app.get('/', (req, res)=> {
    res.send({
        'hello': 'world'
    })
});

router(app);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    // render the error page
    res.status(err.status || 500);
    res.json({error: err.message});
});

export default app.listen(config.get('httpPort'), ()=> {
    console.log('server started at http://localhost:' + config.get('httpPort'));   // eslint-disable-line no-console
})
