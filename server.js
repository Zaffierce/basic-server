const e = require('express');
const app = e();
​
app.use(e.static('./public'));
​
app.listen(process.env.PORT);