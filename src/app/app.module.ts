import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { SocketService } from './socket.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { PlayerComponent } from './player/player.component';
import { ShooterComponent } from './shooter/shooter.component';
import { FaceComponent } from './face/face.component';
import { NotesComponent } from './notes/notes.component';
import { RecorderComponent } from './recorder/recorder.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    PlayerComponent,
    ShooterComponent,
    FaceComponent,
    NotesComponent,
    RecorderComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [SocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
