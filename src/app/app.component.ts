import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  template: `
    <div class="app-shell">
      <aside class="sidebar">
        <div class="brand">SmartCare HIS</div>
        <nav>
          <a routerLink="/">Dashboard</a>
          <a routerLink="/patients">Patients</a>
          <a routerLink="/appointments">Appointments</a>
          <a routerLink="/departments">Departments</a>
        </nav>
      </aside>

      <main class="content">
        <router-outlet></router-outlet>
      </main>
    </div>
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

      .app-shell {
        display: flex;
        min-height: 100vh;
      }

      .sidebar {
        width: 250px;
        background: #0f172a;
        color: white;
        padding: 28px 18px;
      }

      .brand {
        font-size: 1.5rem;
        font-weight: 700;
        margin-bottom: 28px;
      }

      nav {
        display: flex;
        flex-direction: column;
        gap: 12px;
      }

      nav a {
        color: #dfe7f5;
        text-decoration: none;
        padding: 12px 14px;
        border-radius: 10px;
        background: rgba(255,255,255,0.04);
      }

      .content {
        flex: 1;
      }
    `
  ]
})
export class AppComponent {}
