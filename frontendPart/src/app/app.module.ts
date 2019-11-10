import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { CounterComponent } from './components/counter/counter.component';
import { TodoComponent } from './components/todo/todo.component';
import { PropogateDirective } from './directives/propogate.directive';
import { ConverterComponent } from './components/converter/converter.component';
import { DigitsPipe } from './pipe/digits.pipe';
import { BakuBusComponent } from './components/baku-bus/baku-bus.component';
import { AgmCoreModule } from '@agm/core';
@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    TodoComponent,
    PropogateDirective,
    ConverterComponent,
    DigitsPipe,
    BakuBusComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDQ3mpFWtosWuRW0-SVQFUmjxuTSguUrIs'
    })
  ], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
