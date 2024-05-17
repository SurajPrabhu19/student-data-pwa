import { Routes } from '@angular/router';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { SubjectsComponent } from '../components/subjects/subjects.component';
import { AllStudentsComponent } from '../components/all-students/all-students.component';

export const routes: Routes = [
    {
        path: "/dashboard",
        component: DashboardComponent
    },
    {
        path: "/subjects",
        component: SubjectsComponent
    },
    {
        path: "/students",
        component: AllStudentsComponent
    }
];
