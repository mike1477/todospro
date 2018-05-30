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

    for (let theme of this.colorThemes) {
       if(theme.id === id){
          return "bg-"+ theme.class;
       }
       return null;
    }
  }
  
}
