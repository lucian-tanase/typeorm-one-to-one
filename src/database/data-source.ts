import "reflect-metadata";
import { DataSource } from "typeorm";
import { Profile } from "./entity/Profile";
import { User } from "./entity/User";

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "database.sqlite",
    synchronize: true,
    dropSchema: true,
    logging: true,
    entities: [
        Profile,
        User
    ],
    subscribers: [],
    migrations: [],
});