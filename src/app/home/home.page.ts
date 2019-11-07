import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  lorem_ipsum: string = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";
  birthdate = new Date();
  usdollar = 7.4567895; 
  isBlue = "";;
  imgsrc = "https://picsum.photos/id/98/250/250";

  constructor() {}

}
