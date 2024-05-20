import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { StudentService } from '../components/services/student-service/student.service';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from '../components/user/user.component';
import { SubjectsComponent } from '../components/subjects/subjects.component';
import { AllStudentsComponent } from '../components/all-students/all-students.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, MatIconModule, MatButtonModule, MatToolbarModule, HttpClientModule, UserComponent, SubjectsComponent, AllStudentsComponent, DashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [StudentService]
})
export class AppComponent {
  title = 'student-data-pwa';
}
