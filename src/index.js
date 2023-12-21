const express = require("express")
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const routes = require("./routes/web")
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const cors = require('cors');


dotenv.config();


const app = express();
const port = process.env.PORT || 2023

app.use(cors())
app.use(express.json({ limit: '50mb' }))
app.use(express.urlencoded({ limit: '50mb' }))
app.use(bodyParser.json())
app.use(cookieParser())


routes(app)
// mongoose.connect(`${process.env.MONGO_DB}`)
//     .then(() => {
//         console.log('Connect DB success!')
//     })
//     .catch((err) => {
//         console.log(err)
//     })
   

// app.listen(port, () => {
//     console.log('Server is running in port:', + port);
// })

mongoose.connect(process.env.MONGO_DB)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(port, () => {
      console.log('Server is running on port:', port);
    });
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB:', err);
  });
