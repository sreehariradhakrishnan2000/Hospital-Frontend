import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface Patient {
  id?: number;
  firstName?: string;
  lastName?: string;
  status?: string;
}

export interface Appointment {
  id?: number;
  patientId?: number;
  doctorName?: string;
  status?: string;
}

@Injectable({
  providedIn: 'root'
})
export class HospitalApiService {
  private readonly baseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  getHealth(): Observable<{ status?: string }> {
    return this.http.get<{ status?: string }>(`${this.baseUrl}/health`);
  }

  getPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(`${this.baseUrl}/v1/patients`);
  }

  getAppointments(): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(`${this.baseUrl}/v1/appointments`);
  }
}
