import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {
  private apiUrl = 'http://localhost:8080/api'; // Assuming your API endpoint

  constructor(private http: HttpClient) { }

  login(credentials: { username: string, password: string }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/authenticate`, credentials)
      .pipe(
        tap(res => {
          console.log(res)
          localStorage.setItem('token', res.jwt);
        })
      );
  }

  logout() {
    localStorage.removeItem('token');
  }

  getToken(): string {
    const userJson = localStorage.getItem('token');
    return userJson || "";
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}
