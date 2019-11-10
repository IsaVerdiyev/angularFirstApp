import { Component, OnInit, NgZone, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AgmCoreModule} from '@agm/core'
import { IfStmt } from '@angular/compiler';

@Component({
  selector: 'app-baku-bus',
  templateUrl: './baku-bus.component.html',
  styleUrls: ['./baku-bus.component.scss']
})
export class BakuBusComponent implements OnInit {

  constructor(private httpClient: HttpClient, private zone: NgZone, private ref: ChangeDetectorRef) { }

  buses: Map<string, any> = new Map<string, any>();
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
    let response = await this.httpClient.get<any>('https://localhost:44398/api/buses').toPromise();
    this.updateBuses(response.BUS);
  }


  // async initializeBuses(){
  //   let response = await this.httpClient.get<any>('https://localhost:44398/api/buses').toPromise();
  //   for(let bus of response.BUS){
  //     this.buses[bus['@attributes'].BUS_ID] = bus;
  //     console.log(bus);
  //   }
  //   console.log(this.buses);
  // }

   async updateBuses(recievedBuses:Array<any>){
    for(var bus of  recievedBuses){
      
      if(!this.buses.has(bus['@attributes'].BUS_ID)){
        this.buses.set(bus['@attributes'].BUS_ID, bus);
      }
      else {
        this.buses[bus['@attributes'].BUS_ID] = bus;
        this.ref.markForCheck();
        await this.delay(50);
        console.log("here");
      }
    }

    
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

}
