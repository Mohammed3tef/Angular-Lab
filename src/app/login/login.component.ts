import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { Ilogin } from './../ilogin';
import { UsersService } from './../user-service/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 user:Ilogin = {username:'', password: ''}
  constructor(private router: Router, private usersService: UsersService) { }

  login(userdata: Ilogin){
     const u = this.usersService.getUserByUserPass(userdata?.username, userdata?.password)
    u ? this.router.navigateByUrl('/user-details/'+u.id): console.log("no data")
  }
  ngOnInit(): void {
  }

}
