import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mypipes'
})

export class MypipesPipe implements PipeTransform {

  imagURL: any;
  fallbackURL = "https://dummyimage.com/300/09f/fff.png";

  transform(value: any, ...args: any[]): any {
    if(value){
      this.imagURL =  value;
    }else{
      this.imagURL = this.fallbackURL;
    }

    return this.imagURL;
  }

}
