import { Request, Response } from "express";
import { dbConfig } from "../../dbconfig";
import { User } from "../../entity/User";

async function updateUser(req: Request, res: Response) {
  try {

    const upadateUser:any = {};
    if(req.body.firstName){
        upadateUser.firstName = req.body.firstName;
    }
    if(req.body.lastName){
        upadateUser.lastName = req.body.lastName;
    }
    if(req.body.age){
        upadateUser.age = req.body.age;
    }


    await dbConfig.createQueryBuilder()
      .update(User)
      .set(upadateUser)
      .where("id = :id", { id: req.params.id })
      .execute();


    res.statusCode = 200;
    res.json({ message: "Success.", data: [] });
  } catch (error) {
    res.statusCode = 500;
    res.json({ message: error.message, data: [] });
  }
}

export default updateUser;
