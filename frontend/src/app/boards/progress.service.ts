import { Injectable } from '@angular/core';
import { ProgressInfo } from "./models";


@Injectable({
  providedIn: 'root'
})
export class ProgressService {

  constructor() { }

  progressInfo: ProgressInfo[] = [
    {id: 1 ,name: 'No Progress', class: 'secondary'},
    {id: 2 ,name: 'In Progress', class: 'warning'},
    {id: 3 ,name: 'Complete', class: 'success'},
    
  ];

  getTextColor(id:number){
    for (var i = 0; i < this.progressInfo.length; i++) {
       if( this.progressInfo[i].id == id){
          return "text-"+ this.progressInfo[i].class;
       }else if(id == 0 || null || undefined ){
         return "text-"+ this.progressInfo[1].class;
       }     
    }
    return null;
  }

  getProgress(id:number){
    for (var i = 0; i < this.progressInfo.length; i++) {
      if( this.progressInfo[i].id == id){
         return this.progressInfo[i].name;
      }else if(id == 0 || null || undefined ){
        return this.progressInfo[1].name;
      }    
   }
   return null;
  }

}
