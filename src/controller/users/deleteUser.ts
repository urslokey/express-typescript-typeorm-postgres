import { Request, Response } from "express";
import { dbConfig } from "../../dbconfig";
import { User } from "../../entity/User";

async function deleteUser(req: Request, res: Response){
    try{
        await dbConfig
        .createQueryBuilder()
        .delete()
        .from(User)
        .where("id = :id", { id: req.params.id })
        .execute()
        res.statusCode = 200;
        res.json({ message : "Success.", data : [] })
    }catch(error){
        res.statusCode = 500;
        res.json({ message : error.message, data : [] })
    }
}

export default deleteUser;