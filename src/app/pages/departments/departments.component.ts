import { Component } from '@angular/core';

@Component({
  selector: 'app-departments',
  standalone: true,
  template: `
    <section class="page">
      <h2>Departments</h2>
      <div class="dept-grid">
        <div class="dept-card">Emergency</div>
        <div class="dept-card">Cardiology</div>
        <div class="dept-card">Orthopedics</div>
        <div class="dept-card">Radiology</div>
      </div>
    </section>
  `,
  styles: [
    `
      .page { padding: 24px; }
      .dept-grid { display: grid; grid-template-columns: repeat(4, minmax(140px, 1fr)); gap: 18px; }
      .dept-card { background: #fff; border: 1px solid #dfe7f5; padding: 18px; border-radius: 12px; text-align: center; font-weight: 600; }
    `
  ]
})
export class DepartmentsComponent {}
