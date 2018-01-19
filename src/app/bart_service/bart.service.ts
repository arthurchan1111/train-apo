import { Injectable } from  '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class BartService{
  constructor(private _httpClient: HttpClient){

  }
  public getStations() :Observable<Station[]> {
     return this._httpClient.get("https://api.bart.gov/api/stn.aspx?cmd=stns&key=MW9S-E7SL-26DU-VV8V&json=y").
     pipe(
       tap(stations => this.log(`fetched stations`)),
      catchError(this.handleError('getStations', []))
     )

  }
}
