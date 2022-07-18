import express from 'express';
import path from 'path';

import __dirname  from './dirname.js';
import cookieParser  from 'cookie-parser';
import cors  from 'cors';
import logger  from 'morgan';

import router  from './routes/routes.js';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use('/resources', router);


app.get('/', function (req, res) {
  res.json({
    success: true,
    message: 'Test route up and running!',
  });
});


app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
});

app.use(function (req, res, next) {
  res.status(404).json({message: "We couldn't find what you were looking for 😞"})
})

app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).json(err)
})

export default app;
