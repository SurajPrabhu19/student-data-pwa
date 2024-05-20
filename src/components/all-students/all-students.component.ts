import { Component } from '@angular/core';
import { } from '@angular/material/';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { StudentService } from '../services/student-service/student.service';

@Component({
  selector: 'app-all-students',
  standalone: true,
  imports: [RouterModule, MatIconModule, MatCardModule, MatDividerModule],
  templateUrl: './all-students.component.html',
  styleUrl: './all-students.component.scss'
})
export class AllStudentsComponent {

  students: any = [{ name: "a" }, { name: "b" }]
  /**
   *
   */
  constructor(
    private studentService: StudentService
  ) {
    this.studentService.getAllStudents().subscribe(
      (res: any) => {
        this.students = res;
      }
    )
  }
}
