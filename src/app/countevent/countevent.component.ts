import { Component } from '@angular/core';

@Component({
  selector: 'app-countevent',
  templateUrl: './countevent.component.html',
  styleUrl: './countevent.component.css'
})
export class CounteventComponent {
count=0;
incr()
{
  this.count++;
}
decr()
{
  this.count--;
}
}
