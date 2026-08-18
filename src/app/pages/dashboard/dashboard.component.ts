import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  template: `
    <section class="page">
      <h2>Hospital Overview</h2>
      <div class="stats-grid">
        <div class="card"><span>Patients</span><strong>12,480</strong></div>
        <div class="card"><span>Appointments</span><strong>348</strong></div>
        <div class="card"><span>Admissions</span><strong>96</strong></div>
        <div class="card"><span>Operations</span><strong>28</strong></div>
      </div>
    </section>
  `,
  styles: [
    `
      .page { padding: 24px; }
      h2 { margin-bottom: 20px; }
      .stats-grid { display: grid; grid-template-columns: repeat(4, minmax(140px, 1fr)); gap: 18px; }
      .card { background: #fff; border: 1px solid #dfe7f5; border-radius: 16px; padding: 20px; box-shadow: 0 8px 20px rgba(15,23,42,0.04); }
      .card span { display: block; color: #64748b; margin-bottom: 10px; }
      .card strong { font-size: 2rem; }
    `
  ]
})
export class DashboardComponent {}
