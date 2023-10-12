import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"

export const dbConfig = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "lokeY@2094",
    database: "development",
    synchronize: false,
    logging: false,
    entities: [User],
    migrations: [],
    subscribers: [],
})
