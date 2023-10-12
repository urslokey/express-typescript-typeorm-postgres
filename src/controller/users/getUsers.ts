import { Request, Response } from "express";
import { dbConfig } from "../../dbconfig";
import { User } from "../../entity/User";

async function fetchUsers(req: Request, res: Response){
    try{
        const users = await (dbConfig.getRepository(User)).find()
        res.statusCode = 200;
        res.json({ message : "Success.", data : users })
    }catch(error){
        res.statusCode = 500;
        res.json({ message : error.message, data : [] })
    }
}

export default fetchUsers;