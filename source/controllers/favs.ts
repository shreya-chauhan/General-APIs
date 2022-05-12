import { Request, Response, NextFunction } from 'express';
import axios, { AxiosResponse } from 'axios';
import dataLoad from '../data/DBProcessor';
import {v4 as uuidv4} from 'uuid';


// getting all favs
const getAllFavs = async (req: Request, res: Response, next: NextFunction) => {
    let result = await dataLoad.getAllFavourite();
    return res.status(200).json({
        message: result
    });
};

// adding a fav
const addFav = async (req: Request, res: Response, next: NextFunction) => {
    let orgId: string = "100";
    let Id:  string = uuidv4();
    let name: string = req.body.name;
    let link: string = req.body.link;
    let result = await dataLoad.addToFavourite(orgId, Id, name, link);
    return res.status(200).json({
        message: result
    });
};

// deleting a fav
const deleteFav = async (req: Request, res: Response, next: NextFunction) => {
    let orgId: string = "100";
    let id: string = req.params.id;
    let result = await dataLoad.deleteFavourite(orgId, id);
    return res.status(200).json({
        message: 'fav deleted successfully'
    });
};

export default { getAllFavs, addFav, deleteFav };