import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoryEntity } from './category.entity';
import { CreateCategoryDto } from './dto/create-category.dto';
import { CreateQuestionDto } from './dto/create-question.dto';
import { Category } from './interfaces/category.interface';
import { Question } from './interfaces/question.interface';
import { QuestionEntity } from './question.entity';

@Injectable()
export class QuizService {
    constructor(@InjectRepository(QuestionEntity) private readonly questionsRepository: Repository<QuestionEntity>,
        @InjectRepository(CategoryEntity) private readonly categoryRepository: Repository<CategoryEntity>) { }


    async createCategories(category: CreateCategoryDto): Promise<Category[]> {
        return await this.categoryRepository.save(category.categories)
    }

    async createQuestion(question: CreateQuestionDto): Promise<Question> {
        return await this.questionsRepository.save(question)
    }
}
