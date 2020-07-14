import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service'
import { User } from '../user'
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: FormControl
  password = new FormControl('')
  remember = new FormControl(false)
  user: User = {username: ''}

  constructor(private api: ApiService, private router: Router) {
    this.username = new FormControl('')
  }

  ngOnInit(): void { }

  submit(){
    const nu = {username:this.username.value, password:this.password.value}
    this.api.login(nu).subscribe(j => {
      if(j.ok){
        this.user = {...j.data}
        if(this.remember.value) localStorage.setItem('user', JSON.stringify(this.user) )
        this.router.navigate(['/home'])
      }else console.log(j)
    })
  }

}
