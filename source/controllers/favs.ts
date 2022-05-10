import { Request, Response, NextFunction } from 'express';
import axios, { AxiosResponse } from 'axios';
import dataLoad from '../data/DBProcessor';
import {v4 as uuidv4} from 'uuid';

interface Favourite {
    name: String;
    link: String;
}

// getting all favs
const getAllFavs = async (req: Request, res: Response, next: NextFunction) => {
    // get some favs
    let result = await dataLoad.getAllFavourite();
    // return response
    return res.status(200).json({
        message: result
    });
};

// adding a fav
const addFav = async (req: Request, res: Response, next: NextFunction) => {
    // get the data from req.body
    let orgId: string = "b657c46c-f88d-414a-8ec7-a2f446fc1d12";
    let Id:  string = uuidv4();
    let name: string = req.body.name;
    let link: string = req.body.link;
    // add the fav
    let result = await dataLoad.addToFavourite(orgId, Id, name, link);
    // return response
    return res.status(200).json({
        message: result
    });
};

// deleting a fav
const deleteFav = async (req: Request, res: Response, next: NextFunction) => {
    // get the fav id from req.params
    let orgId: string = "b657c46c-f88d-414a-8ec7-a2f446fc1d12";
    let id: string = req.params.id;
    // delete the fav
    let result = await dataLoad.deleteFavourite(orgId, id);
    // return response
    return res.status(200).json({
        message: 'fav deleted successfully'
    });
};

export default { getAllFavs, addFav, deleteFav };