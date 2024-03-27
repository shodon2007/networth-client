require('dotenv').config();
const express = require("express");
const cors = require('cors');
const cookieParser = require('cookie-parser');
const router = require('./routes');
const errorMiddleware = require('./middlewares/error-middleware');

const app = express()
const PORT = process.env.PORT ?? 9999;

app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use('/api', router);
app.use(errorMiddleware);

app.get('/', (req, res) => {
  res.send('hello d')
})

async function startServer(port) {
  try {
    app.listen(port, () => console.log(`Server started on PORT ${port}`));
  } catch (e) {
    throw new Error(e);
  }
}

startServer(PORT);
