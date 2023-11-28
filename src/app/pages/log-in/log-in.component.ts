import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LInComponent } from './l-in/l-in.component';
import { HttpClientModule } from '@angular/common/http';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from '../../servicios/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [CommonModule,LInComponent,HttpClientModule, ReactiveFormsModule, FormsModule],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent {
  loginForm:any;
  constructor(private LogInservice:LoginService, private router:Router) {
    this.loginForm=new FormGroup({
      username: new FormControl(),
      password:new FormControl()
    })
  }

  onSubmit(){
    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;

    if(!this.loginForm.valid){
      return
    }
    this.LogInservice.login(username, password).subscribe({
      next: (user) => {
        console.log(user)
      },
      error: (error) => {
        console.log(error)
      },
    });
  }

}
