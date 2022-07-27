import { Body, Controller, Post } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { CreateQuestionDto } from './dto/create-question.dto';
import { Category } from './interfaces/category.interface';
import { Question } from './interfaces/question.interface';
import { QuizService } from './quiz.service';

@Controller('quiz')
export class QuizController {
    constructor(private quizService: QuizService) { }

    @Post('categories')
    async createCategories(@Body() categories: CreateCategoryDto): Promise<Category[]> {
        return await this.quizService.createCategories(categories)
    }

    @Post('question')
    async createQuestion(@Body() question: CreateQuestionDto): Promise<Question> {
        return await this.quizService.createQuestion(question)
    }
}
