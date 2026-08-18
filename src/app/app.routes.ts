import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/dashboard/dashboard.component').then(c => c.DashboardComponent) },
  { path: 'patients', loadComponent: () => import('./pages/patients/patients.component').then(c => c.PatientsComponent) },
  { path: 'appointments', loadComponent: () => import('./pages/appointments/appointments.component').then(c => c.AppointmentsComponent) },
  { path: 'departments', loadComponent: () => import('./pages/departments/departments.component').then(c => c.DepartmentsComponent) }
];
