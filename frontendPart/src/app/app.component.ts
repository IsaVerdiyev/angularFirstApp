import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FirstApp'; 
  num1 = 3;
  num2 = 5;
  image = 'https://www.thesprucepets.com/thmb/3zOwZGYooqPrRRmzgjgRhNH3PUc=/3558x2001/smart/filters:no_upscale()/Cat-rolling-GettyImages-165893132-58ac5ef05f9b58a3c90a144f.jpg'

  onButtonClick(): void{
    this.title = 'Clicked';
  }
}
