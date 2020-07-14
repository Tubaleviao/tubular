import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { AuthGuard } from './auth.guard'

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
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'chat', component: ChatComponent, canActivate: [AuthGuard] },
  { path: 'shooter', component: ShooterComponent, canActivate: [AuthGuard] },
  { path: 'face', component: FaceComponent, canActivate: [AuthGuard] },
  { path: 'player', component: PlayerComponent, canActivate: [AuthGuard] },
  { path: 'notes', component: NotesComponent, canActivate: [AuthGuard] },
  { path: 'recorder', component: RecorderComponent, canActivate: [AuthGuard] },
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
