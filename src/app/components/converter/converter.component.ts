import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})
export class ConverterComponent implements OnInit {

  money:number = 0;

  result:number = 0;

  rate = 1;

  currency = 'USD';

  readonly apiUrl = 'https://free.currconv.com/api/v7/convert'
  readonly apiKey = 'sample-key-do-not-use';


  constructor(private httpClient: HttpClient) { 
  }

  
  async ngOnInit() {
    await this.getRate();
  }

  async getRate(){
    let apiParams = {
      q: `${this.currency}_AZN`,
      compact: `ultra`,
      apiKey: this.apiKey
    }

    let response = (await this.httpClient.get<any>(this.apiUrl, {params: apiParams}).toPromise());
    this.rate = response[`${this.currency}_AZN`];
  }

  onFormSubmit():void{
    
  }

  convert():void{
    this.result = this.money/this.rate;
  }

  onMoneyChange(): void{
    this.convert();
  }
  
  async onCurrencyChange():void{
    this.getRate();
    this.convert();
  }
}
