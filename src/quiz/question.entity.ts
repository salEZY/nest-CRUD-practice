
import { Column, Entity, PrimaryGeneratedColumn, ManyToMany, JoinTable } from "typeorm";
import { CategoryEntity } from "./category.entity";


@Entity({ name: 'questions' })
export class QuestionEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    text: string;

    @ManyToMany(type => CategoryEntity, categoryEntity => categoryEntity.questions)
    @JoinTable({ name: 'quiz' })
    categories: CategoryEntity[]

}