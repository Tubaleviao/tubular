import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { PlayerComponent } from './player/player.component';
import { ShooterComponent } from './shooter/shooter.component';
import { FaceComponent } from './face/face.component';
import { NotesComponent } from './notes/notes.component';
import { RecorderComponent } from './recorder/recorder.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component'


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'shooter', component: ShooterComponent },
  { path: 'face', component: FaceComponent },
  { path: 'player', component: PlayerComponent },
  { path: 'notes', component: NotesComponent },
  { path: 'recorder', component: RecorderComponent },
  { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    TooltipModule.forRoot(),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
