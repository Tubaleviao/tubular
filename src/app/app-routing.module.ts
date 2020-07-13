import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ChatComponent } from './chat/chat.component';


const routes: Routes = [
  { path: 'login', component: ChatComponent },
  { path: 'home', component: ChatComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'shooter', component: ChatComponent },
  { path: 'face', component: ChatComponent },
  { path: 'player', component: ChatComponent },
  { path: 'notes', component: ChatComponent },
  { path: 'recorder', component: ChatComponent },
  { path: '**', component: ChatComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    TooltipModule.forRoot(),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
