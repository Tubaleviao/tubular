import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  nav = ['chat', 'player', 'shooter', 'notes', 'face', 'recorder']
  
  constructor() { }

  ngOnInit(): void {
  }

}
