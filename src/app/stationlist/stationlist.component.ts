import { Component, OnInit } from '@angular/core';
import { BartService } from '../bart_service/bart.service';

@Component({
  selector: 'stationlist',
  templateUrl: './stationlist.component.html',
})

export class StationComponent implements OnInit{
  private stations : any[];

  constructor (private bartService : BartService){}

  ngOnInit(){
    this.getStations();
    console.log(this.stations);
  }

  getStations(): void{
    this.bartService.getStations().subscribe(
      (data: any) => {console.log(data);
        this.stations  = data.root.stations.station;
        console.log(this.stations);
      }
    );

  }



}
