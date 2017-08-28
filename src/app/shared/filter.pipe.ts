import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(args === 'all'){
      return value;
    }
    else{
      return value.filter(item => {
        return item.category === args;
      })
    }
  }

}
