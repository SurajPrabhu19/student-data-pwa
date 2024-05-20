import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, RouterOutlet } from '@angular/router';
import { UserComponent } from '../user/user.component';
import { StudentService } from '../services/student-service/student.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [HttpClientModule, RouterModule, UserComponent, RouterOutlet],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  teacherProfile: any;

  constructor(
    private studentService: StudentService
  ) {
    this.studentService.getTeachersProfile().subscribe(
      (res:any) => {
        this.teacherProfile = res;
      }
    )
  }
}
