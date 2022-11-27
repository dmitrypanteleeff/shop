import { Component, OnInit } from '@angular/core';
import { LoginForm } from 'src/app/types/LoginForm';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {



  //email: string = '';
  form: LoginForm = {
    email: '',
    password: ''
  }

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  submit() {
    this.authService.login(this.form)
  }

  isLoading() {
    return this.authService.isLoading
  }

}
