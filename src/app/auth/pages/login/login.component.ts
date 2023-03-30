import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Auth } from '../../interfaces/auth.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  constructor(private router: Router,
              private authService: AuthService){}

  login(){

    this.authService.login().subscribe(resp => {console.log(resp);
    
    if(resp.id){  // Si hay id, permite entrar 
      this.router.navigate(['./heroes'])
    }});

  
   

/*
    this.router.navigate(['./heroes'])
*/
     // Ir al backend 
  }

}
