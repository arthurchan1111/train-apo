import { Injectable } from  '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class BartService{
  private key: string = "MW9S-E7SL-26DU-VV8V";
  private json: string= "y";
  constructor(private _httpClient: HttpClient){

  }
  public getStations() {
     return this._httpClient.get("https://api.bart.gov/api/stn.aspx?cmd=stns&key=" + this.key +"&json=" + this.json);
}

public getStationInfo(station: string){
   return this._httpClient.get("https://api.bart.gov/api/stn.aspx?cmd=stninfo&key="+ this.key +"&json="+ this.json+ "&orig=" + station);

}

public getBuildingInfo(station: string){
  return this._httpClient.get("http://api.bart.gov/api/stn.aspx?cmd=stnaccess&key=" + this.key + "&json="+ this.json + "&orig=" + station);
}

public getStationSchedule(station:string){
    return this._httpClient.get("http://api.bart.gov/api/sched.aspx?cmd=stnsched&key="+ this.key + "&json=" + this.json+ "&l=1&orig="+station);
}

}
