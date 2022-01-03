const express = require('express');
const dotenv = require('dotenv');
const routerCategoria = require('./routes/Categoria');
const connectDB = require('./config/db');
const errorHandler = require('./midlewares/error');

//Load env variables
dotenv.config({path : './config/config.env'});

const app = express();

const PORT = process.env.PORT || 5001;


//
app.use(express.json());

//Routes - Middlewares
app.use('/api/v1/catalogo/categoria',routerCategoria);

//midlewares
app.use(errorHandler);
connectDB();

//listener
const server = app.listen(PORT, console.log(`We're on port ${PORT}`));

process.on("unhandledRejection", (err, promise) => {
  console.log(`Error : ${err.message}`);
  //Close server and exit process
  server.close(() => process.exit(1));
});