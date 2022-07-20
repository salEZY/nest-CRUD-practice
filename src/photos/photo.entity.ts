import { UsersEntity } from "src/users/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity({ name: 'photos' })
export class PhotoEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    url: string;

    @ManyToOne(type => UsersEntity, userEntity => userEntity.photos, {
        onDelete: "CASCADE"
    })
    user: UsersEntity
} 