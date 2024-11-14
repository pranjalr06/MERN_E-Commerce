const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');

//database connection -
mongoose.connect('mongodb+srv://pranjalrodge:pranjalrodge@cluster0.6s8fo.mongodb.net/')
.then(() => console.log("Mongodb Successfully connected..."))
.catch((error) => console.log(error));


const app = express();
const PORT = process.env.PORT || 5000;

app.use(
    cors({
        origin : ' http://localhost:5173/',  //client localhost address
        methods : ['GET' , 'POST' , 'DELETE' , 'PUT'],
        allowedHeaders : [
            'Content-Type',
            'Authorization',
            'cache-Control',
            'Expires',
            'Pragma'
        ],
        credentials : true 
    })
);

app.use(cookieParser());
app.use(express.json());

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));