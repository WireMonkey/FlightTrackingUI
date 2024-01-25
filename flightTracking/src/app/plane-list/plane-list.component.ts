import { Component, OnInit } from '@angular/core';
import { PlaneService } from '../service/plane.service';
import { Observable } from 'rxjs';
import { Plane } from '../model/plane';

@Component({
  selector: 'app-plane-list',
  templateUrl: './plane-list.component.html',
  styleUrl: './plane-list.component.css'
})
export class PlaneListComponent {
  
  planeList: Observable<Plane[]>;

  constructor(private readonly planeService: PlaneService){
    this.planeList = this.planeService.getPlaneList();    
  }
}
