import { Component } from '@angular/core';

@Component({
  selector: 'app-appointments',
  standalone: true,
  template: `
    <section class="page">
      <h2>Appointments</h2>
      <ul>
        <li>Dr. Sharma — 09:00 AM — Consultation</li>
        <li>Dr. Nair — 11:30 AM — Follow-up</li>
        <li>Dr. Jacob — 02:00 PM — Lab Review</li>
      </ul>
    </section>
  `,
  styles: [
    `
      .page { padding: 24px; }
      ul { background: #fff; border: 1px solid #dfe7f5; border-radius: 12px; padding: 18px 20px; line-height: 2; }
    `
  ]
})
export class AppointmentsComponent {}
