import { Request, Response } from "express";
import { dbConfig } from "../../dbconfig";
import { User } from "../../entity/User";



async function createUser(req: Request, res: Response) {
  try {

    await dbConfig
    .createQueryBuilder()
    .insert()
    .into(User)
    .values(req.body)
    .execute();
      
    res.statusCode = 201;
    res.json({ message: "Created successfully.", data: [] });
  } catch (error) {
    res.statusCode = 500;
    res.json({ message: error.message, data: [] });
  }
}

export default createUser;
