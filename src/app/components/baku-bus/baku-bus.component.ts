import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-baku-bus',
  templateUrl: './baku-bus.component.html',
  styleUrls: ['./baku-bus.component.scss']
})
export class BakuBusComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  buses: any;

  async ngOnInit() {
    this.buses = await this.httpClient.get<any>('https://localhost:44398/api/buses').toPromise();
    console.log(this.buses);
  }

}
