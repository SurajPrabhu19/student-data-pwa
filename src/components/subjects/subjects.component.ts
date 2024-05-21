import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { StudentService } from '../services/student-service/student.service';
import { CommonModule } from '@angular/common';
import {switchMap} from 'rxjs'

@Component({
  selector: 'app-subjects',
  standalone: true,
  imports: [MatIconModule, MatListModule, CommonModule, RouterModule],
  templateUrl: './subjects.component.html',
  styleUrl: './subjects.component.scss'
})
export class SubjectsComponent {
  studentsData: any;
  topper: any = {
    name: "",
    marks: Number.MIN_VALUE
  };

  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService
  ) {
    this.route.params.pipe(
      // switchMap().subscribe();
      // switchMap((res:any) => {}).subscribe((res:any)=>{});
      switchMap((res: any) => 
        this.studentService.getSubjectData(res?.subjectName)))
      .subscribe((res: any) => {
        this.studentsData = res;
        this.updateTopper();
      });
    
  }
  

  updateTopper() {
    for (let i = 0; i < this.studentsData.length; i++) {
      if (this.topper.marks < this.studentsData[i].marks) {
        this.topper = this.studentsData[i];
      }
    }
  }
}

