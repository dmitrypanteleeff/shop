import { Component, OnInit } from '@angular/core';
import { LoginForm } from 'src/app/types/LoginForm';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { AuthService } from '../auth.service';

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
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  sendFile() {
    this.authService.register(this.form)
  }

  isLoading() {
    return this.authService.isLoading
  }

}
