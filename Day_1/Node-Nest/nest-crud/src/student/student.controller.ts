import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { StudentService } from './student.service';
import { Student } from './student.models';
import { StudentUpdateDto } from './student.dto';

@Controller('student')
export class StudentController {
    constructor(private readonly studentService: StudentService) { }

    @Post()
    async createStudent(@Body() studentDto: Student) {
        return this.studentService.createStudent(studentDto)
    }

    @Get()
    allStudent() {
        return this.studentService.allStudent()
    }

    @Put(':id')
    async updateStudent(
        @Param('id') id: string, @Body() updateData: StudentUpdateDto
    ): Promise<Student> {
        return this.studentService.updateStudent(id, updateData)
    }

    @Delete(':id')
    async deleteStudent(@Param('id') id: string) {
        return this.studentService.deleteStudent(id)
    }
}