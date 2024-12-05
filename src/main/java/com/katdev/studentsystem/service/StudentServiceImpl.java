package com.katdev.studentsystem.service;

import com.katdev.studentsystem.model.Student;
import com.katdev.studentsystem.repository.StudentRepository;
import jakarta.persistence.Access;
import org.springframework.beans.factory.annotation.Autowired;

public class StudentServiceImpl implements StudentService{
    @Autowired
    private StudentRepository studentRepository;
    @Override
    public Student saveStudent(Student student) {
        return studentRepository.save(student);
    }
}
