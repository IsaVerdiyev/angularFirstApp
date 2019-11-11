import { Component, OnInit, NgZone, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-baku-bus',
  templateUrl: './baku-bus.component.html',
  styleUrls: ['./baku-bus.component.scss']
})
export class BakuBusComponent implements OnInit {

  constructor(private httpClient: HttpClient, private zone: NgZone, private ref: ChangeDetectorRef) { }

  buses = new Map<string, any>();
  lat = 40.4093;
  lng = 49.8671;
  zoom = 12;
  async ngOnInit() {
    await this.getBuses();

    setInterval( async() => {
       await this.getBuses()}, 10000
    );

  }


  async getBuses(): Promise<void>{
    let response = await this.httpClient.get<any>('https://localhost:5001/api/buses').toPromise();
    this.updateBuses(response.BUS);
  }

   async updateBuses(recievedBuses:Array<any>){
    for(var bus of  recievedBuses){
      if(!this.buses.has(bus['@attributes'].BUS_ID))
        this.buses.set(bus['@attributes'].BUS_ID, bus);   
      else {
        let current = this.buses.get(bus['@attributes'].BUS_ID);
        current['@attributes'].LATITUDE = bus['@attributes'].LATITUDE;
        current['@attributes'].LONGITUDE = bus['@attributes'].LONGITUDE; 
      }
    }
  }

}
