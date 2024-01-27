import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
type imgobj = {
       "imgid": number,
       "name": string,
       "category": string,
       "path":string,
       "likes": number
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent{
   
   
   constructor(private http:ApiService){}


   links:string[] = ["all","nature","mountains","flowers","cartoons","under water","nights"]

   sortname: string ="all";
   sorting(category_name:any){
    console.log(this.sortname)
     this.sortname = category_name
     console.log(category_name,this.sortname)
   }


   imgdata:imgobj | any;
   error:any;
   ngOnInit(): void {
      // this.http.getimgdata().subscribe((data:any)=>{
      //     this.imgdata =  data;
      //     console.log(data)
      // },(error: any) => {
      //      this.error =error;
      //      console.error(`Error ${error}`);

      this.imgdata =this.http.getimgdata()
      console.log(this.imgdata);
  
  //  })
  }
   searchinput(data:any){
    this.sortname = data;
   }

   disablerightclick(e:any){
     e.preventDefault();
   }
}
