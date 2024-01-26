import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Plane } from '../model/plane';

@Injectable({
  providedIn: 'root'
})
export class PlaneService {

  constructor(private readonly httpClient: HttpClient) { }

  getPlaneList() {
    const keyHeader = new HttpHeaders({"x-functions-key" : environment.PlaneApiKey });
    
    return this.httpClient.get<Plane[]>(environment.PlaneApi, {headers: keyHeader});
  }
}
