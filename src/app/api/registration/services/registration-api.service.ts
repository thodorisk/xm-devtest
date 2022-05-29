import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { RegistrationFieldSrvDTO, RegistrationFormJsonData } from '../interfaces/registration-api.interface';

@Injectable({
  providedIn: 'root'
})
export class RegistrationApiService {

  constructor(private httpClient: HttpClient) { }

  public getRegistrationFormControls(): Observable<RegistrationFieldSrvDTO[]> {
    return this.httpClient.get<RegistrationFormJsonData>('/assets/registrationFieldsMockData.json').pipe(map((response: RegistrationFormJsonData) => response.data));
  }
}
