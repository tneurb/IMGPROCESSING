import express from 'express';
import img from './api/images';

const routes = express.Router();

routes.get('/',(req,res) => {
    res.send('main api router');
});
routes.use('/images',img);


export default routes;