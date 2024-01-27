import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterdata'
})
export class FilterdataPipe implements PipeTransform {

  transform(value:any, filterby:string):any {

    if(filterby === "all"){
      console.log(value)
      return value;
    }
    
      return value.filter((x:any)=>{
           return x.category === filterby
      })
  
  }

}
