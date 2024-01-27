import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {


  searchText:string = "";

  @Output()
  searching:EventEmitter<string> = new EventEmitter<string>()

  sendtoparent(searchinput:any){
    if(searchinput ===""){
      searchinput = "all";
    }
    this.searching.emit(searchinput)
  }

  enterfunc(mykeys:any){
      if(mykeys.key === "Enter"){
         this.sendtoparent(mykeys.target.value);
         console.log(mykeys.target.value)
      }
  }
}
