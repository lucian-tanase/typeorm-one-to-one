import { BaseEntity, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
import { User } from "./User";

@Entity()
export class Profile extends BaseEntity {

    @PrimaryColumn()
    @JoinColumn({ name: "user" })
    @OneToOne(() => User, entity => entity.user)
    user: User;

}