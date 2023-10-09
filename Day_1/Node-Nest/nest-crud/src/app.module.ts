import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentSchema } from './student/student.models';
import { StudentController } from './student/student.controller';
import { StudentService } from './student/student.service';
@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://vardanmuvvala:LVspHJB59DxeSwKn@cluster0.kcsnehj.mongodb.net/morningstar?retryWrites=true&w=majority',
    ),
    MongooseModule.forFeature([{name:'student',schema:StudentSchema}]),
  ],
  controllers: [StudentController],
  providers: [StudentService],
})
export class AppModule {}
