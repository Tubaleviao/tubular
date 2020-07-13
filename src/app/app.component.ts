import { Component, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'tubalar';
  nav = ['chat', 'player', 'shooter', 'notes', 'face', 'recorder']
  
}
