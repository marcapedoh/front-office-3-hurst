import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { environment } from 'src/app/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  login(authRequest: any): Observable<any> {
    return this.httpClient.post(environment.baseApiUrl+':8888/clients/login', { email: authRequest.email, password: authRequest.password }, { observe: 'response' }).pipe(
      tap((response: HttpResponse<any>) => {
        this.storeAuthToken(response.headers);
      })
    );
  }
  authToken: string | null = null
  private storeAuthToken(headers: HttpHeaders) {
    const authToken = headers.get('access-token');
    const clientId = headers.get('clientId');
    console.table(authToken)
    console.table(clientId)
    if (authToken && clientId) {
      this.authToken = authToken;
      localStorage.setItem('token', JSON.stringify(authToken));
      localStorage.setItem('clientId', clientId);
    }
  }

  register(registrationRequest: any): Observable<any> {
    return this.httpClient.post(environment.baseApiUrl+':8085/clients/register', registrationRequest);
  }
}
