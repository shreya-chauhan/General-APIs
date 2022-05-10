import { Request, Response, NextFunction } from 'express';
import axios, { AxiosResponse } from 'axios';

interface Favourite {
    orgId: Number;
    id: Number;
    name: String;
    link: String;
}

// getting all favs
const getAllFavs = async (req: Request, res: Response, next: NextFunction) => {
    // get some favs
    let result: AxiosResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
    let favs: [Favourite] = result.data;
    return res.status(200).json({
        message: favs
    });
};

// adding a fav
const addFav = async (req: Request, res: Response, next: NextFunction) => {
    // get the data from req.body
    let name: string = req.body.name;
    let link: string = req.body.link;
    // add the fav
    let response: AxiosResponse = await axios.post(`https://jsonplaceholder.typicode.com/posts`, {
        name,
        link
    });
    // return response
    return res.status(200).json({
        message: response.data
    });
};

// deleting a fav
const deleteFav = async (req: Request, res: Response, next: NextFunction) => {
    // get the fav id from req.params
    let id: string = req.params.id;
    // delete the fav
    let response: AxiosResponse = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
    // return response
    return res.status(200).json({
        message: 'fav deleted successfully'
    });
};

export default { getAllFavs, addFav, deleteFav };