import { Component, OnInit, HostListener } from '@angular/core';
import * as io from 'socket.io-client';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  room
  num_mens
  bluered = false
  colors = [ '#0000ff', '#ffffff', '#ff0099', '#ffff00',
              '#ff6600', '#cc00ff', '#ff0000', '#ff00ff',
              '#cccccc', '#00ccff', '#ccff66', '#87ceff' ]
  socket: SocketIOClient.Socket;
  users = {a: 1}
  user = JSON.parse(localStorage.getItem('user'))
  messages = [{date: this.user.date, username: 'Rick', message: 'Whats up?', color:'#ccff66'}]
  
  constructor(private route : ActivatedRoute, private ts: Title) {
    this.socket = io.connect('http://localhost:3001/');
    this.room = route.snapshot.params.room
  }

  @HostListener('window:blur', ['$event'])
    onBlur(event: any): void {
        this.bluered = true
    }
  @HostListener('window:focus', ['$event'])
    onFocus(event: any): void {
      this.bluered = false
      this.num_mens = 0
    }

  ngOnInit(): void {
    
    this.socket.emit('add user', {user: this.user.username, room: false})
    this.socket.on('login', obj => console.log(obj))
    this.socket.on('refresh users', obj => {
      this.users = obj.users.reduce((acc,u)=> {
        acc[u] = 1
        return acc
      }, {})
    })
    this.socket.on('login failed', obj => console.log(obj))
    this.socket.on('blink', data => {
      this.users[data] = 0
      setTimeout(() => this.users[data] = 1, 50);
    })
    this.socket.on('new message', obj => {
      if(obj.room === (this.room || "")){
        this.addChatMessage(obj);
      }
    })
    this.socket.on('log', obj => console.log(obj))
  }

  send(e, nm){
    this.socket.emit('blink', this.user.username)
    if(e.keyCode===13){
      this.socket.emit('new message', nm.value)

      nm.value=''
    }
  }

  addChatMessage = (data, options={}) => {
    if(this.bluered){
      this.num_mens += 1
      this.ts.setTitle(`(${this.num_mens}) ${this.room || 'Chat'}`)
    }
    options['prepend'] = true

    this.messages.unshift({
      username: data.username, 
      color: this.getUsernameColor(data.username),
      message: data.message,
      date: data.hora
    })
  }

  getUsernameColor = username => {
    let hash = 7
    for (let i = 0; i < username.length; i++) {
       hash = username.charCodeAt(i) + (hash << 5) - hash
    }
    let index = Math.abs(hash % this.colors.length)
    return this.colors[index]
  }

}
