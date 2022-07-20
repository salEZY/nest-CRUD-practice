import { PhotoEntity } from "src/photos/photo.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity({ name: 'users' })
export class UsersEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    password: string;

    @OneToMany(type => PhotoEntity, photoEntity => photoEntity.user)
    photos: PhotoEntity[]

}