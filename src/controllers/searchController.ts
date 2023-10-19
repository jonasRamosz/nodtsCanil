import { Request, Response} from "express";

import { Pet } from "../models/pet";
import { createMenuObject } from "../helpers/createMenuObject";

export const search = (req:Request, res:Response) =>{
    let querry:string = req.query.q as string;
    
    if(!querry) {
        res.redirect('/');
        return;
    }

    let list = Pet.getFromName(querry);     
    
    res.render('pages/page', {
        menu: createMenuObject(''),
        list,
        querry
    })
}