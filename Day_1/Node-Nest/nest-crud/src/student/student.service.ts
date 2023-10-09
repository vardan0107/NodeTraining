import { Injectable } from "@nestjs/common";
import {Model} from 'mongoose'
import { InjectModel } from '@nestjs/mongoose';
import { Student, StudentDocument } from "./student.models";

@Injectable()
export class StudentService {
  constructor(
    @InjectModel('student') private readonly studentModel: Model<StudentDocument>
  ){}

  //  creating a student 
  async createStudent(student: Student): Promise<Student>{
     const newStudent = new this.studentModel(student)
     return newStudent.save()
  }

  //  reading the student collection 
  async allStudent(){
    return this.studentModel.find({})
    .then((student)=>{return student})
    .catch((err)=>console.log(err))
  }

//   upadting the a student data
  async updateStudent(id,data):Promise<Student>{
    return this.studentModel.findByIdAndUpdate(id,data,{new:true})
  }

//   deleting the student data 
  async deleteStudent(id){
    return this.studentModel.findByIdAndRemove(id)
  }
}