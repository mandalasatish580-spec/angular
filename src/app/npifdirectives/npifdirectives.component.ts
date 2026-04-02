import { Component } from '@angular/core';

@Component({
  selector: 'app-npifdirectives',
  templateUrl: './npifdirectives.component.html',
  styleUrl: './npifdirectives.component.css'
})
export class NpifdirectivesComponent {
      imgurl:any;
      displayMsg(){
        this.imgurl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlrgGKUJFD2XqTxUTZ3G9EPxmJnmqOK9WTZwQOi-vwNMeQoy6lq0Z-eX-AUKIUk7EtMIwl2Q&s";
      }
      hideMsg(){
        this.imgurl="";
      }
}
