import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryEntity } from './category.entity';
import { QuestionEntity } from './question.entity';
import { QuizController } from './quiz.controller';
import { QuizService } from './quiz.service';

@Module({
  imports: [TypeOrmModule.forFeature([QuestionEntity, CategoryEntity])],
  controllers: [QuizController],
  providers: [QuizService]
})
export class QuizModule { }
