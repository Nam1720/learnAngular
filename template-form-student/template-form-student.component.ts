import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form-student',
  templateUrl: './template-form-student.component.html',
  styleUrls: ['./template-form-student.component.scss'],
})
export class TemplateFormStudentComponent implements OnInit {
  student = {
    studentCode: 1800100,
    studentName: 'phạm văn nam',
    studentAddress: 'hà nội',
  };
  constructor() {}

  ngOnInit(): void {}

  onSubmit(createStudentForm: NgForm) {
    console.log('createStudentForm', createStudentForm.value);
  }
}
