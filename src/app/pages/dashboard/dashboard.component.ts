import { Component, OnInit } from '@angular/core';
import { HospitalApiService } from '../../services/hospital-api.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  template: `
    <section class="page">
      <h2>Hospital Overview</h2>
      <div class="stats-grid">
        <div class="card"><span>Patients</span><strong>{{ patientCount }}</strong></div>
        <div class="card"><span>Appointments</span><strong>{{ appointmentCount }}</strong></div>
        <div class="card"><span>Admissions</span><strong>96</strong></div>
        <div class="card"><span>Operations</span><strong>28</strong></div>
      </div>
      <div class="status-box">
        <strong>API status:</strong> {{ apiStatus }}
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
      .status-box { margin-top: 20px; background: #fff; border: 1px solid #dfe7f5; padding: 16px 18px; border-radius: 12px; }
    `
  ]
})
export class DashboardComponent implements OnInit {
  patientCount = 0;
  appointmentCount = 0;
  apiStatus = 'Checking...';

  constructor(private hospitalApiService: HospitalApiService) {}

  ngOnInit(): void {
    this.hospitalApiService.getHealth().subscribe({
      next: () => this.apiStatus = 'Connected',
      error: () => this.apiStatus = 'Disconnected'
    });

    this.hospitalApiService.getPatients().subscribe({
      next: (patients) => this.patientCount = patients.length,
      error: () => this.patientCount = 0
    });

    this.hospitalApiService.getAppointments().subscribe({
      next: (appointments) => this.appointmentCount = appointments.length,
      error: () => this.appointmentCount = 0
    });
  }
}
