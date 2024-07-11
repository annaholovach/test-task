require('dotenv').config()
const Koa = require('koa');
const app = new Koa();
const bodyParser = require('koa-bodyparser');
const router = require('./routes/router')

const port = process.env.PORT || 3000

app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(port, () => console.log('started on', port));