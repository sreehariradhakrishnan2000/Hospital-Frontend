import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <main class="container">
      <header class="hero">
        <div>
          <span class="eyebrow">Hospital Information System</span>
          <h1>SmartCare HIS / EHR</h1>
        </div>
        <button class="primary-btn">Launch dashboard</button>
      </header>

      <section class="stats-grid">
        <article class="card">
          <span class="label">Patients</span>
          <strong>12,480</strong>
        </article>
        <article class="card">
          <span class="label">Appointments</span>
          <strong>348</strong>
        </article>
        <article class="card">
          <span class="label">Beds Occupied</span>
          <strong>86%</strong>
        </article>
        <article class="card">
          <span class="label">Queue</span>
          <strong>24</strong>
        </article>
      </section>

      <section class="module-grid">
        <div class="module">Patient Registration</div>
        <div class="module">Scheduling</div>
        <div class="module">EHR</div>
        <div class="module">Pharmacy</div>
        <div class="module">Laboratory</div>
        <div class="module">Radiology</div>
        <div class="module">Billing</div>
        <div class="module">Inventory</div>
      </section>

      <section class="timeline">
        <h2>Implementation roadmap</h2>
        <ul>
          <li>Phase 0 — Foundation</li>
          <li>Phase 1 — Registration & Scheduling</li>
          <li>Phase 2 — Clinical Core</li>
          <li>Phase 3 — Ancillary Clinical</li>
          <li>Phase 4 — Financial</li>
          <li>Phase 5 — Operations & Specialty</li>
          <li>Phase 6 — Patient-Facing</li>
          <li>Phase 7 — Interoperability & Hardening</li>
        </ul>
      </section>
    </main>
  `,
  styles: [
    `
      :host {
        display: block;
        min-height: 100vh;
        background: linear-gradient(135deg, #eef5ff 0%, #f6f8fd 100%);
        font-family: 'Segoe UI', Arial, sans-serif;
        color: #1a2433;
      }

      .container {
        max-width: 1180px;
        margin: 0 auto;
        padding: 40px 24px 80px;
      }

      .hero {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 20px;
        background: #ffffff;
        border: 1px solid #dfe7f5;
        border-radius: 18px;
        padding: 28px 30px;
        box-shadow: 0 10px 30px rgba(17, 24, 39, 0.06);
      }

      .eyebrow {
        display: inline-block;
        color: #3b82f6;
        font-weight: 700;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        font-size: 12px;
        margin-bottom: 8px;
      }

      h1 {
        margin: 0;
        font-size: clamp(2rem, 3vw, 3rem);
      }

      .primary-btn {
        border: none;
        background: linear-gradient(135deg, #2563eb, #1d4ed8);
        color: white;
        padding: 12px 20px;
        border-radius: 10px;
        font-size: 0.95rem;
        font-weight: 600;
        cursor: pointer;
      }

      .stats-grid {
        margin-top: 28px;
        display: grid;
        grid-template-columns: repeat(4, minmax(180px, 1fr));
        gap: 18px;
      }

      .card, .module, .timeline {
        background: white;
        border: 1px solid #e4ebf5;
        border-radius: 16px;
        box-shadow: 0 8px 24px rgba(15, 23, 42, 0.03);
      }

      .card {
        padding: 20px 18px;
      }

      .label {
        display: block;
        color: #64748b;
        font-size: 0.86rem;
        margin-bottom: 10px;
      }

      .card strong {
        font-size: 1.9rem;
      }

      .module-grid {
        margin-top: 28px;
        display: grid;
        grid-template-columns: repeat(4, minmax(160px, 1fr));
        gap: 18px;
      }

      .module {
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 120px;
        font-weight: 600;
        color: #1e3a5f;
        background: linear-gradient(180deg, #ffffff, #f9fbff);
      }

      .timeline {
        margin-top: 30px;
        padding: 22px 24px;
      }

      .timeline h2 {
        margin-top: 0;
        margin-bottom: 12px;
      }

      .timeline ul {
        margin: 0;
        padding-left: 18px;
        line-height: 2;
        color: #334155;
      }

      @media (max-width: 780px) {
        .stats-grid,
        .module-grid {
          grid-template-columns: 1fr 1fr;
        }

        .hero {
          flex-direction: column;
          align-items: flex-start;
        }
      }

      @media (max-width: 540px) {
        .stats-grid,
        .module-grid {
          grid-template-columns: 1fr;
        }
      }
    `
  ]
})
export class AppComponent {}
