import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'busNumber'
})
export class BusNumberPipe implements PipeTransform {

  transform(value: Map<string, any>, busNumber:string): any {
    if(busNumber === 'all'){
      return value;
    }
    else {
      let map = new Map<string, any>();
      for(var item of value){
        if(item[1]['@attributes'].DISPLAY_ROUTE_CODE == busNumber)
          map.set(item[0], item[1]);
      }
      return map;
    }
  }

}
