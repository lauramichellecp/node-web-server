import express from 'express';
import cors from 'cors';

import helloController from "./controllers/hello-controller.js";
import userController from "./controllers/user-controller.js";
import tuitsController from "./controllers/tuits-controller.js";

const app = express();
app.use(cors());

helloController(app);
app.use(express.json());
userController(app);
tuitsController(app);

app.get('/', (req, res) => {res.send('Welcome to Full Stack Development!')});
app.listen(process.env.PORT || 4000);