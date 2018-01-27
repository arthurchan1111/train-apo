import { Component, OnInit } from '@angular/core';
import { BartService } from '../bart_service/bart.service';

@Component({
  selector: 'stationinfo',
  templateUrl: './stationinfo.component.html',
})

export class StationInfoComponent implements OnInit{


  constructor (private bartService : BartService){}

  ngOnInit(){
    this.stationInfo();
    this.buildingInfo();
    console.log(this.stations);
  }

  stationInfo(station: string): void{
    this.bartService.getStationInfo(station).subscribe(
      (data: any) => {console.log(data);

      }
    );

   buildingInfo(station: string): void{
      this.bartService.getBuildingInfo(station).subscribe(
        (data: any) => {console.log(data);

        }
      );

  }
