import { Component, OnInit } from '@angular/core';
import { LoginForm } from 'src/app/types/LoginForm';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  form: LoginForm = {
    email: '',
    password: '',
    confirm:''
  }
  constructor() { }

  ngOnInit(): void {
  }

  sendFile() {
    console.log(this.form)
  }

}
