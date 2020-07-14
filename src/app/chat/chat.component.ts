import { Component, OnInit } from '@angular/core';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  socket: SocketIOClient.Socket;
  users = ['b']
  user = JSON.parse(localStorage.getItem('user'))
  messages = [{date: this.user.date, username: 'Rick', message: 'Whats up?'}]
  constructor() {
    this.socket = io.connect('http://localhost:3001/chat');
  }

  ngOnInit(): void {
    
    this.socket.emit('add user', {user: this.user.username, room: false})
    this.socket.on('login', obj => console.log(obj))
    this.socket.on('refresh users', obj => console.log(obj))
    this.socket.on('login failed', obj => console.log(obj))
    this.socket.on('new message', obj => console.log(obj))
    this.socket.on('log', obj => console.log(obj))
    this.socket.on('blink', obj => console.log(obj))
  }

  send(nm){
    console.log(nm)
  }

}
