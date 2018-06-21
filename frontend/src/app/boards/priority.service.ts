import { Injectable } from '@angular/core';
import { PriorityInfo } from "./models";

@Injectable({
  providedIn: 'root'
})
export class PriorityService {

  constructor() { }

  priorityInfo: PriorityInfo[] = [
    {id: 1 ,name: 'Low', class: 'info'},
    {id: 2 ,name: 'Medium', class: 'warning'},
    {id: 3 ,name: 'High', class: 'danger'},
    
  ];

  getTextColor(id:number){
    for (var i = 0; i < this.priorityInfo.length; i++) {
       if( this.priorityInfo[i].id == id){
          return "text-"+ this.priorityInfo[i].class;
       }else if(id == 0 || null || undefined ){
         return "text-"+ this.priorityInfo[1].class;
       }     
    }
    return null;
  }

  getPriority(id:number){
    for (var i = 0; i < this.priorityInfo.length; i++) {
      if( this.priorityInfo[i].id == id){
         return this.priorityInfo[i].name;
      }else if(id == 0 || null || undefined ){
        return this.priorityInfo[1].name;
      }    
   }
   return null;
  }
}
