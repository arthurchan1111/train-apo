import { Component, OnInit } from '@angular/core';
import { BartService } from './bart_service/bart.service';

@Component({
  selector: 'station',
  templateUrl: './station.component.html',
})

export class StationComponent implements OnInit{
  stations: stations[];

  constructor (private bartService : BartService){}

  ngOnInit(){
    this.getStations();
  }

  getStations(): void{
    this.bartService.getStations().subscribe

  }



}
