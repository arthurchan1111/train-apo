import { Component, OnInit } from '@angular/core';
import { BartService } from '../bart_service/bart.service';

@Component({
  selector: 'stationinfo',
  templateUrl: './stationinfo.component.html',
})

export class StationInfoComponent implements OnInit{
  private stationinfo: any[];
  private buildingInfo: any[];
  constructor (private bartService : BartService){}

  ngOnInit(){
    this.stationInfo("12th");
    this.buildingInfo("12th");
    console.log(this.stationinfo);
    console.log(this.buildingInfo);

  }

  stationInfo(station: string): void{
    this.bartService.getStationInfo(station).subscribe(
      (data: any) => {
       this.stationinfo = data.root.stations.station;
      }
    );
  }
   buildingInfo(station: string): void{
      this.bartService.getBuildingInfo(station).subscribe(
        (data: any) => {
          this.buildingInfo= data.root.stations.station;
        }
      );

  }
}
