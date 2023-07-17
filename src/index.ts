import { AppDataSource } from "./database/data-source";
import { User } from "./database/entity/User";
import { Profile } from "./database/entity/Profile";

await AppDataSource.initialize();

const userEntity = User.create({
    user: "my-user-id",
});

await userEntity.save();

const profileEntity = Profile.create({
    user: userEntity,
});

await profileEntity.save();

await AppDataSource.destroy();