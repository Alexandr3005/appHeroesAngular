import { Component } from '@angular/core';

import { Router, RouterModule } from '@angular/router';
import { Auth } from 'src/app/auth/interfaces/auth.interface';

import { AuthService } from 'src/app/auth/services/auth.service'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  get auth(){
    return this.authService.auth;   // Lo uso en html {{auth.usuario}}
  }


  constructor(private router: Router, private authService: AuthService){}

  logout(): void{
   this.router.navigate(['./auth'])  }

}
