import * as tuitsDao from "../tuits-dao.js";

const createTuit = async (req, res) => {
    const newTuit = req.body;
    newTuit.postedBy = {username: "Laura Calderon"};
    newTuit.likes = 0;
    newTuit.dislikes = 0;
    newTuit.time = "now";
    newTuit.handle = "laura_is_me";
    newTuit.avatarImg = "/tuiter/pic/profile.jpg";
    newTuit.logoImg = "/tuiter/pic/profile.jpg";
    const insertedTuit = await tuitsDao.createTuit(newTuit);
    res.json(insertedTuit);
};

const findAllTuits = async (req, res) => {
    const tuits = await tuitsDao.findAllTuits();
    res.json(tuits);
};

const updateTuit = async (req, res) => {
    const tuitIdToUpdate = req.params.tid;
    const updatedTuit = req.body;
    const status = await tuitsDao.updateTuit(tuitIdToUpdate, updatedTuit);
    res.send(status);
};

const deleteTuit = async (req, res) => {
    const tuitIdToDelete = req.params.tid;
    const status = await tuitsDao.deleteTuit(tuitIdToDelete);
    res.send(status);
};

export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findAllTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}


