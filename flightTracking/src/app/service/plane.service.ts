import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Plane } from '../model/plane';

@Injectable({
  providedIn: 'root'
})
export class PlaneService {

  constructor(private readonly httpClient: HttpClient) { }

  getPlaneList() {
    console.log(environment.PlaneApi);
    return this.httpClient.get<Plane[]>(environment.PlaneApi)
  }
}
