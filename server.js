import express from 'express';
import mongoose from "mongoose";
import cors from 'cors';

import helloController from "./controllers/hello-controller.js";
import userController from "./controllers/user-controller.js";
import tuitsController from "./controllers/tuits-controller.js";

const CONNECTION_STRING = "mongodb+srv://root:revolution9@cluster0.ioavd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    || "mongodb://localhost:27017/webdev";

mongoose.connect(CONNECTION_STRING);

const app = express();
app.use(cors());
app.use(express.json());

helloController(app);
userController(app);
tuitsController(app);

app.get('/', (req, res) => {res.send('Welcome to Full Stack Development!')});
app.listen(process.env.PORT || 4000);