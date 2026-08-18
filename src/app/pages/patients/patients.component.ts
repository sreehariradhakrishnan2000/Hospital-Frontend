import { Component } from '@angular/core';

@Component({
  selector: 'app-patients',
  standalone: true,
  template: `
    <section class="page">
      <h2>Patient Management</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1001</td>
            <td>John Smith</td>
            <td>42</td>
            <td>Active</td>
          </tr>
          <tr>
            <td>1002</td>
            <td>Sarah Wilson</td>
            <td>31</td>
            <td>Follow-up</td>
          </tr>
        </tbody>
      </table>
    </section>
  `,
  styles: [
    `
      .page { padding: 24px; }
      table { width: 100%; border-collapse: collapse; background: #fff; border-radius: 12px; overflow: hidden; }
      th, td { padding: 14px 16px; text-align: left; border-bottom: 1px solid #e5e7eb; }
      th { background: #eff6ff; }
    `
  ]
})
export class PatientsComponent {}
