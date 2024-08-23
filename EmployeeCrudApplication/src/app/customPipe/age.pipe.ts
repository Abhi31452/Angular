import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: Date | number,  ...args: unknown[]): number {
    
    let current:any= new Date().getFullYear;
    let empyear:any=new Date(value).getFullYear;
    return current-empyear ;
  }

}
