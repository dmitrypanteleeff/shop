import { Component, OnInit } from '@angular/core';
import { LoginForm } from 'src/app/types/LoginForm';

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

  constructor() { }

  ngOnInit(): void {
  }

  submit() {
    console.log(this.form);
  }

}
