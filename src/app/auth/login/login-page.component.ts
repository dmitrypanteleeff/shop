import { Component, OnInit } from '@angular/core';
import { LoginForm } from 'src/app/types/LoginForm';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  isLoading: Boolean = false;

  //email: string = '';
  form: LoginForm = {
    email: '',
    password: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  submit() {
    if (this.isLoading) {
      return
    }

    console.log(this.form);
    this.isLoading = true;

    const auth = getAuth();
    signInWithEmailAndPassword(auth, this.form.email, this.form.password)
      .then((userCredential) => {
        // Signed in
        //const user = userCredential.user;
        alert('Login success');
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert('You have done the mistake in login or password')
      })
      .finally(() => this.isLoading = false)
  }

}
