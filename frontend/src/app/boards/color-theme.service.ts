import { Injectable } from '@angular/core';
import { ThemeColor } from "./models";

@Injectable({
  providedIn: 'root'
})
export class ColorThemeService {

  constructor() { }

   colorThemes: ThemeColor[] = [
    {id: 1 ,name: 'Dark Blue', class: 'primary'},
    {id: 2 ,name: 'Grey', class: 'secondary'},
    {id: 3 ,name: 'Green', class: 'success'},
    {id: 4 ,name: 'Red', class: 'danger'},
    {id: 5 ,name: 'Light Blue', class: 'info'},
    {id: 6 ,name: 'Yellow', class: 'warning'},
  ];

  getBackgroundColor(id:number){
    for (var i = 0; i < this.colorThemes.length; i++) {
       if( this.colorThemes[i].id == id){
          return "bg-"+ this.colorThemes[i].class;
       }      
    }
    return null;
  }

  getBorderColor(id:number){
    for (var i = 0; i < this.colorThemes.length; i++) {
       if( this.colorThemes[i].id == id){
          return "border-"+ this.colorThemes[i].class;
       }      
    }
    return null;
  }

  getButtonBorder(id:number){
    for (var i = 0; i < this.colorThemes.length; i++) {
       if( this.colorThemes[i].id == id){
          return "btn-outline-"+ this.colorThemes[i].class;
       }      
    }
    return null;
  }

  textColor(id:number){
    for (var i = 0; i < this.colorThemes.length; i++) {
       if( this.colorThemes[i].id == id){
          return "text-"+ this.colorThemes[i].class;
       }      
    }
    return null;
  }
  
}
