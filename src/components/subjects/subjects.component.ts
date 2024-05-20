import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../services/student-service/student.service';

@Component({
  selector: 'app-subjects',
  standalone: true,
  imports: [MatIconModule, MatListModule, StudentService],
  templateUrl: './subjects.component.html',
  styleUrl: './subjects.component.scss'
})
export class SubjectsComponent {
  studentData: any;
  topper: any = {
    name: "",
    marks: Number.MIN_VALUE
  };

  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService
  ) {
    // super();
    this.route.params.pipe(
      // switchMap().subscribe();
      // switchMap((res:any) => {}).subscribe((res:any)=>{});
      switchMap((res: any) => this.studentService.getSubjectData(res?.subjectName)).subscribe((res: any) => {
        this.studentData = res;
        this.updateTopper();
      });
    );
  }

  updateTopper() {
    for (let i = 0; i < this.studentData.length; i++) {
      if (this.topper.marks < this.studentData[i].marks) {
        this.topper = this.studentData[i];
      }
    }
  }
}
