import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InsumosService {
  private apiUrl = 'https://ad1d-200-192-114-19.ngrok-free.app/api/insumo/all';

  constructor(private http: HttpClient) {}

  getInsumos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  
  deleteInsumo(id: number): Observable<any> {
    const url = `https://ad1d-200-192-114-19.ngrok-free.app/api/insumo/${id}`;
    return this.http.delete<any>(url);
  }

  createInsumo(insumo: any): Observable<any> {
    return this.http.post<any>('https://ad1d-200-192-114-19.ngrok-free.app/api/insumo/register', insumo);
  }
}
